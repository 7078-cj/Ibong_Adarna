import React from 'react'
import Chapter from '../ChapterComponent/Chapter'

import image1 from '../../assets/chapterImage/chapter37/1.jpg'
import image2 from '../../assets/chapterImage/chapter37/2.jpg'
import image3 from '../../assets/chapterImage/chapter37/3.jpg'
import image4 from '../../assets/chapterImage/chapter37/4.jpg'

function Chapter37({user,num}) {
  return (
    <div>
         <Chapter
        user={user}
        fibQestion={"Ipinadala si Don Juan sa _______ upang mapangasawa ang bunsong kapatid ng hari."}
        fibAnswer={"Inglatera"}
        mcQuestion={'Ano ang ibig sabihin ng tuso sa teksto?'}
        mcChoices={['Mapanglamang','Matalino','Malupit','Matulungin']}
        mcAnswer={'Mapanglamang'}
        fourPics={[image1, image2, image3, image4,]}
        fourPicsAnswer={'silid'}
        summary={'Ibong Adarna Buod Kabanata 37: Ang Pagpili sa mga Prinsesa (Saknong 1286 – 1333) Kinabukasan ay ipinatawag ng hari si Don Juan. Nang makapasok sa palasyo ay napansin ng binata na ang lahat ay nakangiti maging ang tusong hari. Labis na nagtataka ang prinsipe dahil kahit nakaratay na si Haring Salermo ay bakas sa mukha niya ang saya. Masayang ibinalita ng hari na iyon na ang panahon upang ipagkaloob sa kaniya ang gantimpalang nararapat sa kaniya. Dinala siya sa tatlong silid kung saan may butas ang bawat pintuan at tanging ang hintuturo lang ng mga prinsesa ang nakalitaw. Nilaktawan niya ang una at pangalawang silid at dumaretso sa ikahuling silid. Pinili niya ang huling silid dahil sa palatandaan nitong putol na hintuturo ni Maria Blanca. Hindi sukat akalain ng hari na mapipili ni Don Juan ang bunsong anak na si Maria Blanca. Walang nagawa si Haring Salermo kundi pasamahin ang anak kay Don Juan ngunit ito ay nakaisip ng bagong plano. May kautusan ang nagsasabing ipapadala si Don Juan sa Inglatera upang mapangasawa ang bunsong kapatid ng hari. Nagbanta ang hari kay Don Juan ng kaparusahang kamatayan kung hindi ito susunod sa kautusan. Nalaman ni Maria Blanca ang plano ng ama kaya nagpasya ang dalawa na tumakas.'}
        num={num}
         />
    </div>
  )
}

export default Chapter37