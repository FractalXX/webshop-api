import { Minimum } from '@tsed/common';

export default class ProductQueryParamsModel {
  @Minimum(0)
  quantityFrom: number;

  @Minimum(0)
  quantityTo: number;
}
