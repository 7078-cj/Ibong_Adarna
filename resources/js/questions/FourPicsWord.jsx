import React, { useState } from 'react';

function FourPicsWord({ pictures, answer, onCorrect }) {
  const [userGuess, setUserGuess] = useState(''); // Track the user's input
  const [isCorrect, setIsCorrect] = useState(null); // Feedback on the answer (true/false/null)

  const handleInputChange = (event) => {
    setUserGuess(event.target.value);
  };

  const handleSubmit = () => {
    if (userGuess.trim().toLowerCase() === answer.toLowerCase()) {
      setIsCorrect(true);
      onCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto my-8 text-center border-2 border-teal-300 rounded-lg shadow-lg bg-gradient-to-b from-teal-200 via-teal-100 to-white">
      <h2 className="text-3xl mb-5 text-teal-800 font-semibold">Hulaan ang salita!</h2>
      <div className="flex justify-center flex-wrap gap-6 mb-5">
        {pictures.map((pic, index) => (
          <img
            key={index}
            src={pic}
            alt={`Clue ${index + 1}`}
            className="w-32 h-32 object-cover border-2 border-teal-300 rounded-md"
          />
        ))}
      </div>
      <div className="mb-5">
        <input
          type="text"
          value={userGuess}
          onChange={handleInputChange}
          placeholder="Enter your guess"
          className="px-5 py-3 text-lg text-center border-2 border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
        <button
          onClick={handleSubmit}
          className="bg-teal-600 text-white py-3 px-6 rounded-md cursor-pointer text-base font-sans transition-all duration-200 ease-in-out hover:bg-teal-500 active:bg-yellow-400 active:scale-95 focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
          Submit
        </button>
      </div>
      {isCorrect !== null && (
        <div className="mt-5 font-semibold text-xl">
          {isCorrect ? (
            <span className="text-teal-700">Tama! Ang sagot ay "{answer}".</span>
          ) : (
            <span className="text-red-600">Mali! Subukan muli.</span>
          )}
        </div>
      )}
    </div>
  );
}

export default FourPicsWord;
