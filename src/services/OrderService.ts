import { Service } from '@tsed/di';
import { BadRequest, NotFound } from '@tsed/exceptions';
import { plainToClass } from 'class-transformer';
import { OrderStatus } from '../enums/OrderStatus';
import { orderCollection } from '../mocks/OrderCollection';
import OrderModel from '../models/OrderModel';
import OrderPlaceModel from '../models/OrderPlaceModel';
import OrderQueryParamsModel from '../models/OrderQueryParamsModel';
import { Order } from '../schemas/Order';
import generateId from '../utils/GenerateId';
import { CustomerInfoService } from './CustomerInfoService';
import { CustomerService } from './CustomerService';
import ProductOrderService from './ProductOrderService';
import { ProductService } from './ProductService';

@Service()
export class OrderService {
  constructor(
    private productService: ProductService,
    private productOrderService: ProductOrderService,
    private customerService: CustomerService,
    private customerInfoService: CustomerInfoService
  ) {}

  getOrdersByQueryParams(queryParams: OrderQueryParamsModel): OrderModel[] {
    return orderCollection
      .filter((order) => !queryParams.status || queryParams.status === order.status)
      .map((order) => this.createOrderModel(order))
      .sort((a, b) => a.placedAt.getTime() - b.placedAt.getTime());
  }

  getOrderById(id: string): OrderModel {
    const order = orderCollection.find((order) => order.id === id);
    if (!order) {
      throw new NotFound(`Could not find order with id ${id}.`);
    }

    return this.createOrderModel(order);
  }

  createOrder(model: OrderPlaceModel): OrderModel {
    this.validateOrder(model);

    const customer = this.customerService.getCustomerById(model.customerId);
    const billingInfoId = model.billingInfoId || (customer?.billingInfo as string);
    if (!model.billingInfoId) {
      model.billingInfoId = billingInfoId;
    }

    if (!model.shippingInfoId) {
      model.shippingInfoId = billingInfoId;
    }

    const id = generateId();
    const order = {
      id,
      placedAt: new Date(),
      status: OrderStatus.PROCESSING,
      ...model,
    };
    orderCollection.push(order);

    model.productOrders.forEach((productOrder) => {
      this.productOrderService.addProductOrder({
        ...productOrder,
        orderId: id,
      });
    });

    return this.createOrderModel(order);
  }

  createOrderModel(order: Order): OrderModel {
    const productsWithQuantites = this.productOrderService.getProductOrdersByOrderId(order.id).map((productOrder) => ({
      quantity: productOrder.quantity,
      product: this.productService.getProductById(productOrder.productId),
    }));
    const customer = this.customerService.getCustomerById(order.customerId);
    const shippingInfo = this.customerInfoService.getCustomerInfoById(order.shippingInfoId);
    const billingInfo = this.customerInfoService.getCustomerInfoById(order.billingInfoId);

    return plainToClass(OrderModel, {
      ...order,
      customer,
      shippingInfo,
      billingInfo,
      products: productsWithQuantites,
    });
  }

  validateOrder(model: OrderPlaceModel): void {
    model.productOrders.forEach((productOrder) => {
      const product = this.productService.getProductById(productOrder.productId);
      if (!product) {
        throw new BadRequest(`Product with id ${productOrder.productId} does not exist.`);
      }

      if (product.quantity - productOrder.quantity < 0) {
        throw new BadRequest(`Quantity is too big for product with id ${productOrder.productId}.`);
      }
    });
  }
}
