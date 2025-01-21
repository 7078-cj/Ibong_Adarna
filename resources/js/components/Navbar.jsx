
import React, { useState, useEffect, useRef } from 'react';
import { Inertia } from '@inertiajs/inertia';

function Navbar({user}) {

  
  

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Function to toggle the NavDrawer visibility
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleLogout = () => {
    Inertia.post('/logout-user', {}, {
      onSuccess: () => {
          window.location.href='/login'; // Force a full reload
      }
    });
    
  };

  return (
    
    <div className="bg-gray-900 text-white">
      
    <div className="flex items-center justify-between px-12 py-6">
      <div className="flex items-center">
        {/* Hamburger Button to open NavDrawer */}
        <button
          onClick={toggleDrawer}
          className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:shadow-outline shadow-lg transition transform hover:scale-105 active:shadow-md active:translate-x-0.5 active:translate-y-0.5"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        {/* Logo and Title */}
        <h1 className="ml-4 text-2xl font-bold">Welcome {user.name}</h1>
      </div>

      <div className="flex space-x-8">
        
          {user ? <a href="/login"  onClick={handleLogout} className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:shadow-outline shadow-lg transition transform hover:scale-105 active:shadow-[0.5rem_-0.5rem_rgba(244,67,54,0.5),-0.5rem_0.5rem_rgba(0,188,212,0.5)] active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_rgba(244,67,54,0.5),-0.5rem_-0.5rem_rgba(0,188,212,0.5)]">
            Logout
          </a>: <><a href="/login">
            <button className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:shadow-outline shadow-lg transition transform hover:scale-105 active:shadow-[0.5rem_-0.5rem_rgba(244,67,54,0.5),-0.5rem_0.5rem_rgba(0,188,212,0.5)] active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_rgba(244,67,54,0.5),-0.5rem_-0.5rem_rgba(0,188,212,0.5)]">
              SIGN IN
            </button>
          </a>

          <a href="/register">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:shadow-outline shadow-lg transition transform hover:scale-105 active:shadow-[0.5rem_-0.5rem_rgba(244,67,54,0.5),-0.5rem_0.5rem_rgba(0,188,212,0.5)] active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_rgba(244,67,54,0.5),-0.5rem_-0.5rem_rgba(0,188,212,0.5)]">
              SIGN UP
            </button>

          </a>
          </>
          }
          
        
        
        
        

        
      </div>
    </div>

    {/* NavDrawer Overlay */}
    <div
      className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10 ${
        isDrawerOpen ? 'block' : 'hidden'
      }`}
      onClick={toggleDrawer}
    ></div>

    {/* Drawer Content */}
    <div
      className={`fixed top-0 left-0 w-64 h-full bg-gray-800 text-white p-4 transition-transform transform ${
        isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
      } z-20`}
    >
      <h2 className="text-xl font-bold mb-6">Menu</h2>
      <ul>
        <li>
          <a href="/" className="block py-2 px-4 hover:bg-gray-700">
            Home
          </a>
        </li>
        <li>
          <a href="/chapters" className="block py-2 px-4 hover:bg-gray-700">
            Chapters
          </a>
        </li>
        <li>
          <a href="/profile" className="block py-2 px-4 hover:bg-gray-700">
            Profile
          </a>
        </li>
        <li>
          <a href="/leaderboard" className="block py-2 px-4 hover:bg-gray-700">
            Leaderboard
          </a>
        </li>
      </ul>
    </div>
  </div>
);
  
}

export default Navbar