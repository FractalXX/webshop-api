import { Controller, Get, QueryParams } from '@tsed/common';
import { Summary } from '@tsed/swagger';
import { OrderQueryParamsModel } from '../models/OrderQueryParamsModel';
import { Order } from '../schemas/Order';
import { OrderService } from '../services/OrderService';

@Controller('/order')
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Get()
  @Summary('Get all orders')
  // TODO model
  getOrders(@QueryParams() queryParams: OrderQueryParamsModel): Order[] {
    return this.orderService.getOrdersByQueryParams(queryParams);
  }
}
