import { IconNames } from "checho-challenge-ui";

export interface SideMenuProps {
  menuItems: MenuItemProps[];
  footerItems?: MenuItemProps[];
  className?: string;
}

export interface MenuItemProps {
  icon: IconNames;
  path: string;
  label?: string;
  active?: boolean;
  className?: string;
}
