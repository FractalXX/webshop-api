import { Service } from '@tsed/common';
import { BadRequest } from '@tsed/exceptions';
import ProductCreationModel from '../models/ProductCreationModel';
import { productCollection } from '../mocks/ProductCollection';
import { Product } from '../schemas/Product';
import generateId from '../utils/GenerateId';

@Service()
export class ProductService {
  getAllProducts(): Product[] {
    return productCollection;
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
