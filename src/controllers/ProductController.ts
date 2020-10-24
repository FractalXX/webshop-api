import { BodyParams, Controller, Get, Post, QueryParams, Status } from '@tsed/common';
import ProductModel from '../models/ProductModel';
import ProductQueryParamsModel from '../models/ProductQueryParamsModel';
import { ProductService } from '../services/ProductService';

@Controller('/products')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  getProducts(@QueryParams() queryParams: ProductQueryParamsModel): ProductModel[] {
    return this.productService.getProducts(queryParams);
  }

  @Post()
  @Status(201)
  createProduct(@BodyParams() model: ProductModel): void {
    return this.productService.createProduct(model);
  }
}
