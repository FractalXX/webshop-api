import { BodyParams, Controller, Get, PathParams, Post, ReturnsArray, Status } from '@tsed/common';
import { Summary } from '@tsed/swagger';
import CustomerModel from '../models/CustomerModel';
import { CustomerService } from '../services/CustomerService';

@Controller('/customers')
export class CustomerController {
  constructor(private customerService: CustomerService) {}

  @Get()
  @Summary('Get all customers')
  @ReturnsArray(CustomerModel)
  getAllCustomers(): CustomerModel[] {
    return this.customerService.getAllCustomers();
  }

  @Get('/:id')
  @Summary('Get customer')
  getCustomerById(@PathParams('id') id: string): CustomerModel {
    return this.customerService.getCustomerModelById(id);
  }

  @Post()
  @Status(201)
  @Summary('Create customer')
  createCustomer(@BodyParams() model: CustomerModel): CustomerModel {
    return this.customerService.createCustomer(model);
  }
}
