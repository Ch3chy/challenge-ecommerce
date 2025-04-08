export type ShoppingCartProduct = {
  id: number;
  name: string;
  image: string;
  quantity: number;
  price: number;
  tax: number;
  totalNeto?: number;
  totalTax?: number;
  totalPrice?: number;
};

export type ShoppingCartTotals = {
  totalNeto: number;
  totalTax: number;
  totalPrice: number;
};
