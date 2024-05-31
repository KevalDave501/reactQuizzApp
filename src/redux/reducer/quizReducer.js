import { SET_QUIZ } from '../actions/quizActions';

const initialState = {
  title: '',
  questions: []
};

const quizReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_QUIZ:
      return {
        ...state,
        title: action.payload.title,
        questions: action.payload.questions
      };
    default:  
      return state;
  }
};

export default quizReducer;