import { OrderStatus } from '../enums/OrderStatus';
import { PaymentMethod } from '../enums/PaymentMethod';

export interface Order {
  id: string;
  customerId: string;
  placedAt: Date;
  updatedAt: Date;
  paymentMethod: PaymentMethod;
  status: OrderStatus;
}
