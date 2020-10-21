import { Service } from '@tsed/di';
import { customerInfoCollection } from '../mocks/CustomerInfoCollection';
import { CustomerInfo } from '../schemas/CustomerInfo';

@Service()
export class CustomerInfoService {
  getCustomerInfoById(id: string): CustomerInfo | undefined {
    return customerInfoCollection.find((info) => info.id === id);
  }
}
