import { FC } from "react";
import styles from "./base.module.scss";

const Base: FC = () => {
  return (
    <div className={styles.principalMain}>
      <div className={styles.appContainer}>
          <div className={styles.sideMenu}>Aqui va sidemenu</div>
          <main className={styles.appMain}><h1>Aqui va el contenido</h1></main>
      </div>
    </div>
  );
};

export default Base;
