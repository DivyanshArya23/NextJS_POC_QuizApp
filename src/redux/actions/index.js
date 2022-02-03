import * as types from "../types";

export const updateQuiz = (payload) => ({
  type: types.UPDATE_QUIZ,
  payload,
});

export const addQuestion = (payload) => ({
  type: types.ADD_QUESTION,
  payload,
});
