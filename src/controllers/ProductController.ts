import { BodyParams, Controller, Get, Post } from '@tsed/common';
import ProductCreationModel from '../models/ProductCreationModel';
import { Product } from '../schemas/Product';
import { ProductService } from '../services/ProductService';

@Controller('/product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  // TODO model
  getAllProducts(): Product[] {
    return this.productService.getAllProducts();
  }

  @Post()
  createProduct(@BodyParams() model: ProductCreationModel): void {
    return;
  }
}
