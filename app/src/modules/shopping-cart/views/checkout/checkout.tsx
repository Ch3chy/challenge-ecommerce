import { FC } from "react";
import Title from "@/base/components/title";
import styles from "./checkout.module.scss";
import { useShoppingCartStore } from "../../stores/useShoppingCartStore";
import { CartProduct } from "../../components/cart-product";
import { Button, Icon } from "checho-challenge-ui";
import { useNavigate } from "react-router-dom";

const Checkout: FC = () => {
  const navigate = useNavigate();

  const products = useShoppingCartStore((store) => store.products);
  const getProduct = useShoppingCartStore((store) => store.getProduct);

  const handleBack = () => {
    navigate("/shopping-cart/cart", { replace: true });
  };

  return (
    <section className={styles.checkout}>
      <Title>
        <strong>Completar</strong> Compra
      </Title>
      <div className={styles.layout}>
        <div className={styles.form}>
          <button className={styles.back} onClick={handleBack}>
            <Icon icon="ArrowLeft" /> Atras
          </button>
        </div>
        <div className={styles.summary}>
          <h3 className={styles.title}>Resumen</h3>
          <div className={styles.list}>
            {products.map((productId) => {
              const product = getProduct(productId);
              return product ? (
                <CartProduct
                  key={`cart-product-${productId}`}
                  product={product}
                  className={styles.product}
                  simple
                />
              ) : null;
            })}
          </div>
          <Button variant="primary" fullWidth>
            Pagar
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
