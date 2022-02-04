import React from "react";
import cns from "classnames";
import styles from "./startScreen.module.scss";

const OperatorBox = ({ operator, active, onClick }) => {
  return (
    <div
      className={cns(
        styles.operatorBox,
        active ? styles.active : styles.inactive
      )}
      onClick={onClick}
    >
      {operator}
    </div>
  );
};

export default OperatorBox;
