import React, { useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import Quiz from "../components/Quiz";
import axios from "../utils/axios";
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
  const {
    data: { configData },
  } = await axios.get("/fetchconfig");
  return {
    // will be passed to the page component as props
    props: {
      qConfig: configData || [],
    },
  };
}
export default App;
