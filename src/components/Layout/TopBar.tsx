import React from "react";
import styles from "./TopBar.module.scss";

export const TopBar: React.FC = (props) => {
  return <div className={styles.topBar}>{props.children}</div>;
};
