import React from "react";
import cns from "classnames";
import styles from "./startScreen.module.scss";

const MaxValueChanger = ({ onChange, maxValue }) => {
  return (
    <div className={cns("fw-bold", styles.noqChanger)}>
      Max Operand Value
      <div className={cns("pl-3", styles.selection)}>
        <i
          className={cns("fa fa-minus pointer", styles.icon, {
            [styles.disabledIcon]: maxValue <= 1,
          })}
          aria-hidden="true"
          onClick={() => {
            onChange(maxValue - 1);
          }}
        />
        &nbsp;
        {maxValue}&nbsp;
        <i
          className={cns("fa fa-plus pointer", styles.icon, {
            [styles.disabledIcon]: maxValue >= 15,
          })}
          aria-hidden="true"
          onClick={() => {
            onChange(maxValue + 1);
          }}
        />
      </div>
    </div>
  );
};

export default MaxValueChanger;
