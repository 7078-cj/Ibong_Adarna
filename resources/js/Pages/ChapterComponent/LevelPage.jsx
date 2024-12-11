import React, { useState } from 'react'


import NavBar from '../../components/Navbar'
import MultipleChoice from '../../questions/MultipleChoice'
import FIB from '../../questions/FIB'
import FourPicsWord from '../../questions/FourPicsWord'
import WordBank from '../../questions/WordBank'

function LevelPage({user,fibQestion,fibAnswer,mcQuestion,mcChoices=[],mcAnswer,fourPics=[],fourPicsAnswer,num}) {
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
    'https://via.placeholder.com/150/FF5733', // Replace with actual image URLs
    'https://via.placeholder.com/150/33FF57',
    'https://via.placeholder.com/150/3357FF',
    'https://via.placeholder.com/150/57FF33',
  ];
  const correctAnswer = 'Color';

  const [currentStep, setCurrentStep] = useState(0);
  
  

  // Define steps as an array of components
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
    {allCorrect ? <NavBar user={user}/> : <></>}
    <div className="bg-cover bg-center bg-no-repeat h-screen font-pixelify-sans font-bold flex flex-col justify-center items-center gap-20" >
    
    
    
    
    {allCorrect ? <div>
      <h1>all are correct</h1>
      <a  href={`/chapter/${parseInt(num)+1}`}>go to Chapter{parseInt(num)+1}</a>
      </div>
    :<div className="app-container">
      {steps[currentStep]}
    </div>
    }
    </div>
    </>
  )
}

export default LevelPage