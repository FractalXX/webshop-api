import { OrderStatus } from '../enums/OrderStatus';
import { PaymentMethod } from '../enums/PaymentMethod';
import CustomerModel from './CustomerModel';
import ProductWithQuantityModel from './ProductWithQuantityModel';

export default class OrderModel {
  id: string;
  customer: CustomerModel;
  placedAt: Date;
  updatedAt?: Date;
  paymentMethod: PaymentMethod;
  status: OrderStatus;
  products: ProductWithQuantityModel;
}
