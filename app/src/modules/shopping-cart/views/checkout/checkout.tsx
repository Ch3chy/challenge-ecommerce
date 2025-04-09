import { FC, useMemo, useState } from "react";
import Title from "@/base/components/title";
import styles from "./checkout.module.scss";
import { useShoppingCartStore } from "../../stores/useShoppingCartStore";
import { CartProduct } from "../../components/cart-product";
import { Button, Icon } from "checho-challenge-ui";
import { useNavigate } from "react-router-dom";
import { CustomerForm } from "../../components/customer-form";
import { useFacadeCoreStore } from "@/base/hooks/facade-core-store.hook";
import { useOrdersStore } from "@/modules/orders/stores/useOrdersStore";
import { useProductsStore } from "@/modules/products/stores/useProductsStore";
import { Customer } from "../../types/customer.type";
import { toast } from "sonner";

const Checkout: FC = () => {
  const navigate = useNavigate();

  const products = useShoppingCartStore((store) => store.products);
  const customer = useShoppingCartStore((store) => store.customer);
  const getTotals = useShoppingCartStore((store) => store.getTotals);
  const getProduct = useShoppingCartStore((store) => store.getProduct);
  const getProducts = useShoppingCartStore((store) => store.getProducts);
  const setCustomer = useShoppingCartStore((store) => store.setCustomer);
  const clearShoppingCart = useShoppingCartStore(
    (store) => store.clearShoppingCart
  );
  const addOrder = useOrdersStore((store) => store.addOrder);
  const updateStock = useProductsStore((store) => store.updateStock);
  const getProductInventory = useProductsStore((store) => store.getProduct);
  const { countries } = useFacadeCoreStore();

  const [formIsValid, setFormIsValid] = useState(false);

  const totals = useMemo(() => getTotals(), []);

  const handleBack = () => {
    navigate("/shopping-cart/cart", { replace: true });
  };

  const handleChangeCustomerData = (data: Customer) => {
    if (products.length > 0) {
      setCustomer(data)
    }
  }

  const handleCreateOrder = () => {
    if (products.length > 0 && customer) {
      addOrder({
        date: new Date(),
        customer,
        products: getProducts(),
        ...totals,
      });

      updateStock(
        products.map((product) => {
          const detail = getProduct(product);
          const inventory = getProductInventory(product);
          if (detail && inventory) {
            return { id: product, stock: inventory.stock - detail.quantity };
          }
          return { id: product, stock: 0 };
        })
      );

      clearShoppingCart();

      toast.success(`Orden creada correctamente`);
    }
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
          <div className={styles.customer}>
            <CustomerForm
              data={customer}
              countries={countries}
              onChangeData={handleChangeCustomerData}
              onChangeIsValid={(isValid) => setFormIsValid(isValid)}
            />
          </div>
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
          <Button
            variant="primary"
            fullWidth
            disabled={!formIsValid}
            onClick={handleCreateOrder}
          >
            Crear orden
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
