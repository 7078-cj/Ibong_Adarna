import React, { useState, useEffect } from 'react';

function FourPicsWord({ pictures, answer, onCorrect }) {
  const [userGuess, setUserGuess] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);
  const [jumbledWord, setJumbledWord] = useState('');

  useEffect(() => {
    const shuffleWord = (word) => {
      const shuffledArray = word.split('').sort(() => Math.random() - 0.5);
      return shuffledArray.join('').toUpperCase();
    };

    setJumbledWord(shuffleWord(answer));
  }, [answer]);

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
    <div className="p-6 max-w-3xl mx-auto text-center border-4 border-teal-300 rounded-lg shadow-xl bg-gradient-to-b from-teal-300 via-teal-100 to-white">
      <h2 className="text-3xl mb-4 text-teal-800 font-semibold">Hulaan ang Salita!</h2>
      <div className="flex justify-center flex-wrap gap-4 mb-4">
        {pictures.map((pic, index) => (
          <img
            key={index}
            src={pic}
            alt={`Clue ${index + 1}`}
            className="w-36 h-36 object-cover border-4 border-teal-300 rounded-md"
          />
        ))}
      </div>
      <div className="text-xl font-bold mb-4 tracking-widest">{jumbledWord.split('').join(' ')}</div>
      <div className="mb-4 flex flex-wrap justify-center items-center gap-3">
        <input
          type="text"
          value={userGuess}
          onChange={handleInputChange}
          placeholder="Ilagay ang sagot mo"
          className="px-4 py-3 text-lg text-center border-2 border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
        <button
          onClick={handleSubmit}
          className="bg-teal-600 text-white py-3 px-6 rounded-md cursor-pointer text-lg font-sans transition-all duration-200 ease-in-out hover:bg-teal-500 active:bg-yellow-400 active:scale-95 focus:outline-none focus:ring-2 focus:ring-teal-500"
        >
          Isumite
        </button>
      </div>
      {isCorrect !== null && (
        <div className="font-bold text-xl">
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
