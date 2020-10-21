import { Service } from '@tsed/di';
import { orderCollection } from '../mocks/OrderCollection';
import OrderQueryParamsModel from '../models/OrderQueryParamsModel';
import { Order } from '../schemas/Order';

@Service()
export class OrderService {
  getOrdersByQueryParams(queryParams: OrderQueryParamsModel): Order[] {
    // TODO automatically match queryparams with properties somehow
    return orderCollection.filter((order) => !queryParams.status || queryParams.status === order.status);
  }
}
