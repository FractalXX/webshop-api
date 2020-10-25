import { BodyParams, Controller, Get, PathParams, Post, QueryParams, Returns, ReturnsArray, Status } from '@tsed/common';
import { Summary } from '@tsed/swagger';
import OrderModel from '../models/OrderModel';
import OrderPlaceModel from '../models/OrderPlaceModel';
import OrderQueryParamsModel from '../models/OrderQueryParamsModel';
import OrderService from '../services/OrderService';

/**
 * Controller for the order resource.
 */
@Controller('/orders')
export default class OrderController {
  constructor(private orderService: OrderService) {}

  /**
   * REST endpoint that queries and returns orders.
   * @param queryParams The query parameters.
   */
  @Get()
  @Summary('Get all orders')
  @ReturnsArray(OrderModel)
  getOrders(@QueryParams() queryParams: OrderQueryParamsModel): OrderModel[] {
    return this.orderService.getOrdersByQueryParams(queryParams);
  }

  /**
   * REST endpoint that returns a single order by id.
   * @param id The id of the order.
   */
  @Get('/:id')
  @Summary('Get order')
  @Returns(OrderModel)
  getOrderById(@PathParams('id') id: string): OrderModel {
    return this.orderService.getOrderById(id);
  }

  /**
   * REST endpoint that creates a new order.
   * @param model The order model.
   */
  @Post()
  @Status(201)
  @Summary('Create an order')
  @Returns(OrderModel)
  createOrder(@BodyParams() model: OrderPlaceModel): OrderModel {
    return this.orderService.createOrder(model);
  }
}
