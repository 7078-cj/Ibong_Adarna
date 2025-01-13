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
        summary={'Nag-utos ang ermitanyo kay Don Juan na kumuha ng banga at punuin ito ng tubig para ibuhos sa mga kapatid niyang naging bato. Agad namang sumunod si Don Juan sa pinag-uutos ng ermitanyo. Sumalok siya ng tubig at nagtungo sa kaniyang mga kapatid. Unang binuhusan ni Don Juan ang batong si Don Pedro at agad itong nabuhay. Tumayo si Don Pedro at niyakap ang bunsong kapatid. Sumunod namang binuhusan nito si Don Diego at naging tao itong muli. Nagyakapan ang tatlong prinsipe at labis na nagalak dahil sa wakas ay gagaling na ang kanilang ama dahil sa nahuli ni Don Juan ang Ibong Adarna. Muling nagtungo ang tatlo sa dampa ng ermitanyo at doo’y nagkaroon ng piging.'}

         />
    </div>
  )
}

export default Chapter8