import { Service } from '@tsed/common';
import { BadRequest } from '@tsed/exceptions';
import ProductCreationModel from '../models/ProductCreationModel';
import { productCollection } from '../mocks/ProductCollection';
import { Product } from '../schemas/Product';
import generateId from '../utils/GenerateId';
import ProductQueryParamsModel from '../models/ProductQueryParamsModel';

@Service()
export class ProductService {
  getProducts(queryParams: ProductQueryParamsModel): Product[] {
    return productCollection.filter((product) => {
      let predicate = true;

      if (queryParams.quantityFrom || queryParams.quantityFrom === 0) {
        predicate = predicate && product.quantity >= queryParams.quantityFrom;
      }

      if (queryParams.quantityTo || queryParams.quantityTo === 0) {
        predicate = predicate && product.quantity <= queryParams.quantityTo;
      }

      return predicate;
    });
  }

  getProductById(id: string): Product | undefined {
    return productCollection.find((product) => product.id === id);
  }

  findByItemNumber(itemNumber: string): Product | undefined {
    return productCollection.find((product) => product.itemNumber === itemNumber);
  }

  createProduct(model: ProductCreationModel): void {
    const { itemNumber } = model;
    if (this.findByItemNumber(itemNumber)) {
      throw new BadRequest(`Product with item number ${itemNumber} already exists`);
    }

    productCollection.push({ id: generateId(), ...model });
  }
}
