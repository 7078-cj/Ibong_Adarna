import React from 'react'
import backgroundImage from '../../assets/lvlpageBG2.gif'
import chapterBtn from '../../assets/tile1.png'
import NavBar from '../../components/Navbar'

function LevelPage() {
  return (
    <>
    <NavBar/>
    <div className="bg-cover bg-center bg-no-repeat h-screen font-pixelify-sans font-bold flex flex-col justify-center items-center gap-20" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <section className='h-[400px] w-[600px] bg-slate-50 bg-opacity-10 flex flex-col justify-center items-center text-lg'>
        <div>
          Saan naganap ang kwento?
        </div>
      
      </section>

      <section className=' w-[600px] bg-slate-50 bg-opacity-10 flex flex-col justify-center items-center gap-5 p-5'>
      <button className='bg-slate-300 p-5 rounded-lg'>A. Albania</button> 
      
      <button className='bg-slate-300 p-5 rounded-lg'>B. Kardavia</button>
      
      <button className='bg-slate-300 p-5 rounded-lg'>C. Berbanya</button>
      
      <button className='bg-slate-300 p-5 rounded-lg'>D. Dystopia</button>
      </section>

      
      
    </div>
    </>
  )
}

export default LevelPage