import { FC, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Base from "./base";
import useLazyImport from "./hooks/lazy-import.hook";

const BaseRoutes: FC = () => {
  const ProductsRoutes = useLazyImport(
    () => import("@/modules/products/products.routes")
  );
  const ShoppingCartRoutes = useLazyImport(
    () => import("@/modules/shopping-cart/shopping-cart.routes")
  );
  const UsersRoutes = useLazyImport(
    () => import("@/modules/users/users.routes")
  );

  return (
    <Routes>
      <Route path="/" element={<Base />}>
        <Route
          path="products/*"
          element={
            <Suspense>
              <ProductsRoutes />
            </Suspense>
          }
        />
        <Route
          path="shopping-cart/*"
          element={
            <Suspense>
              <ShoppingCartRoutes />
            </Suspense>
          }
        />
        <Route
          path="users/*"
          element={
            <Suspense>
              <UsersRoutes />
            </Suspense>
          }
        />
        <Route path="/" element={<Navigate to="/products" replace />} />
      </Route>
    </Routes>
  );
};

export default BaseRoutes;
