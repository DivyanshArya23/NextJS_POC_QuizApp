import * as types from "../types";

const initialState = [
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
];

const QuizConfig = (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};

export default QuizConfig;
