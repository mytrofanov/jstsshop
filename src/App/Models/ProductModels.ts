import { Product } from '../Interfaces/Product';
import { getProducts } from '../DB/Products.DB';

export class ProductModel {
  static isExist = false;
  static instance: ProductModel;

  constructor() {
    if (ProductModel.isExist) {
      return ProductModel.instance;
    }
    ProductModel.isExist = true;
    ProductModel.instance = this;
  }
  getProducts(): Promise<Product[]> {
    return getProducts();
  }
}

export const productModel = new ProductModel();
