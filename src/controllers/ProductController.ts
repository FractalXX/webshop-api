import { BodyParams, Controller, Get, Post, QueryParams, Returns, ReturnsArray, Status } from '@tsed/common';
import { Summary } from '@tsed/swagger';
import ProductModel from '../models/ProductModel';
import ProductQueryParamsModel from '../models/ProductQueryParamsModel';
import ProductService from '../services/ProductService';

/**
 * Controller for the product resource.
 */
@Controller('/products')
export default class ProductController {
  constructor(private productService: ProductService) {}

  /**
   * REST endpoint that queries and returns products.
   * @param queryParams The query parameters.
   */
  @Get()
  @Summary('Query products')
  @ReturnsArray(ProductModel)
  getProducts(@QueryParams() queryParams: ProductQueryParamsModel): ProductModel[] {
    return this.productService.getProducts(queryParams);
  }

  /**
   * REST endpoint that creates a new product.
   * @param model The product model.
   */
  @Post()
  @Status(201)
  @Summary('Create product')
  @Returns(ProductModel)
  createProduct(@BodyParams() model: ProductModel): ProductModel {
    return this.productService.createProduct(model);
  }
}
