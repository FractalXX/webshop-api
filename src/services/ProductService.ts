import { Service } from '@tsed/common';
import { BadRequest } from '@tsed/exceptions';
import { productCollection } from '../mocks/ProductCollection';
import generateId from '../utils/GenerateId';
import ProductQueryParamsModel from '../models/ProductQueryParamsModel';
import ProductModel from '../models/ProductModel';

@Service()
export class ProductService {
  getProducts(queryParams: ProductQueryParamsModel): ProductModel[] {
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

  getProductById(id: string): ProductModel | undefined {
    return productCollection.find((product) => product.id === id);
  }

  findByItemNumber(itemNumber: string): ProductModel | undefined {
    return productCollection.find((product) => product.itemNumber === itemNumber);
  }

  createProduct(model: ProductModel): ProductModel {
    const { itemNumber } = model;
    if (this.findByItemNumber(itemNumber)) {
      throw new BadRequest(`Product with item number ${itemNumber} already exists`);
    }

    const product = { ...model, id: generateId() };
    productCollection.push(product);
    return product;
  }

  updateByExisting(id: string, dataFn: (product: ProductModel) => Partial<ProductModel>): void {
    const product = this.getProductById(id);

    if (!product) {
      throw Error(`Product with id ${id} does not exist`);
    }

    productCollection[productCollection.indexOf(product)] = {
      ...product,
      ...dataFn(product),
    };
  }
}
