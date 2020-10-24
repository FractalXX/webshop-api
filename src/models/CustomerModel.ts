import { Pattern, Property, Required } from '@tsed/common';
import { noWhitespaceOnlyPattern } from '../utils/Patterns';
import CustomerInfoModel from './CustomerInfoModel';

export default class CustomerModel {
  @Property()
  id?: string;

  @Required()
  @Pattern(noWhitespaceOnlyPattern)
  @Property()
  name: string;

  @Required()
  @Property()
  email: string;

  @Required()
  @Property()
  birthDate: Date;

  @Required()
  @Property()
  shippingInfos: CustomerInfoModel[];

  @Required()
  @Property()
  billingInfo: CustomerInfoModel;
}
