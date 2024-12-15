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
        summary={'asdadadsasd 2222222'}

         />
    </div>
  )
}

export default Chapter15