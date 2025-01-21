import React from 'react'
import Chapter from '../ChapterComponent/Chapter'

import image1 from '../../assets/chapterImage/chapter23/1.jpg'
import image2 from '../../assets/chapterImage/chapter23/2.jpg'
import image3 from '../../assets/chapterImage/chapter23/3.jpg'
import image4 from '../../assets/chapterImage/chapter23/4.jpg'

function Chapter23({user,num}) {
  return (
    <div>
         <Chapter
        user={user}
        fibQestion={"Nang makabalik si Don Juan sa kinaroroonan, ipinahid ng lobo ang tubig sa buong katawan ng prinsipe at ________ ang mga sugat nito."}
        fibAnswer={"nawala"}
        mcQuestion={'Ano ang ibig sabihin ng salitang "Nalinlang" sa konteksto ng kwento?'}
        mcChoices={['Naligaw', 'Naloko', 'Nahulog', 'Nabitin']}
        mcAnswer={'Naloko'}
        fourPics={[image1, image2, image3, image4,]}
        fourPicsAnswer={'Dilim'}
        summary={'Ibong Adarna Buod Kabanata 23: Ang Lobong Engkantada (Saknong 732 – 757) Naabutan ng lobo si Don Juan na duguan at lamog ang katawan. Dali-dali itong kumuha ng tatlong bote at nagtungo sa Ilog ng Jordan. Nalinlang ng lobo ang mahigpit na tagapagbantay sa ilog at nilagyan ng tubig ang tatlong bote. Nang matuklasan ng tagapagbantay ang ginawa ng lobo ay hinabol ito ngunit agad itong tumalon sa bangin ng isang burol. Nang makabalik sa kinaroroonan ni Don Juan ay ipinahid ng lobo ang tubig sa buong katawan ng prinsipe. Muling nanumbalik ang lakas ng prinsipe at nawala ang mga sugat nito. Niyakap ni Don Juan ang lobo dahil sa labis na tuwa at pasasalamat. Nagtungo sina Don Juan at ang lobo sa palasyo upang kuhanin ang naiwang singsing ni Prinsesa Leonora. Nang makuha ang singsing ay tinulungan ng lobo si Don Juan na makaahon mula sa ilalim ng balon. Pagkatapos ay tuluyan nang nagpaalam at iniwan ng lobo ang prinsipe. Malapit na sana itong makarating sa kaharian ng Berbanya ngunit ito ay nakaramdam na ng pagod. Natagpuan niya ang isang punongkahoy na mayabong at dun nagpahinga. '}
        num={num}
         />
    </div>
  )
}

export default Chapter23