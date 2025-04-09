import { Outlet, useNavigate, useParams } from "react-router-dom";
import Title from "@/base/components/title";
import { FC } from "react";
import styles from "./orders.module.scss";
import { OrdersList } from "./views/orders-list";
import { useOrdersStore } from "./stores/useOrdersStore";

const Orders: FC = () => {
  const navigate = useNavigate();
  const { orderId } = useParams();
  const orders = useOrdersStore((store) => store.orders);

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <section className={styles.orders}>
      <Title>
        <strong>Historial</strong> Ordenes
      </Title>
      <OrdersList orders={orders} />
      {orderId && (
        <div className={styles.detail}>
          <div className={styles.overlayer} onClick={handleGoBack}></div>
          <div className={styles.detailContainer}>
            <Outlet />
          </div>
        </div>
      )}
    </section>
  );
};

export default Orders;
