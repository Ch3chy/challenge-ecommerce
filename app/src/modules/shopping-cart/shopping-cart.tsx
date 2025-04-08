import { FC, useEffect } from "react";
import styles from "./shopping-cart.module.scss";
import { Outlet, useNavigate } from "react-router-dom";
import { useShoppingCartStore } from "./stores/useShoppingCartStore";

const ShoppingCart: FC = () => {
  const navigate = useNavigate();
  const products = useShoppingCartStore((store) => store.products);

  useEffect(() => {
    if (products.length <= 0) navigate("/products", { replace: true });
  }, [products]);

  return (
    <div className={styles.shoppingCart}>
      <Outlet />
    </div>
  );
};

export default ShoppingCart;
