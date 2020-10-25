import { BodyParams, Controller, Get, PathParams, Post, Returns, ReturnsArray, Status } from '@tsed/common';
import { Summary } from '@tsed/swagger';
import CustomerModel from '../models/CustomerModel';
import CustomerService from '../services/CustomerService';

/**
 * Controller for the customer resource.
 */
@Controller('/customers')
export default class CustomerController {
  constructor(private customerService: CustomerService) {}

  /**
   * REST endpoint that returns all customers.
   */
  @Get()
  @Summary('Get all customers')
  @ReturnsArray(CustomerModel)
  getAllCustomers(): CustomerModel[] {
    return this.customerService.getAllCustomers();
  }

  /**
   * REST endpoint that returns a single customer by id.
   * @param id The id of the customer.
   */
  @Get('/:id')
  @Summary('Get customer')
  @Returns(CustomerModel)
  getCustomerById(@PathParams('id') id: string): CustomerModel {
    return this.customerService.getCustomerModelById(id);
  }

  /**
   * REST endpoint that creates a new customer.
   * @param model The customer model.
   */
  @Post()
  @Status(201)
  @Summary('Create customer')
  @Returns(CustomerModel)
  createCustomer(@BodyParams() model: CustomerModel): CustomerModel {
    return this.customerService.createCustomer(model);
  }
}
