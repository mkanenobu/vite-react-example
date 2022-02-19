import React from "react";
import { Link } from "react-location";
import styles from "./SideMenu.module.scss";
import {
  AiOutlineHome,
  AiOutlineSetting,
  AiOutlineClose,
  AiOutlinePieChart,
  AiOutlineBoxPlot,
  AiOutlineLoading3Quarters,
  AiOutlineCoffee,
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
  {
    name: "Three",
    url: paths.three,
    icon: <AiOutlineBoxPlot className={styles.menuIcon} />,
  },
  {
    name: "Chart",
    url: paths.chart,
    icon: <AiOutlinePieChart className={styles.menuIcon} />,
  },
  {
    name: "Suspense",
    url: paths.data,
    icon: <AiOutlineLoading3Quarters className={styles.menuIcon} />,
  },
  {
    name: "Animation",
    url: paths.animation,
    icon: <AiOutlineCoffee className={styles.menuIcon} />,
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
        <Link key={menu.name} to={menu.url} className={styles.sideMenuItem}>
          {menu.icon}
          {menu.name}
        </Link>
      ))}
    </div>
  );
};
