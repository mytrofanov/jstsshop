import { Product } from '../Interfaces/Product';
export interface CartProduct {
  [key: string]: {
    amount: number;
    product: Product;
  };
}

export interface Cart {
  products: CartProduct;
}
export interface State {
  cart: Cart;
  products: Product[];
}
