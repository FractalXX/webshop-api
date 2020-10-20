import { CustomerInfoType } from '../enums/CustomerInfoType';

export interface CustomerInfo {
  id: string;
  type: CustomerInfoType;
  name: string;
  country: string;
  city: string;
  zipCode: string;
  address: string;
}
