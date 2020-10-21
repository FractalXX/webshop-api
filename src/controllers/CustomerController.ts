import { Controller, Get, ReturnsArray } from '@tsed/common';
import { Summary } from '@tsed/swagger';
import CustomerModel from '../models/CustomerModel';
import { CustomerService } from '../services/CustomerService';

@Controller('/customer')
export class CustomerController {
  constructor(private customerService: CustomerService) {}

  @Get()
  @Summary('Get all customers')
  @ReturnsArray(CustomerModel)
  getAllCustomers(): CustomerModel[] {
    return this.customerService.getAllCustomers();
  }
}
