import React, { useState } from 'react';
import backgroundImage from '../assets/lvlpageBG.gif';
import NavBar from '../components/Navbar';

function ChapterPage({ user, lvlData }) {
    const [currentPage, setCurrentPage] = useState(1);
    const chaptersPerPage = 10;

    const totalChapters = lvlData!=46 ? lvlData : 46;
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
            <NavBar user={user} />
            <div
                className="bg-cover bg-center bg-no-repeat h-screen font-pixelify-sans font-bold flex flex-col justify-center items-center gap-10"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >
                {/* Chapter Buttons Container */}
                <div className="flex flex-wrap justify-center gap-4 px-4">
                    {paginatedChapters.map((chapterNumber, index) => (
                        <div key={chapterNumber}>
                            <a href={`/chapter/${chapterNumber}`}>
                                <button
                                    className={`w-40 h-16 text-lg font-semibold ${
                                        chapterNumber >= lvlData
                                            ? 'text-amber-100 bg-amber-700 bg-opacity-90 hover:bg-amber-500 hover:bg-opacity-100' 
                                            : 'text-gray-400 bg-amber-900'
                                    } rounded-lg shadow-lg`}
                                    style={{
                                        transition: 'background-color 0.3s, transform 0.3s',
                                    }}
                                    
                                >
                                    {`Chapter ${chapterNumber}`}
                                </button>
                            </a>
                        </div>
                    ))}
                </div>

                {/* Pagination Controls */}
                <div className="flex items-center gap-6">
                    <button
                        className="px-6 py-3 font-medium text-amber-100 bg-gray-800 bg-opacity-90 rounded-md shadow-md hover:bg-gray-700 hover:bg-opacity-100 disabled:bg-gray-600 disabled:opacity-50"
                        disabled={currentPage === 1}
                        onClick={() => handlePageChange(currentPage - 1)}
                        style={{
                            transition: 'background-color 0.3s, transform 0.3s',
                        }}
                    >
                        Previous
                    </button>
                    <span className="text-xl text-amber-100">{`${currentPage} of ${totalPages}`}</span>
                    <span className="text-xl text-amber-100">{`Cleared: ${lvlData-1}/46`}</span>
                    <button
                        className="px-6 py-3 font-medium text-amber-100 bg-gray-800 bg-opacity-90 rounded-md shadow-md hover:bg-gray-700 hover:bg-opacity-100 disabled:bg-gray-600 disabled:opacity-50"
                        disabled={currentPage === totalPages}
                        onClick={() => handlePageChange(currentPage + 1)}
                        style={{
                            transition: 'background-color 0.3s, transform 0.3s',
                        }}
                    >
                        Next
                    </button>
                </div>
            </div>
        </>
    );
}

export default ChapterPage;
