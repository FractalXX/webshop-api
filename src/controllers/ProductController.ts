import { BodyParams, Controller, Get, Post, QueryParams, Returns, ReturnsArray, Status } from '@tsed/common';
import { Summary } from '@tsed/swagger';
import ProductModel from '../models/ProductModel';
import ProductQueryParamsModel from '../models/ProductQueryParamsModel';
import { ProductService } from '../services/ProductService';

@Controller('/products')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  @Summary('Query products')
  @ReturnsArray(ProductModel)
  getProducts(@QueryParams() queryParams: ProductQueryParamsModel): ProductModel[] {
    return this.productService.getProducts(queryParams);
  }

  @Post()
  @Status(201)
  @Summary('Create product')
  @Returns(ProductModel)
  createProduct(@BodyParams() model: ProductModel): ProductModel {
    return this.productService.createProduct(model);
  }
}
