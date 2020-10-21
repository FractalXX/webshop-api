import { Property } from '@tsed/common';
import { CustomerInfo } from '../schemas/CustomerInfo';

export default class CustomerModel {
  @Property()
  id: string;

  @Property()
  name: string;

  @Property()
  email: string;

  @Property()
  birthDate: Date;

  @Property()
  shippingInfos: CustomerInfo[] | string[];

  @Property()
  billingInfo: CustomerInfo | string;
}
