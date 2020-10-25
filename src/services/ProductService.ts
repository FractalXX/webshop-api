import { Service } from '@tsed/common';
import { BadRequest } from '@tsed/exceptions';
import { productCollection } from '../mocks/ProductCollection';
import generateId from '../utils/GenerateId';
import ProductQueryParamsModel from '../models/ProductQueryParamsModel';
import ProductModel from '../models/ProductModel';

/**
 * Handles getting and updating Product entities.
 */
@Service()
export default class ProductService {
  /**
   * Queries and returns Products from the database.
   * @param queryParams The query parameters.
   */
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

  /**
   * Gets a single Product by id.
   * @param id The id.
   * @returns ProductModel or undefined if not found.
   */
  getProductById(id: string): ProductModel | undefined {
    return productCollection.find((product) => product.id === id);
  }

  /**
   * Gets a single Product by item number.
   * @param itemNumber The item number.
   * @returns ProductModel or undefined if not found.
   */
  findByItemNumber(itemNumber: string): ProductModel | undefined {
    return productCollection.find((product) => product.itemNumber === itemNumber);
  }

  /**
   * Adds a Product to the database.
   * @param model The Product model.
   */
  createProduct(model: ProductModel): ProductModel {
    const { itemNumber } = model;
    if (this.findByItemNumber(itemNumber)) {
      throw new BadRequest(`Product with item number ${itemNumber} already exists`);
    }

    const product = { ...model, id: generateId() };
    productCollection.push(product);
    return product;
  }

  /**
   * Updates a single Product by spreading the object returned by dataFn.
   * @param id The id of the product.
   * @param dataFn A callback that should return an object with the properties that have to be updated.
   */
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
