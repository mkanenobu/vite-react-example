import React from "react";
import styles from "./SideMenu.module.scss";
import {
  AiOutlineHome,
  AiOutlineSetting,
  AiOutlineClose,
} from "react-icons/all";
import { paths } from "../../paths";

interface Menu {
  name: string;
  url: string;
  icon: React.ReactElement;
}

const menus: Menu[] = [
  {
    name: "Top",
    url: paths.home,
    icon: <AiOutlineHome className={styles.menuIcon} />,
  },
  {
    name: "Settings",
    url: paths.settings,
    icon: <AiOutlineSetting className={styles.menuIcon} />,
  },
];

interface SideMenuProps {
  closeSideMenu: () => unknown;
  opened: boolean;
}

export const SideMenu: React.VFC<SideMenuProps> = (props) => {
  return (
    <div className={styles.sideMenuContainer}>
      <AiOutlineClose
        onClick={props.closeSideMenu}
        className={styles.closeIcon}
      />

      {menus.map((menu) => (
        <a key={menu.name} href={menu.url} className={styles.sideMenuItem}>
          {menu.icon}
          {menu.name}
        </a>
      ))}
    </div>
  );
};
