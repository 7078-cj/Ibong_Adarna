import React from 'react'
import Chapter from '../ChapterComponent/Chapter'

function Chapter3({user,num}) {
  return (
    <div>
         <Chapter
        user={user}
        fibQestion={"Ang __________ ay ang kumikinang na puno na pinaniniwalaang tahanan ng ibon."}
        fibAnswer={"piedras platas"}
        mcQuestion={'Ilang buwan naglakbay si Don Pedro upang hanapin ang Bundok ng Tabor?'}
        mcChoices={['Isang linggo','Tatlong buwan','Anim na buwan','Isang taon']}
        mcAnswer={'Tatlong buwan'}
        fourPics={['https://i.pinimg.com/236x/37/84/77/378477da3eb1dfd4a402b8f5a2b4ab06.jpg', 
         'https://i.pinimg.com/236x/8c/48/f5/8c48f581ea9ff0578667a4756ee85439.jpg',
         'https://i.pinimg.com/236x/cd/e4/24/cde424042f7f1fdefc3629c9c299e579.jpg',
         'https://i.pinimg.com/236x/be/ba/cd/bebacdbd21d4ceecba81f497e30081f9.jpg',]}
        fourPicsAnswer={'paglalakbay'}
        summary={'asdadadsasd 2222222'}

         />
    </div>
  )
}

export default Chapter3