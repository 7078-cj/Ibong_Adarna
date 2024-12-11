import React from 'react'
import Chapter from '../ChapterComponent/Chapter'

function Chapter11({user,num}) {
  return (
    <div>
         <Chapter
        user={user}
        fibQestion={"Bagama't naghihirap, hindi nakalimutan ni Don Juan ang __________ ng kanyang ama, ang inang labis niyang pinanabikan, at ang bayang kaniyang sinilangan."}
        fibAnswer={"kalagayan"}
        mcQuestion={'Ano ang tanging pinagkukunan ng pag-asa ni Don Juan?'}
        mcChoices={['Ang kanyang mga kapatid','Ang panalangin','Ang Ibong Adarna','Ang kanyang lakas']}
        mcAnswer={'Ang panalangin'}
        fourPics={['https://i.pinimg.com/236x/df/b5/d4/dfb5d42d2d0a1026b7509c377771b44a.jpg', 
         'https://i.pinimg.com/236x/54/a5/7c/54a57cccb89a0c8e7ed9746a273aba91.jpg',
         'https://i.pinimg.com/736x/af/82/4f/af824f0f10171b0c3524b78aeed8d9a1.jpg',
         'https://i.pinimg.com/236x/9b/e4/b5/9be4b55065e1934d3b88f8136e1a4afb.jpg',]}
        fourPicsAnswer={'panalangin'}
        summary={'asdadadsasd 2222222'}

         />
    </div>
  )
}

export default Chapter11