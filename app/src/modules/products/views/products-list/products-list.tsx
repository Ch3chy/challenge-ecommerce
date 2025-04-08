import { FC, useMemo } from "react";
import { ProductsListProps } from "./products-list.types";
import { ProductCard } from "../../components/product-card";
import styles from "./products-list.module.scss";
import { useParams } from "react-router-dom";
import { useProductsStore } from "../../stores/useProductsStore";
import { useShoppingCartStore } from "@/modules/shopping-cart/stores/useShoppingCartStore";
import { Product } from "../../types/product.type";
import { useUsersStore } from "@/modules/users/stores/useUsersStore";

const ProductsList: FC<ProductsListProps> = ({ className }) => {
  const { category } = useParams();
  const isLogged = useUsersStore((store) => store.logged);
  const products = useProductsStore((state) => state.products);
  const productInCart = useShoppingCartStore((store) => store.products);
  const getProductFromCart = useShoppingCartStore((store) => store.getProduct);
  const addToCart = useShoppingCartStore((store) => store.addProduct);

  const productsStocks = useMemo(() => {
    return products.map((product) => {
      const productFromCart = getProductFromCart(product.id);
      return {
        ...product,
        inactive: productFromCart
          ? product.stock - productFromCart.quantity <= 0
          : false,
      };
    });
  }, [products, productInCart]);

  const productsFilters = useMemo(() => {
    return category
      ? productsStocks.filter((product) => product.category === category)
      : productsStocks;
  }, [category, productsStocks]);

  const handleAddProduct = (product: Product) => {
    let productFromCart = getProductFromCart(product.id);
    if (!productFromCart) {
      productFromCart = {
        id: product.id,
        name: product.name,
        image: product.image,
        quantity: 0,
        price: product.price,
        tax: product.tax,
      };
    }
    addToCart(productFromCart);
  };

  return (
    <div className={`${styles.productsList} ${className || ""}`}>
      {productsFilters.map((product) => (
        <div key={product.id} className={styles.item}>
          <ProductCard
            product={product}
            desactiveShoppingCart={isLogged}
            onAddClick={() => handleAddProduct(product)}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
