import { Service } from '@tsed/di';
import { customerInfoCollection } from '../mocks/CustomerInfoCollection';
import { CustomerInfo } from '../schemas/CustomerInfo';

@Service()
export class CustomerInfoService {
  getCustomerInfoById(id: string): CustomerInfo[] {
    return customerInfoCollection.filter((info) => info.id === id);
  }
}
