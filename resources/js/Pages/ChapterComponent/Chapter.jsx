import React, { useState } from 'react'
import LevelPage from './LevelPage'
import ReadPage from './ReadPage'
import Navbar from '../../components/Navbar'

function Chapter({user, fibQestion, fibAnswer ,mcQuestion ,mcChoices ,mcAnswer ,fourPics ,fourPicsAnswer ,summary}) {
  const [read , setRead] = useState(false)
  console.log(read)

  return (
    <>
    <Navbar user={user}/>
    <div className=''>
        {read ?   <LevelPage user={user}
                             fibQestion={fibQestion}
                             fibAnswer={fibAnswer}
                             mcQuestion={mcQuestion}
                             mcChoices={mcChoices}
                             mcAnswer={mcAnswer}
                             fourPics={fourPics}
                             fourPicsAnswer={fourPicsAnswer}
                             />:<ReadPage onRead={setRead}
                                summary={summary}/>}
       
        
    </div>
    </>
  )
}

export default Chapter