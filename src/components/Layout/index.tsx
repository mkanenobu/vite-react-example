import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/all";
import styles from "./index.module.scss";
import { SideMenu } from "./SideMenu";
import { TopBar } from "./TopBar";

export const Layout: React.FC = (props) => {
  const [sideMenuShown, setSideMenuShown] = useState(false);

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
