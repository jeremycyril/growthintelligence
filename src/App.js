import React, { useState } from 'react';
import './App.css';

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const diagnosticQuestions = [
    {
      id: 'activation_cliff',
      question: "What percentage of users complete their first meaningful action within 24 hours?",
      options: ['Less than 20%', '20-40%', '40-60%', '60-80%', 'Over 80%'],
      why: "Reveals the Activation Cliff - users who sign up but never truly start"
    },
    {
      id: 'value_moment',
      question: "How long does it take for a new user to experience your core value?",
      options: ['Under 5 minutes', '5-30 minutes', '30-60 minutes', '1-7 days', 'Over a week'],
      why: "Uncovers Time-to-Value Lag - the #1 predictor of churn"
    }
  ];

  const handleAnswer = (answer) => {
    const newAnswers = { ...answers, [diagnosticQuestions[currentStep].id]: answer };
    setAnswers(newAnswers);

    if (currentStep < diagnosticQuestions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResults(true);
    }
  };

  if (showResults) {
    return (
      <div className="App">
        <h1>Your Growth Blockers</h1>
        <p>Analysis complete! Building full insights...</p>
      </div>
    );
  }

  const currentQ = diagnosticQuestions[currentStep];

  return (
    <div className="App">
      <h1>Growth Intelligence Diagnostic</h1>
      <div>
        <h2>{currentQ.question}</h2>
        <p style={{color: '#666'}}>{currentQ.why}</p>
        {currentQ.options.map((option, idx) => (
          <button 
            key={idx}
            onClick={() => handleAnswer(option)}
            style={{
              display: 'block',
              width: '300px',
              margin: '10px auto',
              padding: '10px',
              cursor: 'pointer'
            }}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
