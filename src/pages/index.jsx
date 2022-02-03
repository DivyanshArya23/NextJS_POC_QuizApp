import { Fragment } from "react";
import Quiz from "../components/Quiz";
import { useSelector } from "react-redux";

export default function App() {
  const quizConfig = useSelector((state) => state.config);
  return (
    <div className="container">
      <div className="row">
        {quizConfig.map((config, i) => (
          <Fragment key={i}>
            <div className="col-12 col-md-6">
              <Quiz qIndex={i} config={config} />
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
