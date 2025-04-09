import { FC, ReactNode } from "react";
import styles from "./title.module.scss";

type TitleProps = {
  children: ReactNode;
  className?: string;
};

const Title: FC<TitleProps> = ({ children, className }) => {
  return (
    <div className={`${styles.titleContainer} ${className || ""}`}>
      <h1 className={styles.title}>{children}</h1>
    </div>
  );
};

export default Title;
