import { Service } from '@tsed/di';
import { plainToClass } from 'class-transformer';
import { customerCollection } from '../mocks/CustomerCollection';
import CustomerModel from '../models/CustomerModel';
import { CustomerInfo } from '../schemas/CustomerInfo';
import generateId from '../utils/GenerateId';
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

  getCustomerById(id: string): CustomerModel | undefined {
    return customerCollection.find((customer) => customer.id === id);
  }

  createCustomer(model: CustomerModel): void {
    const billingInfoId = this.customerInfoService.addCustomerInfo(model.billingInfo as CustomerInfo);
    const shippingInfoIds = (model.shippingInfos as CustomerInfo[]).map((shippingInfo) =>
      this.customerInfoService.addCustomerInfo(shippingInfo)
    );

    customerCollection.push({
      ...model,
      id: generateId(),
      billingInfo: billingInfoId,
      shippingInfos: shippingInfoIds,
    });
  }
}
