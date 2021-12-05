import React, { useState, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/all";
import { useLocation } from "react-location";
import styles from "./index.module.scss";
import { SideMenu } from "./SideMenu";
import { TopBar } from "./TopBar";

export const Layout: React.FC = (props) => {
  const [sideMenuShown, setSideMenuShown] = useState(false);

  const loc = useLocation();
  useEffect(() => {
    setSideMenuShown(false);
  }, [loc.current]);

  return (
    <div className={styles.container}>
      <TopBar />

      <div className={styles.content}>{props.children}</div>

      {!sideMenuShown && (
        <AiOutlineMenu
          className={styles.menuButton}
          onClick={() => setSideMenuShown(true)}
        />
      )}

      {sideMenuShown && (
        <SideMenu
          opened={sideMenuShown}
          closeSideMenu={() => setSideMenuShown(false)}
        />
      )}
    </div>
  );
};
