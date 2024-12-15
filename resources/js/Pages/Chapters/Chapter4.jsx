import React from 'react'
import Chapter from '../ChapterComponent/Chapter'

import image1 from '../../assets/chapterImage/chapter4/1.jpg'
import image2 from '../../assets/chapterImage/chapter4/2.jpg'
import image3 from '../../assets/chapterImage/chapter4/3.jpg'
import image4 from '../../assets/chapterImage/chapter4/4.jpg'

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
        fourPics={[image1, image2, image3, image4,]}
        fourPicsAnswer={'tulog'}
        summary={'asdadadsasd 2222222'}

         />
    </div>
  )
}

export default Chapter4