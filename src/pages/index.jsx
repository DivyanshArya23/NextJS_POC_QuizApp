import React, { useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import Quiz from "../components/Quiz";
import * as actions from "./../redux/actions";

function App({ qConfig }) {
  const dispatch = useDispatch();
  const quizConfig = useSelector((state) => state.config);

  useEffect(() => {
    dispatch(actions.updateConfig(qConfig));
  }, []);

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
export async function getServerSideProps() {
  return {
    props: {
      qConfig: [
        {
          id: 1,
          maxValue: 10,
          noq: 2,
          operators: ["+", "-", "/", "*"],
        },
        {
          id: 2,
          maxValue: 10,
          noq: 20,
          operators: ["+", "-", "/", "*"],
        },
      ],
    }, // will be passed to the page component as props
  };
}
export default App;
