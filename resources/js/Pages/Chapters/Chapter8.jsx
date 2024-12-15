import React from 'react'
import Chapter from '../ChapterComponent/Chapter'

import image1 from '../../assets/chapterImage/chapter8/1.jpg'
import image2 from '../../assets/chapterImage/chapter8/2.jpg'
import image3 from '../../assets/chapterImage/chapter8/3.jpg'
import image4 from '../../assets/chapterImage/chapter8/4.jpg'

function Chapter8({user,num}) {
  return (
    <div>
         <Chapter
        user={user}
        fibQestion={"Si Don Pedro at Don Diego ay na __________ matapos mabuhusan ni Don Juan ng tubig mula sa balon."}
        fibAnswer={"buhay"}
        mcQuestion={'Ano ang ginawa ni Don Juan upang buhayin ang kanyang mga kapatid na naging bato?'}
        mcChoices={['Binuhusan ng tubig','Inihaplos ng langis','Binanggit ang kanilang pangalan','Pinuno ng mga dasal']}
        mcAnswer={'Binuhusan ng tubig'}
        fourPics={[image1, image2, image3, image4,]}
        fourPicsAnswer={'handaan'}
        summary={'asdadadsasd 2222222'}

         />
    </div>
  )
}

export default Chapter8