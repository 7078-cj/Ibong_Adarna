import React from 'react'
import Chapter from '../ChapterComponent/Chapter'

import image1 from '../../assets/chapterImage/chapter7/1.jpg'
import image2 from '../../assets/chapterImage/chapter7/2.jpg'
import image3 from '../../assets/chapterImage/chapter7/3.jpg'
import image4 from '../../assets/chapterImage/chapter7/4.jpg'

function Chapter6({user,num}) {
  return (
    <div>
         <Chapter
        user={user}
        fibQestion={"Si Don Juan ay nagkaroon ng __________ sugat sa kanyang palad mula sa mga awit ng ibon."}
        fibAnswer={"pitong"}
        mcQuestion={' Ano ang ginawa ni Don Juan upang manatiling gising habang umaawit ang Ibong Adarna?'}
        mcChoices={['Uminom ng tubig','Hinati ang kanyang palad','Kumain ng prutas','Nagdasal']}
        mcAnswer={'Hinati ang kanyang palad'}
        fourPics={[image1, image2, image3, image4,]}
        fourPicsAnswer={'huli'}
        summary={'asdadadsasd 2222222'}

         />
    </div>
  )
}

export default Chapter6