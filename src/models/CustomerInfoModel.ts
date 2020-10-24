import { Enum, Ignore, Pattern, Property, Required } from '@tsed/common';
import { CustomerInfoType } from '../enums/CustomerInfoType';
import { noWhitespaceOnlyPattern } from '../utils/Patterns';

export default class CustomerInfoModel {
  @Ignore()
  id?: string;

  @Property()
  @Enum(CustomerInfoType)
  type: CustomerInfoType;

  @Required()
  @Pattern(noWhitespaceOnlyPattern)
  @Property()
  name: string;

  @Required()
  @Pattern(noWhitespaceOnlyPattern)
  @Property()
  country: string;

  @Required()
  @Pattern(noWhitespaceOnlyPattern)
  @Property()
  city: string;

  @Required()
  @Pattern(noWhitespaceOnlyPattern)
  @Property()
  zipCode: string;

  @Required()
  @Pattern(noWhitespaceOnlyPattern)
  @Property()
  address: string;
}
