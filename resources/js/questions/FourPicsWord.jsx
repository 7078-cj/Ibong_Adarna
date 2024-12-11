import React, { useState } from 'react';

function FourPicsWord({ pictures, answer,onCorrect }) {
  const [userGuess, setUserGuess] = useState(''); // Track the user's input
  const [isCorrect, setIsCorrect] = useState(null); // Feedback on the answer (true/false/null)

  const handleInputChange = (event) => {
    setUserGuess(event.target.value);
  };

  const handleSubmit = () => {
    if (userGuess.trim().toLowerCase() === answer.toLowerCase()) {
      setIsCorrect(true);
      onCorrect(true)
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h2>Guess the Word!</h2>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px' }}>
        {pictures.map((pic, index) => (
          <img
            key={index}
            src={pic}
            alt={`Clue ${index + 1}`}
            style={{ width: '150px', height: '150px', objectFit: 'cover', border: '1px solid #ccc' }}
          />
        ))}
      </div>
      <div style={{ marginTop: '20px' }}>
        <input
          type="text"
          value={userGuess}
          onChange={handleInputChange}
          placeholder="Enter your guess"
          style={{
            padding: '10px',
            fontSize: '16px',
            width: '200px',
            textAlign: 'center',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
        />
        <button
          onClick={handleSubmit}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            marginLeft: '10px',
            cursor: 'pointer',
            borderRadius: '4px',
            border: 'none',
            backgroundColor: '#28a745',
            color: 'white',
          }}
        >
          Submit
        </button>
      </div>
      {isCorrect !== null && (
        <div style={{ marginTop: '20px', fontWeight: 'bold', fontSize: '18px' }}>
          {isCorrect ? (
            <span style={{ color: 'green' }}>Correct! The answer is "{answer}".</span>
          ) : (
            <span style={{ color: 'red' }}>Incorrect! Try again.</span>
          )}
        </div>
      )}
    </div>
  );
}

export default FourPicsWord;
