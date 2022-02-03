import { combineReducers } from "redux";
import QuizReducer from "./quizData.reducer";
import quizConfig from "./quizConfig.reducer";

export default combineReducers({
  quizData: QuizReducer,
  config: quizConfig,
});
