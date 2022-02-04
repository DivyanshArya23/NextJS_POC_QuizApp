import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import cns from "classnames";
import * as actions from "./../../../redux/actions";
import styles from "./questionScreen.module.scss";
import {
  quizStages,
  generateQnA,
  checkAnswer,
  DECIMAL_PLACES,
} from "./../helper";
import Button from "./../../Button";
import Input from "./../../Input";
import Score from "./../Score";

const QuestionScreen = ({ qIndex, config, setStage }) => {
  const { maxValue, operators, noq } = config;
  const dispatch = useDispatch();
  const [userAnswer, setUserAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [currentQuestion, setcurrentQuestion] = useState({
    question: "",
    answer: "",
  });

  useEffect(() => {
    const qnaObj = generateQnA({
      maxValue: maxValue,
      operators: operators,
    });
    setcurrentQuestion(qnaObj);
  }, []);

  function onChangeAnswer(e) {
    setUserAnswer(e.target.value);
  }

  function onClickNext() {
    //save Current Question/Answer/Score
    const isAnswerCorrect = checkAnswer({ userAnswer, currentQuestion });
    let newScore = isAnswerCorrect ? score + 1 : score;
    dispatch(
      actions.addQuestion({
        qIndex: qIndex,
        questionNumber,
        score: newScore,
        qData: { ...currentQuestion, userAnswer, isCorrect: isAnswerCorrect },
      })
    );

    //update score if user answers correct
    if (isAnswerCorrect) {
      setScore(newScore);
    }
    setUserAnswer("");
    const nxtQno = questionNumber + 1;
    if (nxtQno > noq) {
      // changeStage to Result, if this was last question
      setStage(quizStages.RESULT);
    } else {
      // generating next Question
      const nxtQnA = generateQnA({
        maxValue: maxValue,
        operators: operators,
      });
      setcurrentQuestion(nxtQnA);
      setQuestionNumber(nxtQno);
    }
  }
  return (
    <div className={cns(styles.questionScreen, "d-flex flex-column")}>
      <div className={cns(styles.quesRow, "d-flex flex-row")}>
        <div>{currentQuestion?.question || "No Question Found"} = </div>
        &nbsp;
        {/* Input for user Answer */}
        <Input
          className={cns(styles.inputBox, "fw-bold")}
          value={userAnswer}
          onChange={onChangeAnswer}
          maxLength={4}
        />
      </div>
      {/* Division can have answer in decimals, so a note for the same */}
      {currentQuestion?.answer?.includes(".") && (
        <div className={styles.note}>
          (Round-off Answer upto {DECIMAL_PLACES} decimal places)
        </div>
      )}
      <Button
        name="nextBtn"
        type="button"
        active
        className={cns(styles.nextBtn, "fw-bold")}
        onClick={onClickNext}
      >
        Next
      </Button>
      <Score score={score} />
    </div>
  );
};

export default QuestionScreen;
