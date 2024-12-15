import React from 'react'
import Chapter from '../ChapterComponent/Chapter'

import image1 from '../../assets/chapterImage/chapter2/1.jpg'
import image2 from '../../assets/chapterImage/chapter2/2.jpg'
import image3 from '../../assets/chapterImage/chapter2/3.jpg'
import image4 from '../../assets/chapterImage/chapter2/4.jpg'

function Chapter2({user,num}) {
  return (
    <div>
         <Chapter
        user={user}
        fibQestion={"Ang ibong adarna ay matatagpuan sa bundok ng __________"}
        fibAnswer={"tabor"}
        mcQuestion={'Ano ang nangyari kay Don Fernando?'}
        mcChoices={['sumigla','nagkasakit','napagod','nagalak']}
        mcAnswer={'nagkasakit'}
        fourPics={[image1, image2, image3, image4,]}
        fourPicsAnswer={'awit'}
        summary={'asdadadsasd 2222222'}

         />
    </div>
  )
}

export default Chapter2