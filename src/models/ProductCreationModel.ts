import { Property, Required } from '@tsed/common';

export class ProductCreationModel {
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
  @Property()
  price: string;

  @Required()
  @Property()
  quantity: string;

  @Property()
  description: string;
}
