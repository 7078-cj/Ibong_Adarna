import React from 'react'
import NavBar from '../components/Navbar'
import backgroundImage from '../assets/backgroundImage.gif'
import WordBank from '../questions/WordBank'

function HeroPage({user}) {
    console.log(user)
    
  return (
    <>
    <NavBar user={user} />
    <div className="bg-cover bg-center bg-no-repeat h-screen font-pixelify-sans font-bold" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <header className='flex flex-col justify-between items-center '>
            <h1 className='text-9xl mt-[250px] text-slate-100'>Dunong:Ibong Adarna</h1>
            <div className='mt-[100px] flex flex-row gap-10'>
                <a href="/chapters">
                    <button class="cursor-pointer uppercase bg-white bg-opacity-5 rounded-lg px-10 py-2 text-slate-300 text-5xl active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#F44336,-0.5rem_-0.5rem_#00BCD4] transition">
                        Start
                    </button>
                </a>
                <a href="/profile">
                    <button class="cursor-pointer uppercase bg-white bg-opacity-5 rounded-lg px-10 py-2 text-slate-300 text-5xl active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#F44336,-0.5rem_-0.5rem_#00BCD4] transition">
                        Profile
                    </button>
                </a>
            </div>
            <WordBank/>
        </header>
        
        
    
    </div>
    </>
    
  )
}

export default HeroPage