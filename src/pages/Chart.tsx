import React from "react";
import { VictoryPie } from "victory";
import styles from "./Chart.module.scss";

const data = [
  { x: "Cats", y: 35 },
  { x: "Dogs", y: 40 },
  { x: "Birds", y: 55 },
];

export const Chart: React.VFC = () => {
  return (
    <div className={styles.pieChart}>
      {/* "grayscale", "qualitative", "heatmap", "warm", "cool", "red", "green", "blue" */}
      <VictoryPie data={data} colorScale={"heatmap"} />
    </div>
  );
};
