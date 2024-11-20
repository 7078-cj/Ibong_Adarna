import React, { useState, useEffect, useRef } from 'react';

const NavigationPage = ({ show, onClose }) => {
  const pageRef = useRef();

  // Close the NavigationPage when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (pageRef.current && !pageRef.current.contains(event.target)) {
        onClose(); // Close navigation page if clicked outside
      }
    };

    if (show) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    // Clean up the event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [show, onClose]);

  if (!show) return null; // Do not render if the `show` prop is false

  return (
    <div
      ref={pageRef}
      className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
    >
      <div className="bg-white p-8 rounded shadow-lg w-80">
        <h2 className="text-2xl font-bold">Navigation Page</h2>
        
        <nav className="mt-6">
          <ul className="space-y-4">
            <li>
              <a
                href="/"
                className="text-lg text-blue-500 hover:text-blue-700"
                onClick={onClose}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/chapters"
                className="text-lg text-blue-500 hover:text-blue-700"
                onClick={onClose}
              >
                Chapters
              </a>
            </li>
            <li>
              <a
                href="/profile"
                className="text-lg text-blue-500 hover:text-blue-700"
                onClick={onClose}
              >
                Profile
              </a>
            </li>
            <li>
              <a
                href="/leaderboard"
                className="text-lg text-blue-500 hover:text-blue-700"
                onClick={onClose}
              >
                Leaderboard
              </a>
            </li>
          </ul>
        </nav>

        {/* Close button */}
        <button
          onClick={onClose}
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default NavigationPage;