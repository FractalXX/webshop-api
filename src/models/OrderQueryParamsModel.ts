import { Enum } from '@tsed/common';
import { OrderStatus } from '../enums/OrderStatus';

export class OrderQueryParamsModel {
  @Enum(OrderStatus)
  status: OrderStatus;
}
