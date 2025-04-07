import { FC, ReactNode } from "react";
import styles from "./title.module.scss";

type TitleProps = {
  children: ReactNode;
  rightArea?: ReactNode;
  className?: string;
};

const Title: FC<TitleProps> = ({ children, rightArea, className }) => {
  return (
    <div className={`${styles.titleContainer} ${className || ""}`}>
      <h1 className={styles.title}>{children}</h1>
      {rightArea}
    </div>
  );
};

export default Title;
