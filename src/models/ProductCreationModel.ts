import { Minimum, Property, Required } from '@tsed/common';

export default class ProductCreationModel {
  @Required()
  @Property()
  name: string;

  @Required()
  @Property()
  itemNumber: string;

  @Required()
  @Property()
  manufacturer: string;

  @Required()
  @Minimum(0)
  @Property()
  price: number;

  @Required()
  @Minimum(0)
  @Property()
  quantity: number;

  @Property()
  description: string;
}
