import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import cns from "classnames";
import styles from "./resultScreen.module.scss";
import Score from "./../Score";
import * as actions from "./../../../redux/actions";
import { quizStages } from "./../helper";

const ResultScreen = ({ qIndex, setStage }) => {
  const { qnaData, score } = useSelector((state) => state.quizData[qIndex]);
  const dispatch = useDispatch();

  function resetQuiz() {
    dispatch(actions.resetQuiz({ qIndex }));
    setStage(quizStages.STARTPAGE);
  }

  return (
    <div className={styles.resultScreen}>
      <div className={cns("row", styles.resultContainer)}>
        {/* displaying each question Summary */}
        {qnaData?.map(({ question, answer, userAnswer, isCorrect }, index) => (
          <Fragment key={index}>
            <div
              className={cns(
                "col-12 p-2 m-2 fw-bold",
                styles.singleResult,
                isCorrect ? styles.correct : styles.incorrect
              )}
            >
              <div className={cns(styles.question, "row")}>
                <span>Question : {question}</span>
              </div>
              <div className={cns(styles.corrAns, "row")}>
                <span>Correct Answer : {answer}</span>
              </div>
              <div className={cns(styles.userAns, "row")}>
                <span>Your Answer : {userAnswer}</span>
              </div>
            </div>
          </Fragment>
        ))}
      </div>

      {/* bottom Row to show score and Reset Quiz */}
      <div className={styles.resultBottomRow}>
        <Score
          className={styles.finalScore}
          text="Final Score : "
          score={score}
          mm={qnaData.length}
        />
        <div className={styles.resetBtn} onClick={resetQuiz}>
          <p>Reset Quiz</p>
        </div>
      </div>
    </div>
  );
};
export default ResultScreen;
