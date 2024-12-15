import React from 'react'
import Chapter from '../ChapterComponent/Chapter'

import image1 from '../../assets/chapterImage/chapter18/1.jpg'
import image2 from '../../assets/chapterImage/chapter18/2.jpg'
import image3 from '../../assets/chapterImage/chapter18/3.jpg'
import image4 from '../../assets/chapterImage/chapter18/4.jpg'

function Chapter18({user,num}) {
  return (
    <div>
         <Chapter
        user={user}
        fibQestion={"Si Donya Juana ay isang __________ sa kagandahan na nakita ni Don Juan."}
        fibAnswer={"dyosa"}
        mcQuestion={'Ano ang nakita ni Don Juan nang makarating siya sa pinakamalalim na bahagi ng balon?'}
        mcChoices={['Isang madilim na kagubatan','Isang magandang hardin','Isang kuweba na puno ng mga alahas','Isang palasyo na yari sa ginto']}
        mcAnswer={'Isang magandang hardin'}
        fourPics={[image1, image2, image3, image4,]}
        fourPicsAnswer={'hardin'}
        summary={'asdadadsasd 2222222'}

         />
    </div>
  )
}

export default Chapter18