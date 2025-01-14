import React, { useState } from 'react';

import NavBar from '../../components/Navbar';
import MultipleChoice from '../../questions/MultipleChoice';
import FIB from '../../questions/FIB';
import FourPicsWord from '../../questions/FourPicsWord';

function LevelPage({ user, fibQestion, fibAnswer, mcQuestion, mcChoices = [], mcAnswer, fourPics = [], fourPicsAnswer, num }) {
  const [mcIsCorrect, setMcIsCorrect] = useState(false);
  const [fibIsCorrect, setFibIsCorrect] = useState(false);
  const [fourPicsWordIsCorrect, setFourPicsWordIsCorrect] = useState(false);
  const allCorrect = mcIsCorrect && fibIsCorrect && fourPicsWordIsCorrect;

  const handleMcCorrect = (newCorrectValue) => {
    setMcIsCorrect(newCorrectValue);
    setCurrentStep((prevStep) => prevStep + 1);
  };
  const handleFibCorrect = (newCorrectValue) => {
    setFibIsCorrect(newCorrectValue);
    setCurrentStep((prevStep) => prevStep + 1);
  };
  const handleFourPicsWordCorrect = (newCorrectValue) => {
    setFourPicsWordIsCorrect(newCorrectValue);
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const pictures = [
    'https://via.placeholder.com/150/FF5733',
    'https://via.placeholder.com/150/33FF57',
    'https://via.placeholder.com/150/3357FF',
    'https://via.placeholder.com/150/57FF33',
  ];
  const correctAnswer = 'Color';

  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    <MultipleChoice
      question={mcQuestion}
      answer={mcAnswer}
      choices={mcChoices}
      onCorrect={handleMcCorrect}
    />,
    <FIB
      question={fibQestion}
      answer={fibAnswer}
      onCorrect={handleFibCorrect}
    />,
    <FourPicsWord
      pictures={fourPics}
      answer={fourPicsAnswer}
      onCorrect={handleFourPicsWordCorrect}
    />,
  ];

  return (
    <>
      {allCorrect ? <NavBar user={user} /> : <></>}
      <div className="bg-cover bg-center bg-no-repeat h-screen font-pixelify-sans font-bold flex flex-col justify-center items-center gap-20"
        style={{ backgroundImage: 'url("https://i.pinimg.com/originals/b2/58/85/b258854e249c5d4673a5938b90b6bbf5.gif")' }}>

        {allCorrect ? (
          <div className="text-center p-6 bg-opacity-80 bg-black text-white rounded-xl shadow-2xl w-3/4 max-w-lg">
            <h1 className="text-4xl mb-6">All Answers are Correct!</h1>
            <a href={`/chapter/${parseInt(num) + 1}`} className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md">
              Go to Chapter {parseInt(num) + 1}
            </a>
          </div>
        ) : (
          <div className="p-5 mx-auto my-8 text-center border border-gray-300 rounded-lg shadow-lg bg-gradient-to-b from-teal-300 via-teal-400 to-teal-500 w-full lg:w-2/3 md:w-1/2 h-[30rem] sm:h-[28rem] overflow-auto flex justify-center items-center">
            {steps[currentStep]}
          </div>
        )}
      </div>
    </>
  );
}

export default LevelPage;
