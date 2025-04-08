import { ShoppingCartProduct } from "../../types/shopping-cart.type";

export interface CartProductProps {
  product: ShoppingCartProduct;
  className?: string;
  simple?: boolean;
  onDeleteClick?: VoidFunction;
}
