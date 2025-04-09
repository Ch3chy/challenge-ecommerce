import { FC, useEffect, useMemo } from "react";
import styles from "./detail.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import Title from "@/base/components/title";
import { useOrdersStore } from "../../stores/useOrdersStore";
import { currencyFormat } from "@/utils/currency.utils";

const Detail: FC = () => {
  const navigate = useNavigate();
  const { orderId } = useParams();
  const getOrder = useOrdersStore((store) => store.getOrder);

  const order = useMemo(() => getOrder(orderId || ""), []);

  useEffect(() => {
    if (!order) {
      navigate("/orders");
    }
  }, [order]);

  return (
    <section className={styles.detail}>
      <Title>
        <strong>Detalle</strong> Orden
      </Title>
      {order && (
        <>
          <div className={styles.data}>
            <h4 className={styles.title}>Factura #{orderId}</h4>
            <p>
              <strong>Fecha: </strong>
              {String(order.date)}
            </p>
            <p>
              <strong>Cliente: </strong>
              {order.customer.name}
            </p>
            <p>
              <strong>Correo: </strong>
              {order.customer.email}
            </p>
            <hr className={styles.separator} />
            <p>
              <strong>Pais: </strong>
              {order.customer.country}
            </p>
            <p>
              <strong>Direccion: </strong>
              {order.customer.city} - {order.customer.address}
            </p>
          </div>
          <hr className={styles.separator} />
          <table className={styles.products}>
            <thead>
              <tr>
                <th>Product</th>
                <th>Cant.</th>
                <th>SubTotal</th>
              </tr>
            </thead>
            <tbody>
              {order.products.map((product) => (
                <tr className={styles.product} key={`${orderId}-${product.id}`}>
                  <td>{product.name}</td>
                  <td>{product.quantity}</td>
                  <td>{currencyFormat(product.totalPrice || 0)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <hr className={styles.separator} />
          <div className={styles.totals}>
            <p>
              <strong>Total neto</strong> {currencyFormat(order.totalNeto)}
            </p>
            <p>
              <strong>Total impuestos</strong> {currencyFormat(order.totalTax)}
            </p>
            <p className={styles.total}>
              <strong>Total</strong> {currencyFormat(order.totalPrice)}
            </p>
          </div>
        </>
      )}
    </section>
  );
};

export default Detail;
