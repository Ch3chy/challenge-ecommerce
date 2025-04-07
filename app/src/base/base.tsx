import { FC, useEffect } from "react";
import styles from "./base.module.scss";
import { Outlet } from "react-router-dom";
import { SideMenu } from "./components/sidemenu";
import { MenuItemProps } from "./components/sidemenu/sidemenu.types";
import { useProductsLoader } from "@/modules/products/hooks/loader.hook";

const Base: FC = () => {
  const { loadProducts } = useProductsLoader();

  const menu: MenuItemProps[] = [
    { icon: "QrCode", path: "/", label: "Productos", active: true },
    { icon: "Note", path: "/", label: "Pedidos" },
  ];

  const footerMenu: MenuItemProps[] = [
    { icon: "SignIn", path: "/", label: "Ingresar" },
  ];

  useEffect(() => {
    loadProducts();
  }, []);

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
