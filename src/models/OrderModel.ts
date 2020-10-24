import { Property } from '@tsed/common';
import { OrderStatus } from '../enums/OrderStatus';
import { PaymentMethod } from '../enums/PaymentMethod';
import CustomerInfoModel from './CustomerInfoModel';
import CustomerModel from './CustomerModel';
import ProductWithQuantityModel from './ProductWithQuantityModel';

export default class OrderModel {
  @Property()
  id: string;

  @Property()
  customer: CustomerModel;

  @Property()
  billingInfo: CustomerInfoModel;

  @Property()
  shippingInfo: CustomerInfoModel;

  @Property()
  placedAt: Date;

  @Property()
  updatedAt?: Date;

  @Property()
  paymentMethod: PaymentMethod;

  @Property()
  status: OrderStatus;

  @Property()
  products: ProductWithQuantityModel;
}
