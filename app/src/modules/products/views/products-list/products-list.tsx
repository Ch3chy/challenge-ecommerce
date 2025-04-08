import { FC, useMemo } from "react";
import { ProductsListProps } from "./products-list.types";
import { ProductCard } from "../../components/product-card";
import styles from "./products-list.module.scss";
import { useParams } from "react-router-dom";
import { useProductsStore } from "../../stores/useProductsStore";
import { useShoppingCartStore } from "@/modules/shopping-cart/stores/useShoppingCartStore";
import { Product } from "../../types/product.type";

const ProductsList: FC<ProductsListProps> = ({ className }) => {
  const { category } = useParams();
  const products = useProductsStore((state) => state.products);
  const getProductFromCart = useShoppingCartStore((store) => store.getProduct);
  const addToCart = useShoppingCartStore((store) => store.addProduct);

  const productsFilters = useMemo(() => {
    return category
      ? products.filter((product) => product.category === category)
      : products;
  }, [category, products]);

  const handleAddProduct = (product: Product) => {
    let productFromCart = getProductFromCart(product.id);
    if (!productFromCart) {
      productFromCart = {
        id: product.id,
        name: product.name,
        quantity: 0,
        price: product.price,
        tax: product.tax,
      };
    }
    addToCart(productFromCart);
  };

  return (
    <div className={`${styles.productsList} ${className || ""}`}>
      {productsFilters.map((product) => (
        <div key={product.id} className={styles.item}>
          <ProductCard
            product={product}
            onAddClick={() => handleAddProduct(product)}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
