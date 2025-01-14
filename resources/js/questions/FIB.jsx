import React, { useState } from "react";

function FIB({ question, answer, onCorrect }) {
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = () => {
    if (userAnswer.trim().toLowerCase() === answer.trim().toLowerCase()) {
      setFeedback("Tama!");
      onCorrect(true);
    } else {
      setFeedback("Mali. Subukan muli!");
    }
  };

  return (
    <div className="p-5 max-w-2xl mx-auto my-8 text-center border border-gray-300 rounded-lg shadow-lg bg-gradient-to-b from-teal-100 via-green-100 to-white">
      <h1 className="text-3xl mb-5 text-teal-700">Punan ang patlang.</h1>
      <p className="text-xl mb-5 text-green-800">
        {question.split("_____").map((part, index) => (
          <React.Fragment key={index}>
            {part}
            {index === 0 && (
              <input
                type="text"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                className="border-2 border-teal-500 rounded-lg p-2 text-base mx-2 w-3/5 outline-none bg-teal-50 text-green-800 shadow-inner text-center"
              />
            )}
          </React.Fragment>
        ))}
      </p>

      <button
        onClick={handleSubmit}
        className="bg-teal-600 text-white py-3 px-6 rounded-md cursor-pointer text-base font-sans transition-all duration-200 ease-in-out hover:bg-teal-500 active:bg-yellow-400 active:scale-95 focus:outline-none focus:ring-2 focus:ring-teal-500"
      >
        Submit
      </button>

      {feedback && (
        <p className={`mt-5 font-bold text-xl ${feedback === "Correct!" ? "text-teal-700" : "text-red-600"}`}>
          {feedback}
        </p>
      )}
    </div>
  );
}

export default FIB;
