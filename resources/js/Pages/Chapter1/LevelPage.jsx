import React, { useState } from 'react'
import backgroundImage from '../../assets/lvlpageBG2.gif'
import chapterBtn from '../../assets/tile1.png'
import NavBar from '../../components/Navbar'
import MultipleChoice from '../../questions/MultipleChoice'
import FIB from '../../questions/FIB'
import FourPicsWord from '../../questions/FourPicsWord'

function LevelPage({user}) {
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
      question={'Saan naganap ang kwento?'} 
      answer={'Berbanya'} 
      choices={['Albania',' Kardavia','Berbanya','Dystopia']}
      onCorrect={handleMcCorrect}
      />

    <FIB  question="The capital of France is _____."
        answer="Paris"
        onCorrect={handleFibCorrect}/>

    <FourPicsWord pictures={pictures}
     answer={correctAnswer}
     onCorrect={setFourPicsWordIsCorrect} />
    
    {allCorrect ? <h1>all are correct</h1>:<></>}
    </div>
    </>
  )
}

export default LevelPage