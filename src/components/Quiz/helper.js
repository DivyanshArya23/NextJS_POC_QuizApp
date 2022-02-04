export const DECIMAL_PLACES = 2;
export const MIN_OPERAND = 1;
export const MAX_OPERAND = 15;
export const OPERATORS = ["+", "-", "*", "/"];

export const quizStages = {
  STARTPAGE: "startPage",
  INPROGRESS: "inProgress",
  RESULT: "result",
};

export const generateQnA = ({ maxValue, operators }) => {
  const operand1 = Math.floor(Math.random() * (maxValue + 1));
  let operand2 = Math.floor(Math.random() * (maxValue + 1));

  const length = operators.length;
  const operatorIndex = Math.floor(Math.random() * length);
  const operator = operators[operatorIndex];
  if (operator === "/") {
    while (operand2 === 0) {
      operand2 = Math.floor(Math.random() * (maxValue + 1));
    }
  }
  const questionString = `${operand1} ${operator} ${operand2}`;
  let answer = String(eval(questionString));
  if (operator === "/" && answer.includes(".")) {
    answer = eval(questionString).toFixed(DECIMAL_PLACES);
  }

  return { question: questionString, answer };
};

export function checkAnswer({ userAnswer, currentQuestion }) {
  return String(userAnswer) == String(currentQuestion.answer);
}
