import { FC } from "react";
import { CategoryProps } from "./category.type";
import styles from "./category.module.scss";

const Category: FC<CategoryProps> = ({ category, active, className }) => {
  return (
    <div
      className={`${styles.category} ${active ? styles.categoryActive : ""} ${
        className || ""
      }`}
    >
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          src={category.image}
          alt={category.name}
        />
      </div>
      <h3 className={styles.name}>{category.name}</h3>
    </div>
  );
};

export default Category;
