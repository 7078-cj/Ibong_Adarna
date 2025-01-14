import React from 'react';
import Navbar from '../../components/Navbar';
import readPage from '../../assets/readPageBG.gif'; // Import the gif

function ReadPage({ onRead, summary, user }) {
  return (
    <>
      <Navbar user={user} />
      <div
        className="bg-cover bg-center bg-no-repeat h-screen font-pixelify-sans font-bold flex justify-center items-center p-6"
        style={{ backgroundImage: `url(${readPage})`, backgroundSize: 'cover' }} // Set the gif as the background
      >
        {/* Container for the text box and button */}
        <div className="flex justify-center items-center space-x-6">
          {/* Coffee-colored text box with scroll functionality */}
          <div className="w-[400px] h-[80vh] max-h-[650px] p-6 bg-gradient-to-b from-[#6F4F37] to-[#3E2723] rounded-lg shadow-lg overflow-y-auto text-white text-lg z-10">
            {/* Scrollable text */}
            <p>{summary}</p>
          </div>

          {/* Continue button positioned to the right of the text box and centered vertically */}
          <div className="flex justify-center items-center h-full">
            <button
              className="relative inline-flex items-center gap-2 px-8 py-4 font-semibold text-white bg-gradient-to-tr from-green-700/30 via-green-800/70 to-green-700/30 ring-4 ring-green-800/20 rounded-full overflow-hidden hover:opacity-90 transition-opacity before:absolute before:top-4 before:left-1/2 before:-translate-x-1/2 before:w-[120px] before:h-[120px] before:rounded-full before:bg-gradient-to-b before:from-green-200/10 before:blur-xl hover:scale-105 hover:text-yellow-400 hover:underline"
              onClick={() => { onRead(true); }}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReadPage;
