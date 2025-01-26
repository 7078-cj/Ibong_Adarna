import React from 'react';
import Navbar from '../../components/Navbar';
import readPage from '../../assets/readPageBG.gif'; // Import the gif

function ReadPage({ onRead, summary, user }) {

  const formattedSummary = summary.split("\n").map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));

  return (
    <>
      <Navbar user={user} />
      <div
        className="bg-cover bg-center bg-no-repeat h-screen font-pixelify-sans font-bold flex justify-center items-center p-6"
        style={{ backgroundImage: `url(${readPage})`, backgroundSize: 'cover' }} 
      >
        <div className="flex justify-center items-start space-x-6 flex-col">
          {/* Increased container size */}
          <div className="w-[1000px] h-[500px] max-h-[600px] p-8 bg-gradient-to-b from-[#6F4F37] to-[#3E2723] rounded-lg shadow-lg text-white text-xl z-10 overflow-y-auto">
            <p>{formattedSummary}</p>
          </div>

          <div className="flex justify-center items-center w-full mt-6">
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
