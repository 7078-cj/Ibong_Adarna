import React, { useState } from 'react';
import NavBar from '../../components/Navbar';
import MultipleChoice from '../../questions/MultipleChoice';
import FIB from '../../questions/FIB';
import FourPicsWord from '../../questions/FourPicsWord';
import { Inertia } from '@inertiajs/inertia';

function LevelPage({ user, fibQestion, fibAnswer, mcQuestion, mcChoices = [], mcAnswer, fourPics = [], fourPicsAnswer, num, setRead,lvl }) {
  const [mcIsCorrect, setMcIsCorrect] = useState(false);
  const [fibIsCorrect, setFibIsCorrect] = useState(false);
  const [fourPicsWordIsCorrect, setFourPicsWordIsCorrect] = useState(false);
  const allCorrect = mcIsCorrect && fibIsCorrect && fourPicsWordIsCorrect;

  console.log(lvl)
  const handleLevelUp = (num) => {
    Inertia.post('/levelup', { "chapter": num });
  };

  

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
            <h1 className="text-4xl mb-6">Lahat ng sagot ay tama!</h1>

            
             { lvl>=46 ? window.location.href = '/congrats':(<a
              href={`/chapter/${parseInt(num) + 1}`}
              className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md"
              onClick={(e) => {
                e.preventDefault(); // Prevent the default navigation
                handleLevelUp(num); // Execute the level-up function
                window.location.href = `/chapter/${parseInt(num) + 1}`; // Manually navigate to the next chapter
              }}
            >Pumunta sa Kabanata {parseInt(num) + 1}</a>) }
            
          </div>
        ) : (
          <div className="">
            {steps[currentStep]}
          </div>
        )}

        {/* Go Back to Read Page Button - Positioned Beside Left Side */}
        <div className="absolute top-1/2 left-10 transform -translate-y-1/2">
          <button
            onClick={() => Inertia.visit(`/chapter/${num}`)} // Inertia navigation to the Read Page
            className="bg-teal-700 hover:bg-teal-500 text-white py-2 px-4 rounded-md shadow-lg flex items-center space-x-2 transition-all"
          >
            {/* Left Arrow Symbol */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            <span onClick={()=>{setRead(false)}}>Basahin muli ang buod</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default LevelPage;
