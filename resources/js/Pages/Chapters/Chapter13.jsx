import React from 'react'
import Chapter from '../ChapterComponent/Chapter'

import image1 from '../../assets/chapterImage/chapter13/1.jpg'
import image2 from '../../assets/chapterImage/chapter13/2.jpg'
import image3 from '../../assets/chapterImage/chapter13/3.jpg'
import image4 from '../../assets/chapterImage/chapter13/4.jpg'

function Chapter13({user,num}) {
  return (
    <div>
         <Chapter
        user={user}
        fibQestion={"Si Don Juan ay __________ sa hari upang humingi ng tawad para sa kanyang mga kapatid."}
        fibAnswer={"lumuhod"}
        mcQuestion={'Ano ang ginawa ng Ibong Adarna habang nagpapalit ng kulay ng balahibo?'}
        mcChoices={['Kumanta at inilahad ang buong katotohanan','Tumawa at nagbigay ng payo','Nagpahinga','Lumipad palayo']}
        mcAnswer={'Kumanta at inilahad ang buong katotohanan'}
        fourPics={[image1, image2, image3, image4,]}
        fourPicsAnswer={'kasiyahan'}
        summary={'asdadadsasd 2222222'}

         />
    </div>
  )
}

export default Chapter13