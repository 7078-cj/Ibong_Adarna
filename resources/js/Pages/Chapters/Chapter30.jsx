import React from 'react'
import Chapter from '../ChapterComponent/Chapter'

import image1 from '../../assets/chapterImage/chapter30/1.jpg'
import image2 from '../../assets/chapterImage/chapter30/2.jpg'
import image3 from '../../assets/chapterImage/chapter30/3.jpg'
import image4 from '../../assets/chapterImage/chapter30/4.jpg'

function Chapter30({user,num}) {
  return (
    <div>
         <Chapter
        user={user}
        fibQestion={"Ang higanteng ________ ay tumulong kay Don Juan upang makapunta sa kaharian ng Reyno delos Cristales."}
        fibAnswer={"agila"}
        mcQuestion={'Sino ang nagbigay ng babala kay Don Juan na magiging mahirap ang kaniyang misyon sa kaharian ng Reyno delos Cristales?'}
        mcChoices={[' Ermitanyo', 'Higanteng agila', 'Maria Blanca', 'Haring Salermo']}
        mcAnswer={'Maria Blanca'}
        fourPics={[image1, image2, image3, image4,]}
        fourPicsAnswer={'hari'}
        summary={'Ibong Adarna Buod Kabanata 30: Ang Prinsesang si Maria Blanca (Saknong 961 – 1006) Natapos nang maligo ang magkakapatid at naiwang mag-isa si Maria Blanca sa paliguan. Nagalit ito nang mapansin niyang wala na ang kaniyang damit. Lumapit si Don Juan sa prinsesa at humingi ng tawad. Inihanda niya ang sarili para sa kaparusahan na ibibigay sa kaniya ni Maria Blanca. Napawi naman ang galit ng dalaga nang makita ang maamong mukha ng prinsipe. Maging ito ay nabihag na din dahil sa kakisigang taglay ng binata. Nagpakilala ito bilang bunsong anak ni Don Fernando na nagmula sa kaharian ng Berbanya. Binalaan ni Maria Blanca si Don Juan na tuso at matalino ang kaniyang ama na si Haring Salermo. Ang mga nagtangkang umibig sa prinsesa ay naging batong palamuti sa hardin ng palasyo. Alam ni Don Juan na dadaan siya sa matinding pagsubok ni Haring Salermo. Kailangan sundin ng prinsipe ang bawat pag-uutos ng hari. Habang sa gabi naman ay magkikita sila ni Maria Blanca upang ipaalam dito ang unang pagsubok na kakaharapin.  '}

         />
    </div>
  )
}

export default Chapter30