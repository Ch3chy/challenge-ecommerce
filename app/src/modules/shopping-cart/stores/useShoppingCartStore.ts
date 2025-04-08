import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { ShoppingCartStore } from "../types/store.type";
import { calculeAddProduct } from "../utils/shopping-cart.utils";
import { Customer } from "../types/customer.type";

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
      removeProduct: (id) => {
        const { products, productsDetail } = get();
        delete productsDetail[`product-${id}`];
        set({
          products: products.filter((item) => item !== id),
          productsDetail,
        });
      },
      getProducts: () => {
        const { products, productsDetail } = get();
        return products.map((id) => productsDetail[`product-${id}`]);
      },

      setCustomer: (customer: Customer) => set({ customer }),

      getTotals: () => {
        const products = get().productsDetail;
        return Object.values(products).reduce(
          (totals, product) => ({
            totalNeto: totals.totalNeto + (product.totalNeto || 0),
            totalTax: totals.totalTax + (product.totalTax || 0),
            totalPrice: totals.totalPrice + (product.totalPrice || 0),
          }),
          { totalNeto: 0, totalTax: 0, totalPrice: 0 }
        );
      },

      clearShoppingCart: () => {
        set({ products: [], productsDetail: {}, customer: undefined });
      },
    }),
    {
      name: "shopping-cart-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
