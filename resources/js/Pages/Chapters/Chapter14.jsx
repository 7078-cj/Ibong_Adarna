import React from 'react'
import Chapter from '../ChapterComponent/Chapter'

import image1 from '../../assets/chapterImage/chapter14/1.jpg'
import image2 from '../../assets/chapterImage/chapter14/2.jpg'
import image3 from '../../assets/chapterImage/chapter14/3.jpg'
import image4 from '../../assets/chapterImage/chapter14/4.jpg'

function Chapter14({user,num}) {
  return (
    <div>
         <Chapter
        user={user}
        fibQestion={"Si Don Diego ay madalas _____ habang nagbabantay sa Ibong Adarna."}
        fibAnswer={"antukin"} // makatulog
        mcQuestion={'Ano ang nangyari habang natutulog si Don Juan?'}
        mcChoices={['Tinulungan siya ng mga kawal','Sinamantala ng dalawang kapatid na pakawalan ang Ibong Adarna','Nagdasal siya para sa kaligtasan ng Ibong Adarna','Dumating ang hari at binantayan ang ibon']}
        mcAnswer={'Sinamantala ng dalawang kapatid na pakawalan ang Ibong Adarna'}
        fourPics={[image1, image2, image3, image4,]}
        fourPicsAnswer={'paglaya'}
        summary={'asdadadsasd 2222222'}

         />
    </div>
  )
}

export default Chapter14