import { Service } from '@tsed/di';
import { OrderStatus } from '../enums/OrderStatus';
import { orderCollection } from '../mocks/OrderCollection';
import OrderPlaceModel from '../models/OrderPlaceModel';
import OrderQueryParamsModel from '../models/OrderQueryParamsModel';
import { Order } from '../schemas/Order';
import generateId from '../utils/GenerateId';

@Service()
export class OrderService {
  getOrdersByQueryParams(queryParams: OrderQueryParamsModel): Order[] {
    // TODO automatically match queryparams with properties somehow
    return orderCollection.filter((order) => !queryParams.status || queryParams.status === order.status);
  }

  createOrder(model: OrderPlaceModel): void {
    orderCollection.push({
      id: generateId(),
      placedAt: new Date(),
      status: OrderStatus.PROCESSING,
      ...model,
    });
  }
}
