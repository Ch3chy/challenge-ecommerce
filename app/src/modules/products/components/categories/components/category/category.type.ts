import { Category } from "@/modules/products/types/category.type";

export interface CategoryProps {
  category: Category;
  active?: boolean;
  className?: string;
}
