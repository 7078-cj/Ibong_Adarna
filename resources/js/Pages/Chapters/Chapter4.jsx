import React from 'react'
import Chapter from '../ChapterComponent/Chapter'

function Chapter4({user,num}) {
  return (
    <div>
         <Chapter
        user={user}
        fibQestion={"Si Don Pedro ay naging __________ matapos dumumi ang Ibong Adarna"}
        fibAnswer={"bato"}
        mcQuestion={'Ilang buwan ang paghahanap ni don Diego bago niya natagpuan ang Piedras Platas?'}
        mcChoices={['Anim na buwan','Apat na buwan','Limang buwan','Tatlong buwan']}
        mcAnswer={'Limang buwan'}
        fourPics={['https://i.pinimg.com/236x/1a/29/31/1a29316717f43c5e935d030fa693bdde.jpg', 
         'https://i.pinimg.com/236x/96/5b/1f/965b1f448cdcd491d8f4892f6b7f005d.jpg',
         'https://i.pinimg.com/236x/ad/05/7d/ad057deb83432de0f9e6ae8d339f498b.jpg',
         'https://i.pinimg.com/236x/0e/0c/c0/0e0cc0a9987ee1313aff439537ca396c.jpg',]}
        fourPicsAnswer={'tulog'}
        summary={'asdadadsasd 2222222'}

         />
    </div>
  )
}

export default Chapter4