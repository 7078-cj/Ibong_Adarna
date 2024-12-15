import React from 'react'
import Chapter from '../ChapterComponent/Chapter'

import image1 from '../../assets/chapterImage/chapter11/1.jpg'
import image2 from '../../assets/chapterImage/chapter11/2.jpg'
import image3 from '../../assets/chapterImage/chapter11/3.jpg'
import image4 from '../../assets/chapterImage/chapter11/4.jpg'

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
        fourPics={[image1, image2, image3, image4,]}
        fourPicsAnswer={'panalangin'}
        summary={'asdadadsasd 2222222'}

         />
    </div>
  )
}

export default Chapter11