import React, { useState } from 'react';
import './App.css';

const GuessAnswer = ({ onAnswerCheck, closeModal }) => {
  const [answer, setAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);
  const [isIncorrect, setIsIncorrect] = useState(false);
  const [key, setKey] = useState(0);   


  const checkAnswer = () => {
    const normalizedAnswer = answer.toUpperCase();
    const correctness = normalizedAnswer === 'FROZEN';
    setIsCorrect(correctness);
    setIsIncorrect(!correctness);
    setKey(prevKey => prevKey + 1); 
    onAnswerCheck(correctness);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <div className="answer-container">
          <input
            key={key} 
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className={`answer-input ${isCorrect ? 'correct' : isIncorrect ? 'incorrect' : ''}`}
          />
          <button onClick={checkAnswer} className="check-answer-btn">
            Check Answer
          </button>
        </div>
      </div>
    </div>
  );
};

export default GuessAnswer;
