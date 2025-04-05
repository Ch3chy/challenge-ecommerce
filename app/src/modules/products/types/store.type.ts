import { Product } from "./product.type";

export type ProductsStore = {
  products: Product[];
  getProuct: (id: number) => Product | undefined;
  setProducts: (products: Product[]) => void;
};
