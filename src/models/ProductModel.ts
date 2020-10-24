import { Minimum, Pattern, Property, Required } from '@tsed/common';
import { alphaNumericPattern, noWhitespaceOnlyPattern } from '../utils/Patterns';

export default class ProductModel {
  @Property()
  id: string;

  @Required()
  @Pattern(noWhitespaceOnlyPattern)
  @Property()
  name: string;

  @Required()
  @Pattern(alphaNumericPattern)
  @Property()
  itemNumber: string;

  @Property()
  description: string;

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
}
