import { Service } from '@tsed/di';
import { CustomerInfoType } from '../enums/CustomerInfoType';
import { customerInfoCollection } from '../mocks/CustomerInfoCollection';
import CustomerInfoModel from '../models/CustomerInfoModel';
import generateId from '../utils/GenerateId';

/**
 * Handles getting and updating CustomerInfo entities.
 */
@Service()
export default class CustomerInfoService {
  /**
   * Gets a single CustomerInfo by id.
   * @param id The id.
   */
  getCustomerInfoById(id: string): CustomerInfoModel | undefined {
    return customerInfoCollection.find((info) => info.id === id);
  }

  /**
   * Adds a CustomerInfo to the database.
   * @param customerInfo The CustomerInfo model.
   * @param type The type of the CustomerInfo.
   */
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
