import { Minimum, Property, Required } from '@tsed/common';

export class ProductOrderModel {
  @Required()
  @Property()
  productId: string;

  @Required()
  @Minimum(0)
  @Property()
  quantity: number;

  @Required()
  @Property()
  orderId: string;
}
