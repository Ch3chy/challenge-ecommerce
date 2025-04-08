import { FC, useEffect, useMemo } from "react";
import styles from "./base.module.scss";
import { Outlet, useLocation } from "react-router-dom";
import { SideMenu } from "./components/sidemenu";
import { MenuItemProps } from "./components/sidemenu/sidemenu.types";
import { useProductsLoader } from "@/modules/products/hooks/loader.hook";
import { useUsersStore } from "@/modules/users/stores/useUsersStore";

const Base: FC = () => {
  const { pathname } = useLocation();
  const isLogged = useUsersStore((store) => store.logged);
  const { products, loadProducts } = useProductsLoader();

  const menu = useMemo(() => {
    const items: MenuItemProps[] = [
      { icon: "QrCode", path: "/products", label: "Productos" },
      ...(!isLogged
        ? [
            {
              icon: "ShoppingCart",
              path: "/shopping-cart",
              label: "Carrito",
            } as MenuItemProps,
          ]
        : []),
      ...(isLogged
        ? [
            {
              icon: "Note",
              path: "/pedidos",
              label: "Pedidos",
            } as MenuItemProps,
          ]
        : []),
    ];

    return items.map((item) => ({
      ...item,
      active: pathname.indexOf(item.path) >= 0,
    }));
  }, [pathname, isLogged]);

  const footerMenu: MenuItemProps[] = useMemo(
    () => [
      ...(!isLogged
        ? [
            {
              icon: "SignIn",
              path: "/users/login",
              label: "Ingresar",
            } as MenuItemProps,
          ]
        : [
            {
              icon: "SignOut",
              path: "/users/logout",
              label: "Salir",
            } as MenuItemProps,
          ]),
    ],
    [isLogged]
  );

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
