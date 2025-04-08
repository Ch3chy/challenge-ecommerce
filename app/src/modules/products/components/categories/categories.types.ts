import { Category } from "../../types/category.type";

export interface CategoriesProps {
  categories: Category[];
  category?: string;
  className?: string;
}
