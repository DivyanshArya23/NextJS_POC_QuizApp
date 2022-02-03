import React from "react";
import styles from "./startScreen.module.scss";
import Button from "./../../Button";
import { quizStages } from "./../helper";
import NoqChange from "./noqChange";
import MaxValueChanger from "./maxValueChanger";

const StartScreen = ({ setStage, quizConfig, setQuizConfig }) => {
  const { noq, maxValue } = quizConfig;

  function onChangeNOQ(newNoq) {
    if (newNoq >= 1) setQuizConfig({ ...quizConfig, noq: newNoq });
  }

  function onChangeMaxValue(newMaxValue) {
    if (newMaxValue >= 1 && newMaxValue <= 15)
      setQuizConfig({ ...quizConfig, maxValue: newMaxValue });
  }

  return (
    <div className={styles.startScreen}>
      <NoqChange noq={noq} onChange={onChangeNOQ} />
      <MaxValueChanger maxValue={maxValue} onChange={onChangeMaxValue} />
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
