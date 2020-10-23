import { Service } from '@tsed/di';
import { plainToClass } from 'class-transformer';
import { OrderStatus } from '../enums/OrderStatus';
import { orderCollection } from '../mocks/OrderCollection';
import OrderModel from '../models/OrderModel';
import OrderPlaceModel from '../models/OrderPlaceModel';
import OrderQueryParamsModel from '../models/OrderQueryParamsModel';
import { Order } from '../schemas/Order';
import generateId from '../utils/GenerateId';
import { CustomerService } from './CustomerService';
import ProductOrderService from './ProductOrderService';
import { ProductService } from './ProductService';

@Service()
export class OrderService {
  constructor(
    private productService: ProductService,
    private productOrderService: ProductOrderService,
    private customerService: CustomerService
  ) {}

  getOrdersByQueryParams(queryParams: OrderQueryParamsModel): OrderModel[] {
    return orderCollection
      .filter((order) => !queryParams.status || queryParams.status === order.status)
      .map((order) => this.createOrderModel(order))
      .sort((a, b) => a.placedAt.getTime() - b.placedAt.getTime());
  }

  createOrder(model: OrderPlaceModel): void {
    orderCollection.push({
      id: generateId(),
      placedAt: new Date(),
      status: OrderStatus.PROCESSING,
      ...model,
    });
  }

  createOrderModel(order: Order): OrderModel {
    const productsWithQuantites = this.productOrderService.getProductOrdersByOrderId(order.id).map((productOrder) => ({
      quantity: productOrder.quantity,
      product: this.productService.getProductById(productOrder.productId),
    }));
    const customer = this.customerService.getCustomerById(order.customerId);
    // TODO remove customerId
    return plainToClass(OrderModel, {
      ...order,
      customer,
      products: productsWithQuantites,
    });
  }
}
