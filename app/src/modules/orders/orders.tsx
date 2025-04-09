import { Outlet, useParams } from "react-router-dom";
import Title from "@/base/components/title";
import { FC } from "react";
import styles from "./orders.module.scss";
import { OrdersList } from "./views/orders-list";
import { useOrdersStore } from "./stores/useOrdersStore";

const Orders: FC = () => {
  const { orderId } = useParams();
  const orders = useOrdersStore((store) => store.orders);

  return (
    <section className={styles.orders}>
      <Title>
        <strong>Historial</strong> Ordenes
      </Title>
      <OrdersList orders={orders} />
      {orderId && <Outlet />}
    </section>
  );
};

export default Orders;
