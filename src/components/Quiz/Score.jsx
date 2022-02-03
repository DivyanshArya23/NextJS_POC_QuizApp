import React from "react";
import cns from "classnames";
import styles from "./index.module.scss";

const Score = ({ text = "Score : ", score, mm, className = "" }) => {
  return (
    <div className={cns(styles.scoreBox, "fw-bold", className)}>
      <p>
        {text} {score}
        {mm ? ` / ${mm}` : ""}
      </p>
    </div>
  );
};

export default Score;
