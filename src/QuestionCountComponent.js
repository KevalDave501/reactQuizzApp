import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setQuiz } from './redux/actions/quizActions';
import { quizData } from './utills/quizData';

const QuestionCountComponent = ({ onNext }) => {
  const [questionCount, setQuestionCount] = useState(0);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setQuestionCount(Number(e.target.value));
  };

  const handleSubmit = () => {
    const questions = quizData.questions.slice(0, questionCount);
    dispatch(setQuiz({ title: quizData.title, questions }));
    onNext();
  };

  return (
    <div className="container">
      <h1>Quiz Setup</h1>
      <div className="form-group">
        <label htmlFor="questionCount">How many questions do you want?</label>
        <input
          className="form-control"
          type="number"
          id="questionCount"
          value={questionCount}
          onChange={handleInputChange}
        />
      </div>
      <button className="btn btn-primary" onClick={handleSubmit}>Next</button>
    </div>
  );
};

export default QuestionCountComponent;