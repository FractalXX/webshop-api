import { Controller, Get } from '@tsed/common';
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
}
