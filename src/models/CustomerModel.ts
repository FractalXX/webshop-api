import { Property, Required } from '@tsed/common';
import { CustomerInfo } from '../schemas/CustomerInfo';

export default class CustomerModel {
  @Property()
  id?: string;

  @Property()
  @Required()
  name: string;

  @Property()
  @Required()
  email: string;

  @Property()
  @Required()
  birthDate: Date;

  @Property()
  @Required()
  shippingInfos: CustomerInfo[] | string[];

  @Property()
  @Required()
  billingInfo: CustomerInfo | string;
}
