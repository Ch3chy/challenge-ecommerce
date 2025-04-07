import { FC } from "react";
import { SideMenuProps } from "./sidemenu.types";
import { Link } from "react-router-dom";
import MenuItem from "./components/menu-item/menu-item";
import logo from "../../../assets/logo.svg";
import styles from "./sidemenu.module.scss";

const SideMenu: FC<SideMenuProps> = ({ menuItems, footerItems, className }) => {
  return (
    <nav className={`${styles.sidemenu} ${className || ""}`}>
      <div className={styles.header}>
        <Link to="/" className={styles.item}>
          <img className={styles.logo} src={logo} alt="Logo" />
        </Link>
      </div>
      <ul className={styles.menu}>
        {menuItems.map((item, index) => (
          <li key={index} className={styles.item}>
            <MenuItem
              icon={item.icon}
              label={item.label}
              path={item.path}
              active={item.active}
            />
          </li>
        ))}
      </ul>
      {footerItems && (
        <ul className={styles.menuFooter}>
          {footerItems.map((item, index) => (
            <li key={index} className={styles.item}>
              <MenuItem
                icon={item.icon}
                label={item.label}
                path={item.path}
                active={item.active}
              />
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default SideMenu;
