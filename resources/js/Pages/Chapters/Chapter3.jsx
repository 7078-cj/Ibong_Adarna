import React from 'react'
import Chapter from '../ChapterComponent/Chapter'

import image1 from '../../assets/chapterImage/chapter3/1.jpg'
import image2 from '../../assets/chapterImage/chapter3/2.jpg'
import image3 from '../../assets/chapterImage/chapter3/3.jpg'
import image4 from '../../assets/chapterImage/chapter3/4.jpg'

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
        fourPics={[image1, image2, image3, image4,]}
        fourPicsAnswer={'lakbay'}
        summary={'asdadadsasd 2222222'}

         />
    </div>
  )
}

export default Chapter3