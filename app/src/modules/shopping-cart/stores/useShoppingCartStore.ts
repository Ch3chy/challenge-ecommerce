import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { ShoppingCartStore } from "../types/store.type";
import { calculeAddProduct } from "../utils/shopping-cart.utils";

export const useShoppingCartStore = create<ShoppingCartStore>()(
  persist(
    (set, get) => ({
      products: [],
      productsDetail: {},
      getProduct: (id) => {
        const products = get().productsDetail;
        return products[`product-${id}`];
      },
      addProduct: (product) => {
        const { products, productsDetail } = get();
        productsDetail[`product-${product.id}`] = calculeAddProduct(product);
        set({
          products: [...new Set([...products, product.id])],
          productsDetail,
        });
      },
    }),
    {
      name: "shopping-cart-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
