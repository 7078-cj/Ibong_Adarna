import React from 'react'
import Chapter from '../ChapterComponent/Chapter'

import image1 from '../../assets/chapterImage/chapter12/1.jpg'
import image2 from '../../assets/chapterImage/chapter12/2.jpg'
import image3 from '../../assets/chapterImage/chapter12/3.jpg'
import image4 from '../../assets/chapterImage/chapter12/4.jpg'

function Chapter12({user,num}) {
  return (
    <div>
         <Chapter
        user={user}
        fibQestion={"Natagpuan ng matandang ermitanyo si Don Juan na nakahandusay sa libis ng _____."}
        fibAnswer={"bundok"}
        mcQuestion={'Ano ang ginawa ng matandang ermitanyo upang matulungan si Don Juan?'}
        mcChoices={['Tinulungan siya tumayo','Pinagaling ang mga sugat ni Don Juan','Inalok siya ng pagkain','Pinaalis siya sa bundok']}
        mcAnswer={'Pinagaling ang mga sugat ni Don Juan'}
        fourPics={[image1, image2, image3, image4,]}
        fourPicsAnswer={'pinagaling'}
        summary={'asdadadsasd 2222222'}

         />
    </div>
  )
}

export default Chapter12