import { Service } from '@tsed/di';
import { CustomerInfoType } from '../enums/CustomerInfoType';
import { customerInfoCollection } from '../mocks/CustomerInfoCollection';
import CustomerInfoModel from '../models/CustomerInfoModel';
import generateId from '../utils/GenerateId';

@Service()
export class CustomerInfoService {
  getCustomerInfoById(id: string): CustomerInfoModel | undefined {
    return customerInfoCollection.find((info) => info.id === id);
  }

  addCustomerInfo(customerInfo: CustomerInfoModel, type: CustomerInfoType): string {
    const id = generateId();
    customerInfoCollection.push({
      ...customerInfo,
      id,
      type,
    });
    return id;
  }
}
