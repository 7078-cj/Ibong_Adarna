import React from 'react'
import Chapter from '../ChapterComponent/Chapter'

import image1 from '../../assets/chapterImage/chapter6/1.jpg'
import image2 from '../../assets/chapterImage/chapter6/2.jpg'
import image3 from '../../assets/chapterImage/chapter6/3.jpg'
import image4 from '../../assets/chapterImage/chapter6/4.jpg'

function Chapter6({user,num}) {
  return (
    <div>
         <Chapter
        user={user}
        fibQestion={"Ayon sa ermitanyo, kailangan ni Don Juan na hiwain ang kanyang palad at pigaan ng _____ upang manatiling gising."}
        fibAnswer={"dayap"}
        mcQuestion={'Ano ang ibinigay ng ermitanyo kay Don Juan upang matulungan siya?'}
        mcChoices={['Isang gintong sintas','Isang kabayo','Isang espada','Isang lihim na mapa']}
        mcAnswer={'Isang gintong sintas'}
        fourPics={[image1, image2, image3, image4,]}
        fourPicsAnswer={'payo'}
        summary={'asdadadsasd 2222222'}

         />
    </div>
  )
}

export default Chapter6