import React from "react";
import cns from "classnames";
import styles from "./startScreen.module.scss";

const NoqChange = ({ onChange, noq }) => {
  return (
    <div className={cns("fw-bold", styles.noqChanger)}>
      No Of Questions
      <div className={cns("pl-3", styles.selection)}>
        <i
          className={cns("fa fa-minus pointer", styles.icon, {
            [styles.disabledIcon]: noq <= 1,
          })}
          aria-hidden="true"
          onClick={() => {
            onChange(noq - 1);
          }}
        />
        &nbsp;
        {noq}&nbsp;
        <i
          className={cns("fa fa-plus pointer", styles.icon)}
          aria-hidden="true"
          onClick={() => {
            onChange(noq + 1);
          }}
        />
      </div>
    </div>
  );
};

export default NoqChange;
