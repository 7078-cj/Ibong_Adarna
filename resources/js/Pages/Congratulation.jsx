import React, { useEffect, useRef } from 'react';
import backgroundMusic from '../assets/congratsBGM.mp3';

function Congratulation() {
  const audioRef = useRef(null);
    
  useEffect(() => {
            const audio = audioRef.current;
            if (audio) {
            audio.volume = 0.1; // Set volume to 30%
            }
        }, []);

  return (
    <div className="credit-container">
      <div className="crawl">
        <h1 className="tracking-wider text-yellow-400 uppercase transform -skew-x-12 crawl-title text-7xl">
          Maligayang Pagkumpleto!
          <br/>
          <br/>
        </h1>
        <div className="text-white crawl-content">
          <h2 className="mt-4 text-4xl font-semibold tracking-wide text-yellow-400 uppercase transform -skew-x-6">
            Ang Aming Team
            <br />
            <br />
          </h2>
          <h2 className="text-4xl tracking-wide text-yellow-400 uppercase transform -skew-x-6">
            BSIS2 Group 1
            <br />
            <br />
          </h2>
          <h2 className="text-3xl font-semibold tracking-wider text-yellow-400 uppercase transform -skew-x-6">
            Pinuno:
          </h2>
          <p className="text-2xl tracking-wide text-white transform -skew-x-6">
            Ceejay Santos
            <br />
            <br />
          </p>

          <p className="text-3xl tracking-wide text-yellow-400 uppercase transform -skew-x-6">
            Mga Miyembro:
          </p>
          <p className="text-2xl tracking-wide transform -skew-x-6">Eva Anggana</p>
          <p className="text-2xl tracking-wide transform -skew-x-6">Margarette Calumpiano</p>
          <p className="text-2xl tracking-wide transform -skew-x-6">Bianca Erquilang</p>
          <p className="text-2xl tracking-wide transform -skew-x-6">Aljon Fernandez</p>
          <p className="text-2xl tracking-wide transform -skew-x-6">
            Amber Rosana
            <br />
            <br />
          </p>

          <p className="text-2xl tracking-wide text-white transform -skew-x-6">
            Special Thanks to: Christian Tomas
            <br />
            <br />
          </p>
          <p className="text-2xl tracking-wide transform -skew-x-6">
            Maraming Salamat at Nawa'y Nag-enjoy Kayo!
            <br />
            <br />
            <br />
          </p>

          <a href="/">
            <button className="px-10 py-2 text-3xl tracking-widest text-yellow-500 uppercase transition-all duration-300 transform -skew-x-6 bg-transparent border-2 border-yellow-500 rounded-lg cursor-pointer active:scale-95 hover:bg-yellow-500 hover:text-black">
              Bumalik sa Home
            </button>
          </a>
          <audio autoPlay loop className='hidden' ref={audioRef}>
                    <source src={backgroundMusic} type="audio/mp3" />
                    Your browser does not support the audio element.
                </audio>
        </div>
      </div>
      <div className="stars"></div>
      
    </div>
  );
}

export default Congratulation;
