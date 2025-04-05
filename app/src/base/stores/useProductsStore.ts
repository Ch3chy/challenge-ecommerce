import { ProductsStore } from "@/modules/products/types/store.type";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const useProductsStore = create<ProductsStore>()(
  persist(
    (set, get) => ({
      products: [],
      getProuct: (id) => {
        const products = get().products;
        return products.find((product) => product.id === id);
      },
      setProducts: (products) => set({ products }),
    }),
    {
      name: "products-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
