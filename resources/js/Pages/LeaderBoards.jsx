import React from 'react'
import NavBar from '../components/Navbar'
import backgroundImage from '../assets/leaderboardBG.gif'
// import { FaCrown } from 'react-icons/fa';
function LeaderBoards({user}) {

  const leaderboardData = [
    { rank: 1, name: 'Juan Dela Cruz', score: 1500, avatar: 'https://i.pinimg.com/originals/53/7f/e0/537fe02726aca7adba01bce85492d22e.gif' },
    { rank: 2, name: 'Ceejay Santos', score: 1400, avatar: 'https://i.pinimg.com/736x/e2/37/1d/e2371d38b8e5e0afe3d4795d9dadfda1.jpg' },
    { rank: 3, name: 'Christian', score: 1300, avatar: 'https://i.pinimg.com/736x/e2/37/1d/e2371d38b8e5e0afe3d4795d9dadfda1.jpg' },
    { rank: 4, name: 'Marga_ux', score: 1200, avatar: 'https://i.pinimg.com/736x/7b/fd/26/7bfd26d11295149443c613f4be59a3ae.jpg' },
    { rank: 5, name: 'Aljon Ken', score: 1100, avatar: 'https://i.pinimg.com/736x/7b/fd/26/7bfd26d11295149443c613f4be59a3ae.jpg' },
    { rank: 6, name: 'Mary Ann', score: 1050, avatar: 'https://i.pinimg.com/736x/7b/fd/26/7bfd26d11295149443c613f4be59a3ae.jpg' },
    { rank: 7, name: 'Freddy', score: 1025, avatar: 'https://i.pinimg.com/736x/e2/37/1d/e2371d38b8e5e0afe3d4795d9dadfda1.jpg' },
    { rank: 8, name: 'David Harris', score: 1000, avatar: 'https://i.pinimg.com/736x/e2/37/1d/e2371d38b8e5e0afe3d4795d9dadfda1.jpg' },
    { rank: 9, name: 'Linda Clark', score: 980, avatar: 'https://i.pinimg.com/736x/7b/fd/26/7bfd26d11295149443c613f4be59a3ae.jpg' },
    { rank: 10, name: 'Tom Lewis', score: 950, avatar: 'https://i.pinimg.com/736x/e2/37/1d/e2371d38b8e5e0afe3d4795d9dadfda1.jpg' },
  ];

  
  return (
    
      <>
       <NavBar user={user}/>
      <div
        className="min-h-screen py-6 px-12"
        style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundColor: '#34D399' }} 
      >
        <h1 className="text-6xl font-extrabold text-center text-white mb-12 bg-gradient-to-r 0 p-4 bg-teal-800 rounded-3xl shadow-xl">Leaderboard</h1>
        <div className="overflow-x-auto bg-transparent mx-auto" style={{ width: '50%' }}>
          <div className="flex flex-col space-y-4">
            {leaderboardData.map((player) => (
              <div
                key={player.rank}
                className={`flex items-center justify-between bg-teal-800 bg-opacity-80 border-b border-gray-300 rounded-lg p-4 shadow-2xl `}
              >
                {/* Avatar (left side) */}
                <div className="w-16 h-16 flex-shrink-0">
                  <img
                    src={player.avatar}
                    alt={player.name}
                    className="w-full h-full rounded-full border-2 border-gray-500"
                  />
                </div>
  
                {/* Content inside the box */}
                <div className="flex flex-grow items-center justify-between ml-4">
                  {/* Rank and crown icon for rank 1 */}
                  <div className="flex items-center space-x-2 justify-start">
                    {/* {player.rank === 1 && (
                      <FaCrown className="text-yellow-500 text-2xl" />
                    )} */}
                    <span className="font-bold text-2xl text-white">{player.rank}</span>
                  </div>
  
                  {/* Name (centered) */}
                  <div className="flex-grow text-center">
                    <span className="text-xl text-white">{player.name}</span>
                  </div>
  
                  {/* Score */}
                  <div className="text-xl text-white">{player.score}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </>
  )
}

export default LeaderBoards