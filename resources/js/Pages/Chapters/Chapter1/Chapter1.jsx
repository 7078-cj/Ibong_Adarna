import React from 'react'
import LevelPage from './LevelPage'
import ReadPage from './ReadPage'
import Navbar from '../../../components/Navbar'

function Chapter1({user}) {
  return (
    <>
    <Navbar user={user}/>
    <div className=''>
        
        <LevelPage user={user}/>
    </div>
    </>
  )
}

export default Chapter1