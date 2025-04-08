import { FC } from "react";
import { CartProductProps } from "./cart-product.types";
import { currencyFormat } from "@/utils/currency.utils";
import styles from "./cart-product.module.scss";

const CartProduct: FC<CartProductProps> = ({ product, className }) => {
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
    </article>
  );
};

export default CartProduct;
