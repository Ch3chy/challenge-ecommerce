import { FC } from "react";
import { CartProductProps } from "./cart-product.types";
import { currencyFormat } from "@/utils/currency.utils";
import styles from "./cart-product.module.scss";
import { Button, Icon } from "checho-challenge-ui";

const CartProduct: FC<CartProductProps> = ({
  product,
  className,
  onDeleteClick,
}) => {
  return (
    <article className={`${styles.cartProduct} ${className || ""}`}>
      <figure className={styles.imageContainer}>
        <img src={product.image} className={styles.image} alt={product.name} />
      </figure>
      <div className={styles.data}>
        <h3 className={styles.title}>{product.name}</h3>
        <p>{currencyFormat(product.price)}</p>
      </div>
      <div className={styles.values}>
        <p>Cantidad: {product.quantity}</p>
        <p className={styles.price}>{currencyFormat(product.totalNeto || 0)}</p>
      </div>
      <Button
        variant="secondary"
        className={styles.trash}
        onClick={onDeleteClick}
      >
        <Icon icon="Trash" />
      </Button>
    </article>
  );
};

export default CartProduct;
