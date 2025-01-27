import React, { useState } from 'react';

function MultipleChoice({ question, answer, choices, onCorrect }) {
  const [selectedChoice, setSelectedChoice] = useState(null); 
  const [submitted, setSubmitted] = useState(false); 
  const [isCorrect, setIsCorrect] = useState(false);

  const handleChoiceChange = (choice) => {
    setSelectedChoice(choice);
  };

  const handleSubmit = () => {
    if (selectedChoice == answer) {
      setIsCorrect(selectedChoice === answer);
      onCorrect(selectedChoice === answer);
    } else {
      alert('Mali. Subukan muli!');
    }
  };

  return (
    <div className="p-5 max-w-2xl mx-auto my-8 text-center border border-gray-300 rounded-lg shadow-lg bg-gradient-to-b from-teal-100 via-green-100 to-white">
      <h2 className="text-3xl mb-5 text-teal-700">{question}</h2>
      <div className="text-green-800">
        {choices.map((choice, index) => (
          <div key={index} className="mb-2">
            <label className="block">
              <input
                type="radio"
                name="multipleChoice"
                value={choice}
                onChange={() => handleChoiceChange(choice)}
                className="mr-2"
              />
              {choice}
            </label>
          </div>
        ))}
      </div>
      {!submitted && (
        <button
          onClick={handleSubmit}
          className="bg-teal-600 text-white py-3 px-6 rounded-md cursor-pointer text-base font-sans transition-all duration-200 ease-in-out hover:bg-teal-500 active:bg-teal-700 active:scale-95 focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
          Isumite
        </button>
      )}
    </div>
  );
}

export default MultipleChoice;