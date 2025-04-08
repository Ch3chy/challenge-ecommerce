import { FC, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Products from "./products";
import useLazyImport from "@/base/hooks/lazy-import.hook";

const ProductsRoutes: FC = () => {
  const ProductsList = useLazyImport(
    () => import("./views/products-list/products-list")
  );

  return (
    <Routes>
      <Route path="/" element={<Products />}>
        <Route
          path="/"
          element={
            <Suspense>
              <ProductsList />
            </Suspense>
          }
        />
        <Route
          path="/categories/:category"
          element={
            <Suspense>
              <ProductsList />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
};

export default ProductsRoutes;
