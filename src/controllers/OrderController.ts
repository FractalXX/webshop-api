import { BodyParams, Controller, Get, Post, QueryParams } from '@tsed/common';
import { Summary } from '@tsed/swagger';
import OrderPlaceModel from '../models/OrderPlaceModel';
import OrderQueryParamsModel from '../models/OrderQueryParamsModel';
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

  @Post()
  @Summary('Create an order')
  createOrder(@BodyParams() model: OrderPlaceModel): void {
    this.orderService.createOrder(model);
  }
}
