import React, { Fragment, useEffect, useState } from "react";
import cns from "classnames";
import styles from "./index.module.scss";
import { quizStages } from "./helper";
import { useDispatch } from "react-redux";
import * as actions from "../../redux/actions";
import { useSelector } from "react-redux";

const Quiz = ({ qIndex, config }) => {
  const [stage, setStage] = useState(quizStages.STARTPAGE);
  const [quizConfig, setQuizConfig] = useState(config);

  return (
    <div className={cns(styles.quizContainer)}>
      {stage === quizStages.STARTPAGE && (
        <StartPage
          setStage={setStage}
          quizConfig={quizConfig}
          setQuizConfig={setQuizConfig}
        />
      )}
      {stage === quizStages.INPROGRESS && (
        <AskQuestions qIndex={qIndex} config={quizConfig} setStage={setStage} />
      )}
      {stage === quizStages.RESULT && <ResultScreen qIndex={qIndex} />}
    </div>
  );
};
const StartPage = ({ setStage, quizConfig, setQuizConfig }) => {
  const { noq } = quizConfig;
  function onClickMinus() {
    if (noq > 1) setQuizConfig({ ...quizConfig, noq: noq - 1 });
  }
  function onClickPlus() {
    setQuizConfig({ ...quizConfig, noq: noq + 1 });
  }
  return (
    <Fragment>
      <div className="fw-bold">
        No Of Questions :{" "}
        <i className="fa fa-minus" aria-hidden="true" onClick={onClickMinus} />
        {quizConfig.noq}
        <i className="fa fa-plus" aria-hidden="true" onClick={onClickPlus} />
      </div>
      <div className={styles.startBtnDiv}>
        <button
          onClick={() => {
            setStage(quizStages.INPROGRESS);
          }}
        >
          Start Quiz
        </button>
      </div>
    </Fragment>
  );
};
const ResultScreen = ({ qIndex }) => {
  const { qnaData } = useSelector((state) => state.quizData[qIndex]);
  const qnaDatacopy = [
    { question: "1 + 3", answer: 4, userAnswer: "4", isCorrect: true },
    { question: "1 + 3", answer: 4, userAnswer: "4", isCorrect: true },
    { question: "1 + 3", answer: 4, userAnswer: "4", isCorrect: true },
    { question: "1 + 3", answer: 4, userAnswer: "4", isCorrect: true },
    { question: "1 + 3", answer: 4, userAnswer: "4", isCorrect: true },
    { question: "1 + 3", answer: 4, userAnswer: "4", isCorrect: true },
    { question: "1 + 3", answer: 4, userAnswer: "4", isCorrect: true },
    { question: "1 + 3", answer: 4, userAnswer: "4", isCorrect: true },
    { question: "1 + 3", answer: 4, userAnswer: "4", isCorrect: true },
    { question: "1 + 3", answer: 4, userAnswer: "4", isCorrect: true },
    { question: "1 + 3", answer: 4, userAnswer: "4", isCorrect: true },
    { question: "1 + 3", answer: 4, userAnswer: "4", isCorrect: true },
    { question: "1 + 3", answer: 4, userAnswer: "4", isCorrect: true },
    { question: "1 + 3", answer: 4, userAnswer: "4", isCorrect: true },
  ];

  return (
    <div className={cns("row", styles.resultContainer)}>
      {qnaDatacopy?.map(
        ({ question, answer, userAnswer, isCorrect }, index) => (
          <Fragment key={index}>
            <div
              className={cns(
                "col-11 p-2 m-2",
                styles.singleResult,
                isCorrect ? styles.correct : styles.incorrect
              )}
            >
              <div className="row">
                <div>Question:{question}</div>
              </div>
              <div className="row">
                <div>Correct Answer:{answer}</div>
              </div>
              <div className="row">
                <div>Your Answer:{userAnswer}</div>
              </div>
            </div>
          </Fragment>
        )
      )}
    </div>
  );
};

const generateQnA = ({ maxValue, operators }) => {
  const operand1 = Math.floor(Math.random() * (maxValue + 1));
  let operand2 = Math.floor(Math.random() * (maxValue + 1));

  const length = operators.length;
  const operatorIndex = Math.floor(Math.random() * length);
  const operator = operators[operatorIndex];
  if (operator === "/") {
    while (operand2 === 0) {
      operand2 = Math.floor(Math.random() * (maxValue + 1));
    }
  }
  const questionString = `${operand1} ${operator} ${operand2}`;
  let answer = eval(questionString);
  if (operator === "/") {
    answer = eval(questionString).toFixed(2);
  }

  return { question: questionString, answer };
};

const AskQuestions = ({ qIndex, config, setStage }) => {
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
export default Quiz;
