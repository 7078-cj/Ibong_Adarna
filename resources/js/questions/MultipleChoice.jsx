import React, { useState } from 'react';

function MultipleChoice({ question, answer, choices,onCorrect }) {
  const [selectedChoice, setSelectedChoice] = useState(null); 
  const [submitted, setSubmitted] = useState(false); 
  const [isCorrect, setIsCorrect] = useState(false);

  const handleChoiceChange = (choice) => {
    setSelectedChoice(choice);
  };

  const handleSubmit = () => {
    if (selectedChoice) {
      setIsCorrect(selectedChoice === answer);
      onCorrect(selectedChoice === answer)
      setSubmitted(true);
    } else {
      alert('Please select an answer!');
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
                disabled={submitted} // Disable input after submission
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
      {submitted && (
        <div style={{ marginTop: '10px', fontWeight: 'bold' }}>
          {isCorrect ? 'Correct!' : `Incorrect. The correct answer is "${answer}".`}
        </div>
      )}
    </div>
  );
}

export default MultipleChoice;