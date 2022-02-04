import React, { Fragment } from "react";
import cns from "classnames";
import styles from "./startScreen.module.scss";
import { OPERATORS } from "../helper";
import OperatorBox from "./OperatorBox";

const OpertorSelector = ({
  operators: configOperators,
  quizConfig,
  setQuizConfig,
}) => {
  function toggleOperator(operator) {
    if (configOperators.includes(operator)) {
      if (configOperators.length === 1) return;
      const activeOperators = configOperators.filter((op) => op !== operator);
      setQuizConfig({ ...quizConfig, operators: activeOperators });
    } else {
      const activeOperators = OPERATORS.map((op) => {
        if (configOperators.includes(op) || op === operator) {
          return op;
        }
      }).filter((v) => v);
      setQuizConfig({ ...quizConfig, operators: activeOperators });
    }
  }

  return (
    <div className={cns("fw-bold", styles.operatorSelector)}>
      Operators
      <div className={cns("pl-3 pointer", styles.operatorBtnsDiv)}>
        {OPERATORS.map((operator, i) => (
          <Fragment key={i}>
            <OperatorBox
              operator={operator}
              active={configOperators?.includes(operator)}
              onClick={() => {
                toggleOperator(operator);
              }}
            />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default OpertorSelector;
