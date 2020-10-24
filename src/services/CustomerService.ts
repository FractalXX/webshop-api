import { Service } from '@tsed/di';
import { plainToClass } from 'class-transformer';
import { CustomerInfoType } from '../enums/CustomerInfoType';
import { customerCollection } from '../mocks/CustomerCollection';
import CustomerModel from '../models/CustomerModel';
import { Customer } from '../schemas/Customer';
import generateId from '../utils/GenerateId';
import { CustomerInfoService } from './CustomerInfoService';

@Service()
export class CustomerService {
  constructor(private customerInfoService: CustomerInfoService) {}

  getAllCustomers(): CustomerModel[] {
    return customerCollection.map((customer) => {
      const shippingInfos = (customer.shippingInfos as string[]).map((infoId) => this.customerInfoService.getCustomerInfoById(infoId));
      const billingInfo = this.customerInfoService.getCustomerInfoById(customer.billingInfo as string);

      return plainToClass(CustomerModel, {
        ...customer,
        shippingInfos,
        billingInfo,
      });
    });
  }

  getCustomerById(id: string): Customer | undefined {
    return customerCollection.find((customer) => customer.id === id);
  }

  createCustomer(model: CustomerModel): CustomerModel {
    const billingInfoId = this.customerInfoService.addCustomerInfo(model.billingInfo, CustomerInfoType.BILLING_INFO);
    const shippingInfoIds = model.shippingInfos.map((shippingInfo) =>
      this.customerInfoService.addCustomerInfo(shippingInfo, CustomerInfoType.SHIPPING_INFO)
    );

    const id = generateId();
    const customer: Customer = {
      ...model,
      id,
      billingInfo: billingInfoId,
      shippingInfos: shippingInfoIds,
    };

    customerCollection.push(customer);
    return {
      ...model,
      id,
    };
  }
}
