import React from 'react';
import { useSelector } from 'react-redux';

const QuizComponent = () => {
  const quiz = useSelector(state => state.quiz);

  return (
    <div>
      <h1>{quiz.title}</h1>
      <ul>
        {quiz.questions.map(q => (
          <li key={q.id}>
            <p>{q.question}{q.answer}</p>
            {q.options && (
              <ul>
                {q.options.map(option => (
                  <li key={option}>{option}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuizComponent;