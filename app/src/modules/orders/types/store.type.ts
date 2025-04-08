import { Order } from "./order.type";

export type OrdersStore = {
  orders: Order[];
  getOrder: (id: string) => Order | undefined;
  addOrder: (order: Order) => void;
  getNextOrderId: () => string;
};
