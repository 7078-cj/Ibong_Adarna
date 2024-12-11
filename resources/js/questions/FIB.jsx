import React, { useState } from 'react';

function FIB({ question, answer , onCorrect }) {
    const [userAnswer, setUserAnswer] = useState('');
    const [feedback, setFeedback] = useState('');
    

    // Function to handle answer submission
    const handleSubmit = () => {
        if (userAnswer.trim().toLowerCase() === answer.trim().toLowerCase()) {
            setFeedback('Correct!');
            //if answer is correct
           
            onCorrect(true)

        } else {
            setFeedback('Try Again!');
        }
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>Fill in the Blanks</h1>
            <p>
                {/* Render question with a blank */}
                {question.split('_____').map((part, index) => (
                    <React.Fragment key={index}>
                        {part}
                        {index === 0 && (
                            <input
                                type="text"
                                value={userAnswer}
                                onChange={(e) => setUserAnswer(e.target.value)}
                                style={{
                                    border: '1px solid #ccc',
                                    borderRadius: '4px',
                                    padding: '5px',
                                    marginLeft: '5px',
                                    marginRight: '5px',
                                }}
                            />
                        )}
                    </React.Fragment>
                ))}
            </p>

            {/* Submit Button */}
            <button
                onClick={handleSubmit}
                style={{
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    padding: '10px 20px',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }}
            >
                Submit
            </button>

            {/* Feedback */}
            {feedback && (
                <p
                    style={{
                        marginTop: '10px',
                        fontWeight: 'bold',
                        color: feedback === 'Correct!' ? 'green' : 'red',
                    }}
                >
                    {feedback}
                </p>
            )}
        </div>
    );
}

export default FIB;
