export interface Customer {
  id: string;
  name: string;
  email: string;
  birthDate: Date;
  shippingInfoIds: string[];
  billingInfoId: string;
}
