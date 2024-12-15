import React from 'react'
import Chapter from '../ChapterComponent/Chapter'

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
        fourPics={['https://i.pinimg.com/236x/66/4a/be/664abe983aaa33aec6d66da3dfc66a0b.jpg', 
         'https://i.pinimg.com/236x/47/e3/5a/47e35ad7430b6b7dd520aa2252abd90d.jpg',
         'https://i.pinimg.com/736x/9e/34/80/9e34804ec4c7c05d5568217b5650c1ac.jpg',
         'https://i.pinimg.com/736x/c5/44/4c/c5444c315a2bdc680a317f1310b768c1.jpg',]}
        fourPicsAnswer={'paghuli'}
        summary={'asdadadsasd 2222222'}

         />
    </div>
  )
}

export default Chapter6