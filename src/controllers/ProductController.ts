import { BodyParams, Controller, Get, Post, QueryParams } from '@tsed/common';
import ProductCreationModel from '../models/ProductCreationModel';
import ProductQueryParamsModel from '../models/ProductQueryParamsModel';
import { Product } from '../schemas/Product';
import { ProductService } from '../services/ProductService';

@Controller('/products')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  // TODO model
  getProducts(@QueryParams() queryParams: ProductQueryParamsModel): Product[] {
    return this.productService.getProducts(queryParams);
  }

  @Post()
  createProduct(@BodyParams() model: ProductCreationModel): void {
    return this.productService.createProduct(model);
  }
}
