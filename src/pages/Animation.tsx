import React from "react";
import styles from "./Animation.module.css";

interface EffectiveButtonProps {
  onClick: () => void;
  text: string;
}
const EffectiveButton: React.VFC<EffectiveButtonProps> = (props) => {
  return (
    <button
      onClick={() => props.onClick()}
      className={styles.button}
    >
      {props.text}
    </button>
  );
};

export const Animation: React.VFC = () => {
  return (
    <div>
      <EffectiveButton
        onClick={() => {
          console.log("onClick");
        }}
        text="Effective Button"
      />
    </div>
  );
};
