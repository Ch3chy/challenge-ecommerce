import { Product } from "../types/product.type";

export const fetchProducts = async (): Promise<Product[]> => {
  return fetch("/mocks/products.json").then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });
};
