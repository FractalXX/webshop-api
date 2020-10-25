import { OrderStatus } from '../enums/OrderStatus';
import { PaymentMethod } from '../enums/PaymentMethod';
import Order from '../schemas/Order';

export const orderCollection: Order[] = [
  {
    id: 'X4kpfLRJ3kH5x7Y6e7l04a5V',
    customerId: '295d19WoKj89k0D17W931D44',
    shippingInfoId: 'H74nA9I0J537F938w902n0Rj',
    billingInfoId: '4vG15LlkaU46Q77dp57i07a0',
    placedAt: new Date('2010-02-28'),
    updatedAt: new Date('2020-04-22'),
    paymentMethod: PaymentMethod.BANK_TRANSFER,
    status: OrderStatus.DELIVERED,
  },
  {
    id: 'WZ0213733F28dF5wH0kMp2d8',
    customerId: '295d19WoKj89k0D17W931D44',
    shippingInfoId: 'H74nA9I0J537F938w902n0Rj',
    billingInfoId: 'H74nA9I0J537F938w902n0Rj',
    placedAt: new Date('2004-06-12'),
    updatedAt: new Date('2020-07-02'),
    paymentMethod: PaymentMethod.CASH,
    status: OrderStatus.DELIVERED,
  },
  {
    id: '137249hym1P6r5Xk92Ay2V50',
    customerId: 'I941e4S71J8X45Q318j77832',
    shippingInfoId: '5067368Vj36pdbP2045L9Nn7',
    billingInfoId: '08EB1r0428v37LU795a4zZTp',
    placedAt: new Date('2013-12-21'),
    updatedAt: new Date('2020-02-13'),
    paymentMethod: PaymentMethod.BANK_TRANSFER,
    status: OrderStatus.PROCESSING,
  },
  {
    id: 'QU2mZVWP1pt363Fn7St91pC8',
    customerId: 'i6L1H3382a06hII5n8LR0V35',
    shippingInfoId: '0258300Wo8jV8DDuot45S78d',
    billingInfoId: 'Y4DZGYYi5dUMe6p11049o9G6',
    placedAt: new Date('2012-08-11'),
    updatedAt: new Date('2020-06-07'),
    paymentMethod: PaymentMethod.BANK_TRANSFER,
    status: OrderStatus.DELIVERING,
  },
  {
    id: 'u79gjl9T2GRQd519MxV83j0t',
    customerId: '824W3v6u48lo1zJ522X13821',
    shippingInfoId: 'ZJ371D4TY0458G327fRq3R7B',
    billingInfoId: '725854xoi86h38ySxvef6Y68',
    placedAt: new Date('2001-02-04'),
    updatedAt: new Date('2020-03-10'),
    paymentMethod: PaymentMethod.BANK_TRANSFER,
    status: OrderStatus.DELIVERING,
  },
];
