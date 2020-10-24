import { Ignore, Minimum, Property, Required } from '@tsed/common';

export default class ProductOrderModel {
  @Required()
  @Property()
  productId: string;

  @Required()
  @Minimum(0)
  @Property()
  quantity: number;

  @Ignore()
  orderId: string;
}
