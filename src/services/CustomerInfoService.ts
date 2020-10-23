import { Service } from '@tsed/di';
import { customerInfoCollection } from '../mocks/CustomerInfoCollection';
import { CustomerInfo } from '../schemas/CustomerInfo';
import generateId from '../utils/GenerateId';

@Service()
export class CustomerInfoService {
  getCustomerInfoById(id: string): CustomerInfo | undefined {
    return customerInfoCollection.find((info) => info.id === id);
  }

  addCustomerInfo(customerInfo: CustomerInfo): string {
    const id = generateId();
    customerInfoCollection.push({
      ...customerInfo,
      id,
    });
    return id;
  }
}
