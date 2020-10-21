import { Service } from '@tsed/di';
import { plainToClass } from 'class-transformer';
import { customerCollection } from '../mocks/CustomerCollection';
import CustomerModel from '../models/CustomerModel';
import { CustomerInfoService } from './CustomerInfoService';

@Service()
export class CustomerService {
  constructor(private customerInfoService: CustomerInfoService) {}

  getAllCustomers(): CustomerModel[] {
    return customerCollection.map((customer) => {
      // TODO use models instead of schema
      const shippingInfos = (customer.shippingInfos as string[]).map((infoId) => this.customerInfoService.getCustomerInfoById(infoId));
      const billingInfo = this.customerInfoService.getCustomerInfoById(customer.billingInfo as string);

      return plainToClass(CustomerModel, {
        ...customer,
        shippingInfos,
        billingInfo,
      });
    });
  }
}
