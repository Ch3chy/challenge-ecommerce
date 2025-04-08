import { ShoppingCartProduct } from "./shopping-cart.type";

export type ShoppingCartStore = {
  products: number[];
  productsDetail: { [key: string]: ShoppingCartProduct };
  getProduct: (id: number) => ShoppingCartProduct | undefined;
  addProduct: (product: ShoppingCartProduct) => void;
};
