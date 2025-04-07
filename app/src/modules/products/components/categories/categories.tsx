import { FC } from "react";
import { CategoriesProps } from "./categories.types";
import { Category } from "./components/category";
import { Link } from "react-router-dom";
import styles from "./categories.module.scss";

const Categories: FC<CategoriesProps> = ({ categories, className }) => {
  return (
    <div className={`${styles.categories} ${className || ""}`}>
      {categories.map((category) => (
        <Link
          to={`/products/${category.name}`}
          className={styles.item}
          key={`${category.name}`}
        >
          <Category category={category} />
        </Link>
      ))}
    </div>
  );
};

export default Categories;
