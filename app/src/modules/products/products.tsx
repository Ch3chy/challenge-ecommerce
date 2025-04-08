import { useProductsStore } from "@/base/stores/useProductsStore";
import { FC } from "react";
import { Categories } from "./components/categories";
import styles from "./products.module.scss";
import Title from "@/base/components/title";
import { Outlet } from "react-router-dom";

const Products: FC = () => {
  const categories = useProductsStore((state) => state.categories);

  return (
    <div className={styles.products}>
      <section className={styles.section}>
        <Title>
          <strong>Lista</strong> Categorias
        </Title>
        <Categories categories={categories} />
      </section>
      <section className={styles.section}>
        <Title>
          <strong>Seleccione</strong> Productos
        </Title>
        <Outlet />
      </section>
    </div>
  );
};

export default Products;
