import { useProductsStore } from "@/base/stores/useProductsStore";
import { FC } from "react";

const Products: FC = () => {
  const products = useProductsStore((state) => state.products);

  return (
    <div>
      <h1>Modulo Productos: {products.length}</h1>
    </div>
  );
};

export default Products;
