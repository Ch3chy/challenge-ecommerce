import { Button } from "checho-challenge-ui";
import { useProductsStore } from "@/base/stores/useProductsStore";
import { FC } from "react";

const Products: FC = () => {
  const products = useProductsStore((state) => state.products);
  const categories = useProductsStore((state) => state.categories);

  return (
    <div>
      <h1>Categorias ({categories.length})</h1>
      <h1>Productos ({products.length})</h1>
      <Button> TEST </Button>
    </div>
  );
};

export default Products;
