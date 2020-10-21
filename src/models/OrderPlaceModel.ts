import { CollectionOf, Enum, Property, Required } from '@tsed/common';
import { OrderStatus } from '../enums/OrderStatus';
import { PaymentMethod } from '../enums/PaymentMethod';
import ProductOrderModel from './ProductOrderModel';

export default class OrderPlaceModel {
  @Required()
  @Property()
  updatedAt: Date;

  @Required()
  @Enum(PaymentMethod)
  @Property()
  paymentMethod: PaymentMethod;

  @Required()
  @Enum(OrderStatus)
  @Property()
  status: OrderStatus;

  @Required()
  @CollectionOf(ProductOrderModel)
  @Property()
  productOrders: ProductOrderModel[];

  @Property()
  placedAt: Date;
}
