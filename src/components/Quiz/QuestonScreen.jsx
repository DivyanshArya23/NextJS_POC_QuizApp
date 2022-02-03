import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as actions from "../../redux/actions";
import styles from "./index.module.scss";
import cns from "classnames";
import { quizStages, generateQnA } from "./helper";

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

  function checkAnswer({ userAnswer, currentQuestion }) {
    return userAnswer == currentQuestion.answer;
  }
  function onClickNext() {
    //save Current Question
    const isAnswerCorrect = checkAnswer({ userAnswer, currentQuestion });
    dispatch(
      actions.addQuestion({
        qIndex: qIndex,
        questionNumber,
        score: score + 1,
        qData: { ...currentQuestion, userAnswer, isCorrect: isAnswerCorrect },
      })
    );
    if (isAnswerCorrect) setScore((score) => score + 1);
    // display next Question
    setUserAnswer("");
    const nxtQno = questionNumber + 1;
    if (nxtQno > noq) {
      setStage(quizStages.RESULT);
    } else {
      const nxtQnA = generateQnA({
        maxValue: maxValue,
        operators: operators,
      });
      setcurrentQuestion(nxtQnA);
      setQuestionNumber(nxtQno);
    }
  }
  return (
    <div className="d-flex flex-column">
      <div className="d-flex flex-row">
        <div>{currentQuestion?.question || "No Question Found"} = </div>
        <input
          className={styles.inputBox}
          type="text"
          value={userAnswer}
          onChange={onChangeAnswer}
        />
      </div>
      <div className="d-flex flex-row">
        <button onClick={onClickNext}>Next</button>
      </div>
      <div className={cns(styles.scoreBox)}>
        <p>Score : {score}</p>
      </div>
    </div>
  );
};

export default QuestionScreen;
