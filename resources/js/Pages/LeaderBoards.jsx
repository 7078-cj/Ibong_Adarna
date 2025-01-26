import React, { useEffect, useState } from 'react'
import NavBar from '../components/Navbar'
import backgroundImage from '../assets/leaderboardBG.gif'
// import { FaCrown } from 'react-icons/fa';
function LeaderBoards({allUser,user}) {

  const [users,setUsers] = useState(allUser)

  console.log(users)
  
  useEffect(()=>{
    const sortedUsers = [...users].sort((a, b) => b.level_data.user_level-a.level_data.user_level);
    setUsers(sortedUsers);
  },[])
  
  
  
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
            {users.map((player) => (
              <div
                
                className={`flex items-center justify-between ${user.name==player.name ? "bg-teal-400":"bg-teal-800"} bg-opacity-80 border-b border-gray-300 rounded-lg p-4 shadow-2xl `}
              >
                {/* Avatar (left side) */}
                {/* <div className="w-16 h-16 flex-shrink-0">
                  <img
                    src={player.avatar}
                    alt={player.name}
                    className="w-full h-full rounded-full border-2 border-gray-500"
                  />
                </div> */}
  
                {/* Content inside the box */}
                <div className="flex flex-grow items-center justify-between ml-4">
                  {/* Rank and crown icon for rank 1 */}
                  <div className="flex items-center space-x-2 justify-start">
                    {/* {player.rank === 1 && (
                      <FaCrown className="text-yellow-500 text-2xl" />
                    )} */}
                    {/* <span className="font-bold text-2xl text-white">{player.rank}</span> */}
                  </div>
  
                  {/* Name (centered) */}
                  <div className="flex-grow text-center flex flex-row gap-10 justify-between">
                    <span className="text-xl text-white">{player.name}</span>
                    <span className="text-xl text-white">{player.level_data.user_level}</span>
                  </div>
  
                  {/* Score */}
                  {/* <div className="text-xl text-white">{player.score}</div> */}
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