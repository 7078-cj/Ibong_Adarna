import React from 'react'

import backgroundImage from '../../assets/readpageBG.gif'
import scroll from '../../assets/ReadScroll.png'

function ReadPage() {
  return (
    <>
    <div className="bg-cover bg-center bg-no-repeat h-screen font-pixelify-sans font-bold flex flex-row justify-center items-center p-20" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div>
            <img className='h-screen w-[1100px]'src={scroll}></img>
            <p className='absolute  h-[500px] w-[300px] top-20 mt-[150px] right-20 mr-[800px] z-10 flex flex-wrap flex-col p-10 justify-center items-center overflow-scroll text-wrap bg-slate-400 bg-opacity-10'>
            aasdadada

            </p>
        </div>
     <a href="/levelpage"><button className="relative inline-flex items-center gap-2 px-6 py-3 font-semibold text-blue-50 bg-gradient-to-tr from-blue-900/30 via-blue-900/70 to-blue-900/30 ring-4 ring-blue-900/20 rounded-full overflow-hidden hover:opacity-90 transition-opacity before:absolute before:top-4 before:left-1/2 before:-translate-x-1/2 before:w-[100px] before:h-[100px] before:rounded-full before:bg-gradient-to-b before:from-blue-50/10 before:blur-xl">
            Continue
            </button></a>   
    </div>
    
    </>
  )
}

export default ReadPage