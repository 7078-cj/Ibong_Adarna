import React, { useEffect, useRef, useState } from 'react'
import LevelPage from './LevelPage'
import ReadPage from './ReadPage'
import Navbar from '../../components/Navbar'
import backgroundMusic from '../../assets/LevelPageBGM.mp3';

function Chapter({user, fibQestion, fibAnswer ,mcQuestion ,mcChoices ,mcAnswer ,fourPics ,fourPicsAnswer ,summary,num,lvl}) {
  const [read , setRead] = useState(false)
  const audioRef = useRef(null);
  
      useEffect(() => {
          const audio = audioRef.current;
          if (audio) {
          audio.volume = 0.1; // Set volume to 30%
          }
      }, []);

  return (
    <>
    
    <div className=''>
        {read ?   <LevelPage user={user}
                             fibQestion={fibQestion}
                             fibAnswer={fibAnswer}
                             mcQuestion={mcQuestion}
                             mcChoices={mcChoices}
                             mcAnswer={mcAnswer}
                             fourPics={fourPics}
                             fourPicsAnswer={fourPicsAnswer}
                             num={num}
                             setRead={setRead}
                             lvl={lvl}
                             
                            
                             />:<ReadPage onRead={setRead}
                                summary={summary}
                                user={user}/>}

        <audio autoPlay loop className='hidden' ref={audioRef}>
                            <source src={backgroundMusic} type="audio/mp3" />
                            Your browser does not support the audio element.
                        </audio>
       
        
    </div>
    </>
  )
}

export default Chapter