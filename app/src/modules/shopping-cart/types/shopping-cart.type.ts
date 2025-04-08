export type ShoppingCartProduct = {
  id: number;
  name: string;
  quantity: number;
  price: number;
  tax: number;
  totalNeto?: number;
  totalTax?: number;
  totalPrice?: number;
};
