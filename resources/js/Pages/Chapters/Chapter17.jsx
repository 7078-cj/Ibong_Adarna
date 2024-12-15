import React from 'react'
import Chapter from '../ChapterComponent/Chapter'

import image1 from '../../assets/chapterImage/chapter17/1.jpg'
import image2 from '../../assets/chapterImage/chapter17/2.jpg'
import image3 from '../../assets/chapterImage/chapter17/3.jpg'
import image4 from '../../assets/chapterImage/chapter17/4.jpg'

function Chapter17({user,num}) {
  return (
    <div>
         <Chapter
        user={user}
        fibQestion={"Ang balon na natuklasan ng magkakapatid ay may makikinis na marmol at __________ na kaukit sa paligid."}
        fibAnswer={"ginto"}
        mcQuestion={'Ano ang natuklasan ng magkakapatid sa kanilang paglalakbay?'}
        mcChoices={['Isang madilim na kagubatan','Isang mahiwagang balon','Isang bundok na puno ng prutal','Isang palasyo na yari sa ginto']}
        mcAnswer={'Isang mahiwagang balon'}
        fourPics={[image1, image2, image3, image4,]}
        fourPicsAnswer={'balon'}
        summary={'asdadadsasd 2222222'}

         />
    </div>
  )
}

export default Chapter17