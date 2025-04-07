import { useProductsStore } from "@/base/stores/useProductsStore";
import { FC } from "react";
import { Categories } from "./components/categories";
import styles from "./products.module.scss";
import Title from "@/base/components/title";

const Products: FC = () => {
  const products = useProductsStore((state) => state.products);
  const categories = useProductsStore((state) => state.categories);

  return (
    <div className={styles.products}>
      <section className={styles.section}>
        <Title><strong>Lista</strong> Categorias</Title>
        <Categories categories={categories} />
      </section>
      <section className={styles.section}>
        <Title><strong>Seleccione</strong> Productos</Title>
      </section>
    </div>
  );
};

export default Products;
