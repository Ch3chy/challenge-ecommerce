import { FC } from "react";
import { OrdersListProps } from "./orders-list.type";
import { currencyFormat } from "@/utils/currency.utils";
import styles from "./orders-list.module.scss";
import { useNavigate } from "react-router-dom";
import { Order } from "../../types/order.type";

const OrdersList: FC<OrdersListProps> = ({ orders, className }) => {
  const navigate = useNavigate();

  const handleClickOrder = (order: Order) => {
    navigate(`/orders/${order.id}`);
  };

  return (
    <div className={`${styles.ordersList} ${className || ""}`}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>#Orden</th>
            <th>Cliente</th>
            <th>Products</th>
            <th>Email</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr className={styles.space}>
            <td></td>
          </tr>
          {orders.map((order) => (
            <tr key={order.id} onClick={() => handleClickOrder(order)}>
              <td className={styles.id}>{order.id}</td>
              <td className={styles.name}>{order.customer.name}</td>
              <td className={styles.products}>
                {order.products.map((product) => (
                  <p key={product.id}>
                    ({product.quantity}) {product.name}
                  </p>
                ))}
              </td>
              <td className={styles.email}>{order.customer.email}</td>
              <td className={styles.total}>
                {currencyFormat(order.totalPrice)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersList;
