import { FC } from "react";
import styles from "./shopping-cart.module.scss";
import { Outlet } from "react-router-dom";

const ShoppingCart: FC = () => {
  return (
    <div className={styles.shoppingCart}>
      <Outlet />
    </div>
  );
};

export default ShoppingCart;
