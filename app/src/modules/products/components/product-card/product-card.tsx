import { FC } from "react";
import { ProductCardProps } from "./product-card.type";
import styles from "./product-card.module.scss";
import { Button, Icon } from "checho-challenge-ui";
import { currencyFormat } from "@/utils/currency.utils";

const ProductCard: FC<ProductCardProps> = ({
  product,
  className,
  desactiveShoppingCart,
  onAddClick,
}) => {
  const handleAddClick = () => {
    if (!product.inactive && onAddClick) onAddClick();
  };

  return (
    <article
      className={`${styles.productCard} ${
        product.inactive ? styles.productCardInactive : ""
      } ${className || ""}`}
    >
      <figure className={styles.imageContainer}>
        <img src={product.image} alt={product.name} className={styles.image} />
      </figure>
      <h3 className={styles.name}>{product.name}</h3>
      <span className={styles.price}>{currencyFormat(product.price)}</span>
      {desactiveShoppingCart && (
        <p>
          <strong>Cantidad: </strong>
          {product.stock}
        </p>
      )}
      {!desactiveShoppingCart && (
        <Button
          onClick={handleAddClick}
          fullWidth
          variant="primary"
          disabled={product.inactive}
        >
          <Icon icon="ShoppingCart" /> Agregar
        </Button>
      )}
    </article>
  );
};

export default ProductCard;
