import React from "react";
import cns from "classnames";
import styles from "./index.module.scss";
import Button from "../Button";
import { quizStages } from "./helper";

const StartScreen = ({ setStage, quizConfig, setQuizConfig }) => {
  const { noq } = quizConfig;
  function onClickMinus() {
    if (noq > 1) setQuizConfig({ ...quizConfig, noq: noq - 1 });
  }
  function onClickPlus() {
    setQuizConfig({ ...quizConfig, noq: noq + 1 });
  }
  return (
    <div className={styles.startScreen}>
      <div className={cns("fw-bold", styles.quesSelector)}>
        No Of Questions
        <div className={cns("pl-3", styles.selection)}>
          <i
            className={cns("fa fa-minus pointer", styles.icon, {
              [styles.disabledIcon]: noq <= 1,
            })}
            aria-hidden="true"
            onClick={onClickMinus}
          />
          &nbsp;
          {noq}&nbsp;
          <i
            className={cns("fa fa-plus pointer", styles.icon)}
            aria-hidden="true"
            onClick={onClickPlus}
          />
        </div>
      </div>
      <Button
        name="startQuizBtn"
        type="button"
        active
        className={styles.startQuizBtn}
        onClick={() => {
          setStage(quizStages.INPROGRESS);
        }}
      >
        Start Quiz
      </Button>
    </div>
  );
};
export default StartScreen;
