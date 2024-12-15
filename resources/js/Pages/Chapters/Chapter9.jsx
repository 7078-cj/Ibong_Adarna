import React from 'react'
import Chapter from '../ChapterComponent/Chapter'

import image1 from '../../assets/chapterImage/chapter9/1.jpg'
import image2 from '../../assets/chapterImage/chapter9/2.jpg'
import image3 from '../../assets/chapterImage/chapter9/3.jpg'
import image4 from '../../assets/chapterImage/chapter9/4.jpg'

function Chapter9({user,num}) {
  return (
    <div>
         <Chapter
        user={user}
        fibQestion={"Habang naglalakad pauwi, palihim na kinakausap ni Don Pedro si Don Diego dahil sa sobrang _____ kay Don Juan."}
        fibAnswer={"inggit"}
        mcQuestion={'Ano ang naging kasunduan nina Don Pedro at Don Diego nang hindi nila matuloy ang pagpapatay kay Don Juan?'}
        mcChoices={['Pabayaan na lang si Don Juan sa kagubatan','Bugbugin na lang si Don Juan','Ibigay ang Ibong Adarna kay Don Juan','Ibalik ang Ibong Adarna sa hari']}
        mcAnswer={'Bugbugin na lang si Don Juan'}
        fourPics={[image1, image2, image3, image4,]}
        fourPicsAnswer={'kapayapaan'}
        summary={'asdadadsasd 2222222'}

         />
    </div>
  )
}

export default Chapter9