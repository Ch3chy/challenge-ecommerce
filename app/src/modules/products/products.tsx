import { FC } from "react";
import { Categories } from "./components/categories";
import styles from "./products.module.scss";
import Title from "@/base/components/title";
import { Outlet, useParams } from "react-router-dom";
import { useProductsStore } from "./stores/useProductsStore";

const Products: FC = () => {
  const { category } = useParams();
  const categories = useProductsStore((state) => state.categories);

  return (
    <div className={styles.products}>
      <section className={styles.section}>
        <Title>
          <strong>Lista</strong> Categorias
        </Title>
        <Categories categories={categories} category={category} />
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
