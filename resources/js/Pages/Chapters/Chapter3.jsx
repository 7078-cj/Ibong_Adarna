import React from 'react'
import Chapter from '../ChapterComponent/Chapter'

import image1 from '../../assets/chapterImage/chapter3/1.jpg'
import image2 from '../../assets/chapterImage/chapter3/2.jpg'
import image3 from '../../assets/chapterImage/chapter3/3.jpg'
import image4 from '../../assets/chapterImage/chapter3/4.jpg'

function Chapter3({user,num}) {
  return (
    <div>
         <Chapter
        user={user}
        fibQestion={"Ang __________ ay ang kumikinang na puno na pinaniniwalaang tahanan ng ibon."}
        fibAnswer={"piedras platas"}
        mcQuestion={'Ilang buwan naglakbay si Don Pedro upang hanapin ang Bundok ng Tabor?'}
        mcChoices={['Isang linggo','Tatlong buwan','Anim na buwan','Isang taon']}
        mcAnswer={'Tatlong buwan'}
        fourPics={[image1, image2, image3, image4,]}
        fourPicsAnswer={'lakbay'}
        summary={'Inabot ng tatlong buwan ang paglalakbay ni Don Pedro bago tuluyang matunton ang daan paakyat sa Bundok ng Tabor. Hindi naglaon ay natagpuan din ni Don Pedro ang Piedras Platas. Dumating ang laksa-laksang ibon ngunit wala sa mga ito ang dumapo sa kumikinang na puno. Nakatulog si Don Rafael habang nag-iintay sa pagdating ng Ibong Adarna. Di nito namalayan ang pagdating ng ibon. Pitong ulit na umaawit ang Ibong Adarna at pitong ulit rin nagpapalit ng kulay ang kaniyang balahibo Nakasanayan na ng ibon ang dumumi bago matulog. Pumatak ang dumi ng ibon sa noo’y natutulog na si Don Pedro. Sa isang iglap ay naging isang bato ang prinsipe ng Berbanya.'}
        num={num}
         />
    </div>
  )
}

export default Chapter3