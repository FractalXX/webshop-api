import { Property } from '@tsed/common';
import { CustomerInfo } from '../schemas/CustomerInfo';

export class CustomerModel {
  @Property()
  id: string;

  @Property()
  name: string;

  @Property()
  email: string;

  @Property()
  birthDate: Date;

  @Property()
  shippingInfos: CustomerInfo[];

  @Property()
  billingInfo: CustomerInfo;
}
