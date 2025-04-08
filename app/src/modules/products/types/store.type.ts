import { Category } from "./category.type";
import { Product } from "./product.type";

export type ProductsStore = {
  products: Product[];
  getProduct: (id: number) => Product | undefined;
  setProducts: (products: Product[]) => void;
  updateStock: (products: {id: number, stock: number}[]) => void;

  categories: Category[];
  setCategories: (categories: Category[]) => void;
};
