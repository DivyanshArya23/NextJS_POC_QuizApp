import React from "react";
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
    <div>
      <div className="fw-bold">
        No Of Questions :{" "}
        <i className="fa fa-minus" aria-hidden="true" onClick={onClickMinus} />
        {quizConfig.noq}
        <i className="fa fa-plus" aria-hidden="true" onClick={onClickPlus} />
      </div>
      <Button
        name="startQuizBtn"
        type="button"
        active
        className={""}
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
