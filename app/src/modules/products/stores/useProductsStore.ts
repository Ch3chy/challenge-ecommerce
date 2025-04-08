import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { ProductsStore } from "../types/store.type";

export const useProductsStore = create<ProductsStore>()(
  persist(
    (set, get) => ({
      products: [],
      getProduct: (id) => {
        const products = get().products;
        return products.find((product) => product.id === id);
      },
      setProducts: (products) => set({ products }),
      updateStock: (products) => {
        const newProducts = get().products.map((product) => {
          const update = products.find((item) => item.id === product.id);
          if (update)
            return {
              ...product,
              stock: update.stock,
            };
          return product;
        });
        set({ products: newProducts });
      },

      categories: [],
      setCategories: (categories) => set({ categories }),
    }),
    {
      name: "products-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
