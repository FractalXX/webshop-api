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
      let shippingInfos;
      if ('map' in customer.shippingInfos) {
        shippingInfos = customer.shippingInfos.map((infoId) => this.customerInfoService.getCustomerInfoById(infoId));
      }
      const billingInfo = this.customerInfoService.getCustomerInfoById(customer.billingInfoId);

      // TODO remove unnecessary properties (ids)
      return plainToClass(CustomerModel, {
        ...customer,
        shippingInfos,
        billingInfo,
      });
    });
  }
}
