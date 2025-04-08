import { Customer } from "./customer.type";
import { ShoppingCartProduct, ShoppingCartTotals } from "./shopping-cart.type";

export type ShoppingCartStore = {
  products: number[];
  productsDetail: { [key: string]: ShoppingCartProduct };
  getProduct: (id: number) => ShoppingCartProduct | undefined;
  getProducts: () => ShoppingCartProduct[];
  addProduct: (product: ShoppingCartProduct) => void;
  removeProduct: (id: number) => void;

  customer?: Customer;
  setCustomer: (customer: Customer) => void;

  getTotals: () => ShoppingCartTotals;

  clearShoppingCart: VoidFunction;
};
