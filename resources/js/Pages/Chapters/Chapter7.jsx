import React from 'react'
import Chapter from '../ChapterComponent/Chapter'

import image1 from '../../assets/chapterImage/chapter7/1.jpg'
import image2 from '../../assets/chapterImage/chapter7/2.jpg'
import image3 from '../../assets/chapterImage/chapter7/3.jpg'
import image4 from '../../assets/chapterImage/chapter7/4.jpg'

function Chapter6({user,num}) {
  return (
    <div>
         <Chapter
        user={user}
        fibQestion={"Si Don Juan ay nagkaroon ng __________ sugat sa kanyang palad mula sa mga awit ng ibon."}
        fibAnswer={"pitong"}
        mcQuestion={' Ano ang ginawa ni Don Juan upang manatiling gising habang umaawit ang Ibong Adarna?'}
        mcChoices={['Uminom ng tubig','Hinati ang kanyang palad','Kumain ng prutas','Nagdasal']}
        mcAnswer={'Hinati ang kanyang palad'}
        fourPics={[image1, image2, image3, image4,]}
        fourPicsAnswer={'huli'}
        summary={'Nakapuwesto si Don Juan sa ilalim ng Piedras Platas. Hindi siya napagod sa pag-iintay kung kaya’t nasaksihan niya ang taglay na gilas at kariktan ng Ibong Adarna. Umawit ito at nagpalit na ang kulay ng kanyang mga balahibo. Nang marinig ang awit ng ibon ay humikab si Don Juan. Ginawa niya ang bilin ng ermitanyo na hiwain ang palad at pigaan ng dayap ang sugat. Nawala ang nararamdaman niyang antok dahil sa sakit ng kanyang sugat. Nagkaroon ng pitong sugat si Don Juan katumbas ng pitong awit ng Ibong Adarna. Muling dumumi ang ibon at naiwasan naman ito ng prinsipe. Nang makatulog ang ibon ay marahan na umakyat sa puno si Don Juan at agad na sinunggaban ang ibon pang maitali gamit ang gintong sintas. Dinala ni Don Juan ang ibon sa dampa habang ang ermitanyo naman ang nagkulong sa hawla.'}
        num={num}
         />
    </div>
  )
}

export default Chapter6