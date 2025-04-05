import { FC } from "react";
import styles from "./base.module.scss";
import { Outlet } from "react-router-dom";

const Base: FC = () => {
  return (
    <div className={styles.principalMain}>
      <main className={styles.appContainer}>
        <div className={styles.sideMenu}>Aqui va sidemenu</div>
        <section className={styles.appMain}>
          <Outlet />
        </section>
      </main>
    </div>
  );
};

export default Base;
