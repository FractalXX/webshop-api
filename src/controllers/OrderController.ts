import { BodyParams, Controller, Get, Post, QueryParams, Status } from '@tsed/common';
import { Summary } from '@tsed/swagger';
import OrderModel from '../models/OrderModel';
import OrderPlaceModel from '../models/OrderPlaceModel';
import OrderQueryParamsModel from '../models/OrderQueryParamsModel';
import { OrderService } from '../services/OrderService';

@Controller('/orders')
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Get()
  @Summary('Get all orders')
  getOrders(@QueryParams() queryParams: OrderQueryParamsModel): OrderModel[] {
    return this.orderService.getOrdersByQueryParams(queryParams);
  }

  @Post()
  @Status(201)
  @Summary('Create an order')
  createOrder(@BodyParams() model: OrderPlaceModel): void {
    this.orderService.createOrder(model);
  }
}
