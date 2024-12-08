import React, { useState } from 'react'


import NavBar from '../../components/Navbar'
import MultipleChoice from '../../questions/MultipleChoice'
import FIB from '../../questions/FIB'
import FourPicsWord from '../../questions/FourPicsWord'

function LevelPage({user,fibQestion,fibAnswer,mcQuestion,mcChoices=[],mcAnswer,fourPics=[],fourPicsAnswer}) {
  const [mcIsCorrect, setMcIsCorrect] = useState(false);
  const [fibIsCorrect, setFibIsCorrect] = useState(false);
  const [fourPicsWordIsCorrect, setFourPicsWordIsCorrect] = useState(false);
  const allCorrect = mcIsCorrect && fibIsCorrect && fourPicsWordIsCorrect;

  const handleMcCorrect = (newCorrectValue) => {
    setMcIsCorrect(newCorrectValue);
  };
  const handleFibCorrect = (newCorrectValue) => {
    setFibIsCorrect(newCorrectValue);
  };
  const handleFourPicsWordCorrect = (newCorrectValue) => {
    setFourPicsWordIsCorrect(newCorrectValue);
  };
  
  
  const pictures = [
    'https://via.placeholder.com/150/FF5733', // Replace with actual image URLs
    'https://via.placeholder.com/150/33FF57',
    'https://via.placeholder.com/150/3357FF',
    'https://via.placeholder.com/150/57FF33',
  ];
  const correctAnswer = 'Color';

  return (
    <>
    
    <div className="bg-cover bg-center bg-no-repeat h-screen font-pixelify-sans font-bold flex flex-col justify-center items-center gap-20" >
      
    <MultipleChoice 
      question={mcQuestion} 
      answer={mcAnswer} 
      choices={mcChoices}
      onCorrect={handleMcCorrect}
      />

    <FIB  question={fibQestion}
        answer={fibAnswer}
        onCorrect={handleFibCorrect}/>

    <FourPicsWord pictures={fourPics}
     answer={fourPicsAnswer}
     onCorrect={setFourPicsWordIsCorrect} />
    
    {allCorrect ? <h1>all are correct</h1>:<></>}
    </div>
    </>
  )
}

export default LevelPage