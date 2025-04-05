import { FC, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Base from "./base";
import useLazyImport from "./hooks/lazy-import.hook";

const BaseRoutes: FC = () => {
  const ProductsRoutes = useLazyImport(
    () => import("@/modules/products/products.routes")
  );

  return (
    <Routes>
      <Route path="*" element={<Base />}>
        <Route
          path="*"
          element={
            <Suspense>
              <ProductsRoutes />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
};

export default BaseRoutes;
