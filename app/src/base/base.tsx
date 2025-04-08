import { FC, useEffect, useMemo } from "react";
import styles from "./base.module.scss";
import { Outlet, useLocation } from "react-router-dom";
import { SideMenu } from "./components/sidemenu";
import { MenuItemProps } from "./components/sidemenu/sidemenu.types";
import { useProductsLoader } from "@/modules/products/hooks/loader.hook";

const Base: FC = () => {
  const { pathname } = useLocation();
  const { products, loadProducts } = useProductsLoader();

  const menu = useMemo(() => {
    const items: MenuItemProps[] = [
      { icon: "QrCode", path: "/products", label: "Productos" },
      { icon: "ShoppingCart", path: "/shopping-cart", label: "Carrito" },
      { icon: "Note", path: "/pedidos", label: "Pedidos" },
    ];

    return items.map((item) => ({
      ...item,
      active: pathname.indexOf(item.path) >= 0,
    }));
  }, [pathname]);

  const footerMenu: MenuItemProps[] = [
    { icon: "SignIn", path: "/", label: "Ingresar" },
  ];

  useEffect(() => {
    if (products.length === 0) {
      loadProducts();
    }
  }, [products, loadProducts]);

  return (
    <div className={styles.principalMain}>
      <main className={styles.appContainer}>
        <div className={styles.sideMenu}>
          <SideMenu menuItems={menu} footerItems={footerMenu} />
        </div>
        <section className={styles.appMain}>
          <Outlet />
        </section>
      </main>
    </div>
  );
};

export default Base;
