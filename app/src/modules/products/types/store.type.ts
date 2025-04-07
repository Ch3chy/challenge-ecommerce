import { Category } from "./category.type";
import { Product } from "./product.type";

export type ProductsStore = {
  products: Product[];
  getProuct: (id: number) => Product | undefined;
  setProducts: (products: Product[]) => void;

  categories: Category[];
  setCategories: (categories: Category[]) => void;
};
