import { Service } from '@tsed/common';
import { productCollection } from '../mocks/ProductCollection';
import { Product } from '../schemas/Product';

@Service()
export class ProductService {
  getAllProducts(): Product[] {
    return productCollection;
  }
}
