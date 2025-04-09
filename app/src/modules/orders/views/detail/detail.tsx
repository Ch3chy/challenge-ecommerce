import { FC, useEffect, useMemo } from "react";
import styles from "./detail.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import Title from "@/base/components/title";
import { useOrdersStore } from "../../stores/useOrdersStore";

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
      Detalle {orderId}
    </section>
  );
};

export default Detail;
