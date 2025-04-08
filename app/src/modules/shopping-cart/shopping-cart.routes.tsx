import { FC, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ShoppingCart from "./shopping-cart";
import useLazyImport from "@/base/hooks/lazy-import.hook";

const ShoppingCartRoutes: FC = () => {
  const CartProductsList = useLazyImport(
    () => import("./views/cart-products-list/cart-products-list")
  );

  return (
    <Routes>
      <Route path="/" element={<ShoppingCart />}>
        <Route
          path="/cart"
          element={
            <Suspense>
              <CartProductsList />
            </Suspense>
          }
        />
        <Route
          path="/"
          element={<Navigate to="/shopping-cart/cart" replace />}
        />
      </Route>
    </Routes>
  );
};

export default ShoppingCartRoutes;
