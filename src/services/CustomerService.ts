import { Service } from '@tsed/di';
import { NotFound } from '@tsed/exceptions';
import { plainToClass } from 'class-transformer';
import { CustomerInfoType } from '../enums/CustomerInfoType';
import { customerCollection } from '../mocks/CustomerCollection';
import CustomerModel from '../models/CustomerModel';
import Customer from '../schemas/Customer';
import generateId from '../utils/GenerateId';
import CustomerInfoService from './CustomerInfoService';

/**
 * Handles getting and updating Customer entities.
 *
 * Depends on CustomerInfoService.
 */
@Service()
export default class CustomerService {
  constructor(private customerInfoService: CustomerInfoService) {}

  /**
   * Gets all customers.
   */
  getAllCustomers(): CustomerModel[] {
    return customerCollection.map((customer) => this.createCustomerModel(customer));
  }

  /**
   * Gets a single customer and maps it to a model.
   * @param id The id.
   */
  getCustomerModelById(id: string): CustomerModel {
    const customer = this.getCustomerById(id);
    if (!customer) {
      throw new NotFound(`Could not find customer with id ${id}.`);
    }

    return this.createCustomerModel(customer);
  }

  /**
   * Gets a single customer by id.
   * @param id The id.
   * @returns The Customer entity, or undefined if not found.
   */
  getCustomerById(id: string): Customer | undefined {
    return customerCollection.find((customer) => customer.id === id);
  }

  /**
   * Adds a customer to the database.
   * @param model The Customer model
   *
   * @returns The created Customer mapped to a model.
   */
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

  /**
   * Maps a Customer entity to a model.
   * @param customer The Customer entity.
   */
  createCustomerModel(customer: Customer): CustomerModel {
    const shippingInfos = (customer.shippingInfos as string[]).map((infoId) => this.customerInfoService.getCustomerInfoById(infoId));
    const billingInfo = this.customerInfoService.getCustomerInfoById(customer.billingInfo as string);

    return plainToClass(CustomerModel, {
      ...customer,
      shippingInfos,
      billingInfo,
    });
  }
}
