import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import QuizComponent from './QuizComponent';
import QuestionCountComponent from './QuestionCountComponent';

const App = () => {
  const [step, setStep] = useState('questionCount');

  const handleNext = () => {
    setStep('quiz');
  };

  return (
    <Provider store={store}>
      {step === 'questionCount' ? (
        <QuestionCountComponent onNext={handleNext} />
      ) : (
        <QuizComponent />
      )}
    </Provider>
  );
};

export default App;