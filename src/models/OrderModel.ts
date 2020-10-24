import { Property } from '@tsed/common';
import { OrderStatus } from '../enums/OrderStatus';
import { PaymentMethod } from '../enums/PaymentMethod';
import CustomerModel from './CustomerModel';
import ProductWithQuantityModel from './ProductWithQuantityModel';

export default class OrderModel {
  @Property()
  id: string;

  @Property()
  customer: CustomerModel;

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
