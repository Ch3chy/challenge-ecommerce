import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { ProductsStore } from "../types/store.type";

export const useProductsStore = create<ProductsStore>()(
  persist(
    (set, get) => ({
      products: [],
      getProuct: (id) => {
        const products = get().products;
        return products.find((product) => product.id === id);
      },
      setProducts: (products) => set({ products }),

      categories: [],
      setCategories: (categories) => set({ categories }),
    }),
    {
      name: "products-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
