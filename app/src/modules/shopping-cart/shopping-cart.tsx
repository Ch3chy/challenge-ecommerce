import { FC, useEffect } from "react";
import styles from "./shopping-cart.module.scss";
import { Outlet, useNavigate } from "react-router-dom";
import { useShoppingCartStore } from "./stores/useShoppingCartStore";
import { useUsersStore } from "../users/stores/useUsersStore";

const ShoppingCart: FC = () => {
  const navigate = useNavigate();
  const logged = useUsersStore((store) => store.logged);
  const products = useShoppingCartStore((store) => store.products);

  useEffect(() => {
    if (products.length <= 0) navigate("/products", { replace: true });
  }, [products]);

  useEffect(() => {
    if (logged) {
      navigate("/");
    }
  }, [logged]);

  return (
    <div className={styles.shoppingCart}>
      <Outlet />
    </div>
  );
};

export default ShoppingCart;
