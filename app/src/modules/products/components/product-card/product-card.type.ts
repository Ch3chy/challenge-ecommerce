import { Product } from "../../types/product.type";

export interface ProductCardProps {
  product: Product;
  className?: string;
  onAddClick?: VoidFunction;
}
