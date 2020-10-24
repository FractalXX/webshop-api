import { Service } from '@tsed/di';
import { productOrderCollection } from '../mocks/ProductOrderCollection';
import ProductOrderModel from '../models/ProductOrderModel';
import ProductOrder from '../schemas/ProductOrder';
import generateId from '../utils/GenerateId';
import { ProductService } from './ProductService';

@Service()
export default class ProductOrderService {
  constructor(private productService: ProductService) {}

  getProductOrdersByOrderId(orderId: string): ProductOrder[] {
    return productOrderCollection.filter((productOrder) => productOrder.orderId === orderId);
  }

  addProductOrder(productOrder: ProductOrder | ProductOrderModel): void {
    this.productService.updateByExisting(productOrder.productId, (product) => ({
      quantity: product.quantity - productOrder.quantity,
    }));

    productOrderCollection.push({
      ...productOrder,
      id: generateId(),
    });
  }
}
