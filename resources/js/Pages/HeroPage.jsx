import React from 'react';
import NavBar from '../components/Navbar';
import backgroundImage from '../assets/backgroundImage.gif';

function HeroPage({ user }) {
    console.log(user);

    return (
        <>
            <NavBar user={user} />
            <div
                className="bg-cover bg-center bg-no-repeat h-screen font-pixelify-sans font-bold flex flex-col justify-center items-center"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >
                <header className="text-center">
                    <h1 className="text-8xl text-slate-100 mb-16">Ibong Adarna: Ang Paglalakbay</h1>
                    <div className="flex justify-center items-center gap-10">
                        <a href="/chapters">
                            <button className="cursor-pointer uppercase bg-white bg-opacity-5 rounded-lg px-10 py-2 text-slate-300 text-5xl active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#F44336,-0.5rem_-0.5rem_#00BCD4] transition">
                                Start
                            </button>
                        </a>
                        <a href="/profile">
                            <button className="cursor-pointer uppercase bg-white bg-opacity-5 rounded-lg px-10 py-2 text-slate-300 text-5xl active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#F44336,-0.5rem_-0.5rem_#00BCD4] transition">
                                Profile
                            </button>
                        </a>
                    </div>
                </header>
            </div>
        </>
    );
}

export default HeroPage;
