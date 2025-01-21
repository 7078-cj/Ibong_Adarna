import React from 'react'
import Chapter from '../ChapterComponent/Chapter'

import image1 from '../../assets/chapterImage/chapter15/1.jpg'
import image2 from '../../assets/chapterImage/chapter15/2.jpg'
import image3 from '../../assets/chapterImage/chapter15/3.jpg'
import image4 from '../../assets/chapterImage/chapter15/4.jpg'

function Chapter15({user,num}) {
  return (
    <div>
         <Chapter
        user={user}
        fibQestion={"Paglaon, narating nila ang kabundukan ng _____ kung saan naroon si Don Juan."}
        fibAnswer={"armenya"}
        mcQuestion={'Bakit umalis si Don Juan mula sa kaharian ng Berbanya?'}
        mcChoices={['Dahil gusto niyang maglakbay','Dahil batid niyang kailangan niyang magtago matapos magpabaya sa Ibong Adarna','Dahil pinagalitan siya ng hari','Dahil hindi siya gusto ng kanyang mga kapatid']}
        mcAnswer={'Dahil batid niyang kailangan niyang magtago matapos magpabaya sa Ibong Adarna'}
        fourPics={[image1, image2, image3, image4,]}
        fourPicsAnswer={'paglisan'}
        summary={'Madaling araw pa lang ay umalis na si Don Juan upang tumakas sa kaniyang ama. Batid niyang kailangan niyang magtago dahil sa pagpapabaya sa Ibong Adarna. Paggising ng hari ay agad itong nagtungo sa silid na kinaroroonan ng ibon. Nagulat ito nang matagpuang wala na ang ibon sa hawla. Nang ipinatawag ng hari ang kaniyang mga anak dalawa lamang ang humarap sa kaniya. Nagtangkang magsinungaling muli sina Don Pedro at Don Diego ngunit hindi sila agad pinaniwalaan ng hari. Ipinahanap ni Don Fernando si Don Juan ngunit sawi itong matagpuan. Ayon sa dalawa pang prinsipe ay nagtaksil si Don Juan at handa silang umalis upang hanapin ang nagtatagong bunsong kapatid. Naglakbay sila kung saan-saan ngunit hindi nila natagpuan si Don Juan. Paglaon ay narating nila ang kabundukan ng Armenya kung saan naroon si Don Juan.'}
        num={num}
         />
    </div>
  )
}

export default Chapter15