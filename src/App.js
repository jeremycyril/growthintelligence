import React, { useState } from 'react';
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [diagnosticStep, setDiagnosticStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  // Diagnostic questions (your existing code)
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
    const newAnswers = { ...answers, [diagnosticQuestions[diagnosticStep].id]: answer };
    setAnswers(newAnswers);

    if (diagnosticStep < diagnosticQuestions.length - 1) {
      setDiagnosticStep(diagnosticStep + 1);
    } else {
      setShowResults(true);
    }
  };

  // Home/Landing Page
  if (currentView === 'home') {
    return (
      <div className="App" style={{ minHeight: '100vh', backgroundColor: '#f3f4f6', padding: '40px 20px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ fontSize: '3em', marginBottom: '20px', color: '#1f2937' }}>
            Growth Intelligence
          </h1>
          <p style={{ fontSize: '1.5em', color: '#6b7280', marginBottom: '40px' }}>
            Find the hidden blockers limiting your business growth
          </p>

          <div style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            {/* Primer Card */}
            <div style={{
              backgroundColor: 'white',
              padding: '30px',
              borderRadius: '12px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              textAlign: 'left'
            }}>
              <h2 style={{ color: '#1f2937', marginBottom: '10px' }}>Growth Primer</h2>
              <p style={{ color: '#6b7280', marginBottom: '20px' }}>
                Perfect for businesses without analytics. Get your baseline metrics and discover what to track first.
              </p>
              <p style={{ color: '#059669', fontWeight: 'bold', marginBottom: '20px' }}>
                ✓ 7 minutes • ✓ No data required • ✓ Free report
              </p>
              <button
                onClick={() => setCurrentView('primer')}
                style={{
                  width: '100%',
                  padding: '12px 24px',
                  backgroundColor: '#3b82f6',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
              >
                Start Growth Primer →
              </button>
            </div>

            {/* Diagnostic Card */}
            <div style={{
              backgroundColor: 'white',
              padding: '30px',
              borderRadius: '12px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              textAlign: 'left'
            }}>
              <h2 style={{ color: '#1f2937', marginBottom: '10px' }}>Full Diagnostic</h2>
              <p style={{ color: '#6b7280', marginBottom: '20px' }}>
                For businesses with existing data. Deep-dive analysis of your growth blockers.
              </p>
              <p style={{ color: '#059669', fontWeight: 'bold', marginBottom: '20px' }}>
                ✓ AI-powered • ✓ Instant insights • ✓ Action plan
              </p>
              <button
                onClick={() => setCurrentView('diagnostic')}
                style={{
                  width: '100%',
                  padding: '12px 24px',
                  backgroundColor: '#8b5cf6',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
              >
                Start Full Diagnostic →
              </button>
            </div>
          </div>

          <p style={{ marginTop: '40px', color: '#6b7280' }}>
            Built for Kingston businesses by a Kingston founder
          </p>
        </div>
      </div>
    );
  }

  // Show Primer
  if (currentView === 'primer') {
    // Uncomment this line after creating GrowthPrimer.js
    // return <GrowthPrimer />;
    
    // For now, show placeholder
    return (
      <div className="App">
        <h1>Growth Primer</h1>
        <p>Primer component will go here</p>
        <button onClick={() => setCurrentView('home')}>Back to Home</button>
      </div>
    );
  }

  // Show Diagnostic (your existing diagnostic code)
  if (currentView === 'diagnostic') {
    if (showResults) {
      return (
        <div className="App">
          <h1>Your Growth Blockers</h1>
          <p>Analysis complete! Building full insights...</p>
          <button onClick={() => {
            setCurrentView('home');
            setDiagnosticStep(0);
            setAnswers({});
            setShowResults(false);
          }}>
            Back to Home
          </button>
        </div>
      );
    }

    const currentQ = diagnosticQuestions[diagnosticStep];

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
        <button 
          onClick={() => setCurrentView('home')}
          style={{ marginTop: '20px' }}
        >
          Back to Home
        </button>
      </div>
    );
  }
}

export default App;