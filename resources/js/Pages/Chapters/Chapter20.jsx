import React from 'react'
import Chapter from '../ChapterComponent/Chapter'

import image1 from '../../assets/chapterImage/chapter20/1.jpg'
import image2 from '../../assets/chapterImage/chapter20/2.jpg'
import image3 from '../../assets/chapterImage/chapter20/3.jpg'
import image4 from '../../assets/chapterImage/chapter20/4.jpg'

function Chapter20({user,num}) {
  return (
    <div>
         <Chapter
        user={user}
        fibQestion={"Habang sila ay nag-uusap, nakaramdam sila ng __________ ang buong paligid, na nagdulot ng takot sa kanilang dalawa."}
        fibAnswer={"pagyanig"}
        mcQuestion={'Bakit minamadali ni Prinsesa Leonora na paalisin si Don Juan?'}
        mcChoices={['Dahil ayaw niya ng bisita','Dahil takot siyang dumating ang serpyente','Dahil gusto niyang mag-isa','Dahil may ibang tao siyang pinapakita']}
        mcAnswer={'Dahil takot siyang dumating ang serpyente'}
        fourPics={[image1, image2, image3, image4,]}
        fourPicsAnswer={'pagibig'}
        summary={'asdadadsasd 2222222'}

         />
    </div>
  )
}

export default Chapter20