import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { OrdersStore } from "../types/store.type";
import { Order } from "../types/order.type";

export const useOrdersStore = create<OrdersStore>()(
  persist(
    (set, get) => ({
      orders: [],
      getOrder: (id) => {
        const orders = get().orders;
        return orders.find((order) => order.id === id);
      },
      addOrder: (order: Order) => {
        const id = get().getNextOrderId();
        const orders = get().orders;
        set({
          orders: [
            {
              id,
              ...order,
            },
            ...orders,
          ],
        });
      },
      getNextOrderId: () => {
        const orders = get().orders;
        return String(orders.length + 1).padStart(3, "0");
      },
    }),
    {
      name: "orders-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
