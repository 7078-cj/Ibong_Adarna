import React from 'react'
import Chapter from '../ChapterComponent/Chapter'

function Chapter14({user,num}) {
  return (
    <div>
         <Chapter
        user={user}
        fibQestion={"Si Don Diego ay madalas _____ habang nagbabantay sa Ibong Adarna."}
        fibAnswer={"antukin"}
        mcQuestion={'Ano ang nangyari habang natutulog si Don Juan?'}
        mcChoices={['Tinulungan siya ng mga kawal','Sinamantala ng dalawang kapatid na pakawalan ang Ibong Adarna','Nagdasal siya para sa kaligtasan ng Ibong Adarna','Dumating ang hari at binantayan ang ibon']}
        mcAnswer={'Sinamantala ng dalawang kapatid na pakawalan ang Ibong Adarna'}
        fourPics={['https://i.pinimg.com/236x/35/4e/8a/354e8a7e33fbddc59bcff5c26bdb868a.jpg', 
         'https://i.pinimg.com/236x/13/c0/55/13c05527c8390f4b531dbd8d95ed4099.jpg',
         'https://i.pinimg.com/236x/0f/a0/3f/0fa03fd699982d342c00110a66282237.jpg',
         'https://i.pinimg.com/236x/d1/1d/da/d11dda939330e7de365a87a9e10f27b0.jpg',]}
        fourPicsAnswer={'pagpapalaya'}
        summary={'asdadadsasd 2222222'}

         />
    </div>
  )
}

export default Chapter14