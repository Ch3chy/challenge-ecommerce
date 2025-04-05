import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Products from "./products";

const ProductsRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
    </Routes>
  );
};

export default ProductsRoutes;
