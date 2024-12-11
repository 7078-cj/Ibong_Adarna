import React, { useState } from 'react';

function MultipleChoice({ question, answer, choices,onCorrect }) {
  const [selectedChoice, setSelectedChoice] = useState(null); 
  const [submitted, setSubmitted] = useState(false); 
  const [isCorrect, setIsCorrect] = useState(false);

  const handleChoiceChange = (choice) => {
    setSelectedChoice(choice);
  };

  const handleSubmit = () => {
    if (selectedChoice == answer) {
      setIsCorrect(selectedChoice === answer);
      onCorrect(selectedChoice === answer)
      
    } else {
      alert('wrong answer!');
    }
  };

  return (
    <div style={{ margin: '20px', padding: '20px', border: '1px solid #ccc' }}>
      <h2>{question}</h2>
      <div>
        {choices.map((choice, index) => (
          <div key={index}>
            <label>
              <input
                type="radio"
                name="multipleChoice"
                value={choice}
                onChange={() => handleChoiceChange(choice)}
                
              />
              {choice}
            </label>
          </div>
        ))}
      </div>
      {!submitted && (
        <button onClick={handleSubmit} style={{ marginTop: '10px' }}>
          Submit
        </button>
      )}
      
    </div>
  );
}

export default MultipleChoice;