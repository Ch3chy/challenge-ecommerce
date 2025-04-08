import { FC, useMemo } from "react";
import styles from "./cart-products-list.module.scss";
import { useShoppingCartStore } from "../../stores/useShoppingCartStore";
import { CartProduct } from "../../components/cart-product";
import Title from "@/base/components/title";
import { currencyFormat } from "@/utils/currency.utils";
import { Button, Icon } from "checho-challenge-ui";
import { useNavigate } from "react-router-dom";

const CartProductsList: FC = () => {
  const navigate = useNavigate();

  const products = useShoppingCartStore((store) => store.products);
  const getProduct = useShoppingCartStore((store) => store.getProduct);
  const getTotals = useShoppingCartStore((store) => store.getTotals);
  const removeProduct = useShoppingCartStore((store) => store.removeProduct);

  const totals = useMemo(() => getTotals(), []);

  const handleDeleteProduct = (id: number) => {
    removeProduct(id);
  };

  const handleContinue = () => {
    navigate("/shopping-cart/checkout");
  };

  return (
    <section className={styles.cartProductsList}>
      <Title>
        <strong>Carrito</strong> Compra
      </Title>
      <div className={styles.list}>
        {products.map((productId) => {
          const product = getProduct(productId);
          return product ? (
            <CartProduct
              key={`cart-product-${productId}`}
              product={product}
              className={styles.product}
              onDeleteClick={() => handleDeleteProduct(productId)}
            />
          ) : null;
        })}
      </div>
      <div className={styles.totals}>
        <div className={styles.values}>
          <p>
            Neto total<strong>{currencyFormat(totals.totalNeto)}</strong>
          </p>
          <p>
            Total impuestos<strong>{currencyFormat(totals.totalTax)}</strong>
          </p>
          <p className={styles.total}>
            Total<strong>{currencyFormat(totals.totalPrice)}</strong>
          </p>
        </div>
        <Button variant="primary" onClick={handleContinue}>
          Continuar <Icon icon="ArrowRight" />
        </Button>
      </div>
    </section>
  );
};

export default CartProductsList;
