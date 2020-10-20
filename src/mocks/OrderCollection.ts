import { OrderStatus } from '../enums/OrderStatus';
import { PaymentMethod } from '../enums/PaymentMethod';
import { Order } from '../schemas/Order';

export const orderCollection: Order[] = [
  {
    id: 'X4kpfLRJ3kH5x7Y6e7l04a5V',
    customerId: '295d19WoKj89k0D17W931D44',
    placedAt: new Date('2020-04-22'),
    updatedAt: new Date('2010-02-28'),
    paymentMethod: PaymentMethod.BANK_TRANSFER,
    status: OrderStatus.DELIVERED,
  },
  {
    id: 'WZ0213733F28dF5wH0kMp2d8',
    customerId: '295d19WoKj89k0D17W931D44',
    placedAt: new Date('2020-07-02'),
    updatedAt: new Date('2004-06-12'),
    paymentMethod: PaymentMethod.CASH,
    status: OrderStatus.DELIVERED,
  },
  {
    id: '137249hym1P6r5Xk92Ay2V50',
    customerId: 'I941e4S71J8X45Q318j77832',
    placedAt: new Date('2020-02-13'),
    updatedAt: new Date('2013-12-21'),
    paymentMethod: PaymentMethod.BANK_TRANSFER,
    status: OrderStatus.PROCESSING,
  },
  {
    id: 'QU2mZVWP1pt363Fn7St91pC8',
    customerId: 'i6L1H3382a06hII5n8LR0V35',
    placedAt: new Date('2020-06-07'),
    updatedAt: new Date('2012-08-11'),
    paymentMethod: PaymentMethod.BANK_TRANSFER,
    status: OrderStatus.DELIVERING,
  },
  {
    id: 'u79gjl9T2GRQd519MxV83j0t',
    customerId: '824W3v6u48lo1zJ522X13821',
    placedAt: new Date('2020-03-10'),
    updatedAt: new Date('2001-02-04'),
    paymentMethod: PaymentMethod.BANK_TRANSFER,
    status: OrderStatus.DELIVERING,
  },
];
