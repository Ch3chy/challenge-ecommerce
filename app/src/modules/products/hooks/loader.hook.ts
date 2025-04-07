import { useProductsStore } from "@/base/stores/useProductsStore";
import { fetchProducts } from "../fetchs/products.fetchs";
import { Product } from "../types/product.type";

export const useProductsLoader = () => {
  const setProducts = useProductsStore((state) => state.setProducts);
  const setCategories = useProductsStore((state) => state.setCategories);

  const loadProducts = async () => {
    try {
      const products = await fetchProducts();
      setProducts(products);
      loadCategories(products);
    } catch (error) {
      console.error("Error loading products:", error);
    }
  };

  const loadCategories = async (products: Product[]) => {
    const categories = products.map((product) => product.category);
    const uniqueCategories = [...new Set(categories)];

    setCategories(
      uniqueCategories.map((category) => {
        const product = products.find((p) => p.category === category);
        return {
          name: category,
          image: product?.image || "",
        };
      })
    );
  };

  return { loadProducts };
};
