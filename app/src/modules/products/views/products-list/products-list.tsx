import { FC } from "react";
import { ProductsListProps } from "./products-list.types";
import { useProductsStore } from "@/base/stores/useProductsStore";
import { ProductCard } from "../../components/product-card";
import styles from "./products-list.module.scss";

const ProductsList: FC<ProductsListProps> = ({ className }) => {
  const products = useProductsStore((state) => state.products);

  return (
    <div className={`${styles.productsList} ${className || ""}`}>
      {products.map((product) => (
        <div key={product.id} className={styles.item}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
