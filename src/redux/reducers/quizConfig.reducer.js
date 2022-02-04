import * as types from "../types";

const initialState = [];

const QuizConfig = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.UPDATE_CONFIG:
      return payload;

    default:
      return state;
  }
};

export default QuizConfig;
