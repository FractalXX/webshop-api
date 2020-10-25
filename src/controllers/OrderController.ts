import { BodyParams, Controller, Get, PathParams, Post, QueryParams, Returns, ReturnsArray, Status } from '@tsed/common';
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
  @ReturnsArray(OrderModel)
  getOrders(@QueryParams() queryParams: OrderQueryParamsModel): OrderModel[] {
    return this.orderService.getOrdersByQueryParams(queryParams);
  }

  @Get('/:id')
  @Summary('Get order')
  @Returns(OrderModel)
  getOrderById(@PathParams('id') id: string): OrderModel {
    return this.orderService.getOrderById(id);
  }

  @Post()
  @Status(201)
  @Summary('Create an order')
  @Returns(OrderModel)
  createOrder(@BodyParams() model: OrderPlaceModel): OrderModel {
    return this.orderService.createOrder(model);
  }
}
