import { FC } from "react";
import { CategoriesProps } from "./categories.types";
import { Category } from "./components/category";
import { Link } from "react-router-dom";
import styles from "./categories.module.scss";

const Categories: FC<CategoriesProps> = ({
  categories,
  category: currentCategory,
  className,
}) => {
  return (
    <div className={`${styles.categories} ${className || ""}`}>
      {categories.map((category) => (
        <Link
          to={
            currentCategory === category.name
              ? "/"
              : `/categorias/${category.name}`
          }
          className={styles.item}
          key={`${category.name}`}
        >
          <Category
            category={category}
            active={currentCategory === category.name}
          />
        </Link>
      ))}
    </div>
  );
};

export default Categories;
