import * as types from "../types";

export const updateQuiz = (payload) => ({
  type: types.UPDATE_QUIZ,
  payload,
});

export const addQuestion = (payload) => ({
  type: types.ADD_QUESTION,
  payload,
});

export const resetQuiz = (payload) => ({
  type: types.RESET_QUIZ,
  payload,
});

export const updateConfig = (payload) => ({
  type: types.UPDATE_CONFIG,
  payload,
});
