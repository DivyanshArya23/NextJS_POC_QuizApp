import React, { useEffect, useState } from "react";
import cns from "classnames";
import styles from "./index.module.scss";
import { quizStages } from "./helper";
import StartScreen from "./StartScreen";
import QuestionScreen from "./QuestionScreen";
import ResultScreen from "./ResultScreen";

const Quiz = ({ qIndex, config }) => {
  const [stage, setStage] = useState(quizStages.STARTPAGE);
  const [quizConfig, setQuizConfig] = useState(config);

  useEffect(() => {
    if (stage === quizStages.STARTPAGE) {
      setQuizConfig(config);
    }
  }, [stage]);

  return (
    <div className={cns(styles.quizContainer)}>
      {stage === quizStages.STARTPAGE && (
        <StartScreen
          setStage={setStage}
          quizConfig={quizConfig}
          setQuizConfig={setQuizConfig}
        />
      )}
      {stage === quizStages.INPROGRESS && (
        <QuestionScreen
          qIndex={qIndex}
          config={quizConfig}
          setStage={setStage}
        />
      )}
      {stage === quizStages.RESULT && (
        <ResultScreen qIndex={qIndex} setStage={setStage} />
      )}
    </div>
  );
};

export default Quiz;
