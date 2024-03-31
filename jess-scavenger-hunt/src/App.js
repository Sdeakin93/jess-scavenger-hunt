import React, { useState } from 'react';
import VideoPlayer from './VideoPlayer';
import GuessAnswer from './GuessAnswer';
import Celebration from './Celebration';
import './App.css';

const App = () => {
  const [showModal, setShowModal] = useState(false); // State to manage modal visibility
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false); // State to manage answer correctness

  // Function to open the modal
  const openModal = () => {
    setShowModal(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setShowModal(false);
  };

  // Function to handle answer check
  const handleAnswerCheck = (isCorrect) => {
    setIsAnswerCorrect(isCorrect);
    if (isCorrect) {
      setShowModal(false); // Close the modal if the answer is correct
    }
  };

  return (
    <div className="App">
      <VideoPlayer />
      <button onClick={openModal}>Guess the Answer</button>
      {showModal && <GuessAnswer onAnswerCheck={handleAnswerCheck} closeModal={closeModal} />}
      {isAnswerCorrect && <Celebration />}
    </div>
  );
};

export default App;
