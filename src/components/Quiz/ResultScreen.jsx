import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import styles from "./index.module.scss";
import cns from "classnames";

const ResultScreen = ({ qIndex }) => {
  const { qnaData } = useSelector((state) => state.quizData[qIndex]);

  //dummy Data
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
        // todo: remove qnaDatacopy and use qnaData
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
export default ResultScreen;
