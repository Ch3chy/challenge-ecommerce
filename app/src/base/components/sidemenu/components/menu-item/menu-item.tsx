import { FC } from "react";
import { MenuItemProps } from "../../sidemenu.types";
import { Link } from "react-router-dom";
import styles from "./menu-item.module.scss";
import { Icon } from "checho-challenge-ui";

const MenuItem: FC<MenuItemProps> = ({
  icon,
  label,
  path,
  active,
  className,
}) => {
  return (
    <Link
      to={path}
      className={`${styles.menuItem} ${active ? styles.itemActive : ""} ${
        className || ""
      }`}
    >
      <Icon icon={icon} className={styles.icon} />
      {label && <span className={styles.label}>{label}</span>}
    </Link>
  );
};

export default MenuItem;
