import * as types from "../types";

const initialState = {};

const QuizReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.UPDATE_QUIZ:
      return {
        ...state,
        [payload.qIndex]: { ...payload.qIndex, ...payload.qData },
      };

    case types.ADD_QUESTION:
      return {
        ...state,
        [payload.qIndex]: {
          ...state[payload.qIndex],
          qnaData: [
            ...(state[payload.qIndex]?.qnaData || []),
            { ...payload.qData },
          ],
          score: payload.score,
        },
      };

    case types.RESET_QUIZ:
      return { ...state, [payload.qIndex]: {} };

    default:
      return state;
  }
};

export default QuizReducer;
