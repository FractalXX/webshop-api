import { OrderStatus } from '../enums/OrderStatus';
import { PaymentMethod } from '../enums/PaymentMethod';

export default interface Order {
  id: string;
  customerId: string;
  shippingInfoId: string;
  billingInfoId: string;
  placedAt: Date;
  updatedAt?: Date;
  paymentMethod: PaymentMethod;
  status: OrderStatus;
}
