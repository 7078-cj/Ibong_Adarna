import React from 'react'
import Chapter from '../ChapterComponent/Chapter'

import image1 from '../../assets/chapterImage/chapter10/1.jpg'
import image2 from '../../assets/chapterImage/chapter10/2.jpg'
import image3 from '../../assets/chapterImage/chapter10/3.jpg'
import image4 from '../../assets/chapterImage/chapter10/4.jpg'

function Chapter10({user,num}) {
  return (
    <div>
         <Chapter
        user={user}
        fibQestion={"Nang hindi kumanta ang Ibong Adarna, naalala ng hari ang __________ tungkol sa kanyang bunsong anak na pinaslang."}
        fibAnswer={"panaginip"}
        mcQuestion={'Ano ang nangyari sa hari pagkatapos makita ang Ibong Adarna?'}
        mcChoices={['Mas gumaan ang pakiramdam ng hari','Lumala ang kanyang sakit','Nawala ang sakit ng hari','Naging malakas at masigla ang hari']}
        mcAnswer={'Lumala ang kanyang sakit'}
        fourPics={[image1, image2, image3, image4,]}
        fourPicsAnswer={'karamdaman'}
        summary={'asdadadsasd 2222222'}

         />
    </div>
  )
}

export default Chapter10