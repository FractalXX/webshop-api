export default interface Customer {
  id: string;
  name: string;
  email: string;
  birthDate: Date;
  shippingInfos: string[];
  billingInfo: string;
}
