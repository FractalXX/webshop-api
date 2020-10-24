import { CollectionOf, Enum, Property, Required } from '@tsed/common';
import { PaymentMethod } from '../enums/PaymentMethod';
import ProductOrderModel from './ProductOrderModel';

export default class OrderPlaceModel {
  @Required()
  @Enum(PaymentMethod)
  @Property()
  paymentMethod: PaymentMethod;

  @Required()
  @CollectionOf(ProductOrderModel)
  @Property()
  productOrders: ProductOrderModel[];

  @Required()
  @Property()
  customerId: string;

  @Property()
  shippingInfoId: string;

  @Property()
  billingInfoId: string;
}
