import { FC, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import useLazyImport from "@/base/hooks/lazy-import.hook";
import Orders from "./orders";

const OrdersRoutes: FC = () => {
  const OrderDetail = useLazyImport(() => import("./views/detail/detail"));

  return (
    <Routes>
      <Route path="/" element={<Orders />}>
        <Route
          path="/:orderId"
          element={
            <Suspense>
              <OrderDetail />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
};

export default OrdersRoutes;
