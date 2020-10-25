import { Service } from '@tsed/di';
import { productOrderCollection } from '../mocks/ProductOrderCollection';
import ProductOrderModel from '../models/ProductOrderModel';
import generateId from '../utils/GenerateId';
import ProductService from './ProductService';

/**
 * Handles getting and updating product orders.
 * Depends on:
 * - ProductService
 */
@Service()
export default class ProductOrderService {
  constructor(private productService: ProductService) {}

  /**
   * Gets all ProductOrders in an Order.
   * @param orderId The id of the order.
   */
  getProductOrdersByOrderId(orderId: string): ProductOrderModel[] {
    return productOrderCollection.filter((productOrder) => productOrder.orderId === orderId);
  }

  /**
   * Adds a ProductOrder to the database.
   * @param productOrder The ProductOrder
   */
  addProductOrder(productOrder: ProductOrderModel): void {
    this.productService.updateByExisting(productOrder.productId, (product) => ({
      quantity: product.quantity - productOrder.quantity,
    }));

    productOrderCollection.push({
      ...productOrder,
      id: generateId(),
    });
  }
}
