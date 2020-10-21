import { Enum } from '@tsed/common';
import { OrderStatus } from '../enums/OrderStatus';

export default class OrderQueryParamsModel {
  @Enum(OrderStatus)
  status: OrderStatus;
}
