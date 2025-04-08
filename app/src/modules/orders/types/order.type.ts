import { Customer } from "@/modules/shopping-cart/types/customer.type";

export type Order = {
  id?: string;
  date: Date;
  customer: Customer;
  products: ProductOrder[];
  totalNeto: number;
  totalTax: number;
  totalPrice: number;
};

export type ProductOrder = {
  id: number;
  name: string;
  quantity: number;
  total?: number;
};
