import { Service } from '@tsed/di';
import { productOrderCollection } from '../mocks/ProductOrderCollection';
import ProductOrder from '../schemas/ProductOrder';

@Service()
export default class ProductOrderService {
  getProductOrdersByOrderId(orderId: string): ProductOrder[] {
    return productOrderCollection.filter((productOrder) => productOrder.orderId === orderId);
  }
}
