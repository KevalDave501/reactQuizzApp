export const SET_QUIZ = 'SET_QUIZ';

export const setQuiz = (quizData) => {
  return {
    type: SET_QUIZ,
    payload: quizData
  };
};