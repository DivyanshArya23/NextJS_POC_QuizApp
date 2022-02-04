import React from "react";
import cns from "classnames";
import styles from "./startScreen.module.scss";
import { MAX_OPERAND, MIN_OPERAND } from "../helper";

const MaxValueChanger = ({ onChange, maxValue }) => {
  return (
    <div className={cns("fw-bold", styles.noqChanger)}>
      Max Operand Value
      <div className={cns("pl-3", styles.selection)}>
        <i
          className={cns("fa fa-minus pointer", styles.icon, {
            [styles.disabledIcon]: maxValue <= MIN_OPERAND,
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
            [styles.disabledIcon]: maxValue >= MAX_OPERAND,
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
