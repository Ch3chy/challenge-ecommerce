import { FC, useMemo } from "react";
import { ProductsListProps } from "./products-list.types";
import { useProductsStore } from "@/base/stores/useProductsStore";
import { ProductCard } from "../../components/product-card";
import styles from "./products-list.module.scss";
import { useParams } from "react-router-dom";

const ProductsList: FC<ProductsListProps> = ({ className }) => {
  const { category } = useParams();
  const products = useProductsStore((state) => state.products);

  const productsFilters = useMemo(() => {
    return category
      ? products.filter((product) => product.category === category)
      : products;
  }, [category, products]);

  return (
    <div className={`${styles.productsList} ${className || ""}`}>
      {productsFilters.map((product) => (
        <div key={product.id} className={styles.item}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
