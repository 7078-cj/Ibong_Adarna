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
        summary={'Sa kanilang paglalakbay ay isang balon ang natuklasan ng magkakapatid. Ito ay may makikinis na marmol at ang lumot sa paligid nito ay may gintong nakaukit. Manghang-mangha ang magkakapatid sa nakita dahil sa lalim ng balon ay wala naman itong lamang tubig. May makikita din doon na lubid para sa mga nais magtangkang bumaba. Unang bumaba si Don Pedro bilang siya ang panganay ngunit dahil sa kadiliman ay hanggang tatlumpung dipa lamang ang kinaya nito. Sumunod naman na bumaba si Don Diego ngunit hindi rin ito nagtagal sa ilalim. Si Don Juan ang pinakahuling sumubok. Buong tapang nitong hinarap ang kadiliman sa balon. Malalim na ang narating nito ngunit patuloy pa rin siya sa pagbaba. Si Don Pedro at Don Diego ay nababahala at naiinip na sa kakaintay sa muling paglabas ni Don Juan.'}

         />
    </div>
  )
}

export default Chapter17