import React, { useState } from 'react'
import backgroundImage from '../assets/lvlpageBG.gif'
import chapterBtn from '../assets/tile1.png'
import NavBar from '../components/Navbar'

function ChapterPage({user}) {
    const [currentPage, setCurrentPage] = useState(1);
    const chaptersPerPage = 10;
  
    const totalChapters = 46;
    const totalPages = Math.ceil(totalChapters / chaptersPerPage);
  
    const paginatedChapters = [];
    for (let i = (currentPage - 1) * chaptersPerPage; i < currentPage * chaptersPerPage; i++) {
      if (i < totalChapters) {
        paginatedChapters.push(i + 1);
      }
    }
  
    const handlePageChange = (page) => {
      setCurrentPage(page);
    };
  
    return (
        <>
        <NavBar user={user}/>
      <div className="bg-cover bg-center bg-no-repeat h-screen font-pixelify-sans font-bold flex flex-col justify-center items-center gap-20" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className='flex flex-row gap-6'>
          {paginatedChapters.map((chapterNumber) => (
            <a key={chapterNumber} href={`/chapter/${chapterNumber}`}>
              <button className="relative inline-flex items-center gap-2 px-6 py-3 font-semibold text-blue-50 bg-gradient-to-tr from-blue-900/30 via-blue-900/70 to-blue-900/30 ring-4 ring-blue-900/20 rounded-full overflow-hidden hover:opacity-90 transition-opacity before:absolute before:top-4 before:left-1/2 before:-translate-x-1/2 before:w-[100px] before:h-[100px] before:rounded-full before:bg-gradient-to-b before:from-blue-50/10 before:blur-xl">
                {`CHAPTER ${chapterNumber}`}
              </button>
            </a>
          ))}
        </div>
  
        {/* Pagination controls */}
        <div className="pagination">
          <button className='relative inline-flex items-center gap-2 px-6 py-3 font-semibold text-blue-50 bg-gradient-to-tr from-blue-900/30 via-blue-900/70 to-blue-900/30 ring-4 ring-blue-900/20 rounded-full overflow-hidden hover:opacity-90 transition-opacity before:absolute before:top-4 before:left-1/2 before:-translate-x-1/2 before:w-[100px] before:h-[100px] before:rounded-full before:bg-gradient-to-b before:from-blue-50/10 before:blur-xl' 
          disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)}>Previous</button>
          <span>{currentPage}   
   of {totalPages}</span>
          <button className='relative inline-flex items-center gap-2 px-6 py-3 font-semibold text-blue-50 bg-gradient-to-tr from-blue-900/30 via-blue-900/70 to-blue-900/30 ring-4 ring-blue-900/20 rounded-full overflow-hidden hover:opacity-90 transition-opacity before:absolute before:top-4 before:left-1/2 before:-translate-x-1/2 before:w-[100px] before:h-[100px] before:rounded-full before:bg-gradient-to-b before:from-blue-50/10 before:blur-xl' 
          disabled={currentPage === totalPages} onClick={() => handlePageChange(currentPage + 1)}>Next</button>
        </div>
      </div>
      </>
    );
}

export default ChapterPage