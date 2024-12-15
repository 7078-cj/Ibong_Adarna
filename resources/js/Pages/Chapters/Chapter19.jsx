import React from 'react'
import Chapter from '../ChapterComponent/Chapter'

import image1 from '../../assets/chapterImage/chapter19/1.jpg'
import image2 from '../../assets/chapterImage/chapter19/2.jpg'
import image3 from '../../assets/chapterImage/chapter19/3.jpg'
import image4 from '../../assets/chapterImage/chapter19/4.jpg'

function Chapter19({user,num}) {
  return (
    <div>
         <Chapter
        user={user}
        fibQestion={"Ang nagbabantay sa hardin ay isang malupit na __________."}
        fibAnswer={"higante"}
        mcQuestion={'Saan matatagpuan si Prinsesa Leonora?'}
        mcChoices={['Sa isang kagubatan na puno ng mga bulaklak','Sa isang palasyo na may malaking hagdanang ginto','Sa isang kuweba sa ilalim ng bundok','Sa isang kabundukan na may yelo']}
        mcAnswer={'Sa isang palasyo na may malaking hagdanang ginto'}
        fourPics={[image1, image2, image3, image4,]}
        fourPicsAnswer={'serpyente'}
        summary={'asdadadsasd 2222222'}

         />
    </div>
  )
}

export default Chapter19