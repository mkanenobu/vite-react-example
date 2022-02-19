import React from "react";
import { useDate } from "../helpers/date-helper";
import styles from "./Loading.module.scss";

export const Loading: React.VFC = () => {
  const now = useDate(1000);

  return (
    <div className={styles.loadingContainer}>
      Loading{".".repeat(Math.floor((now.getSeconds() % 3) + 1))}
    </div>
  );
};
