import React from 'react'
import Chapter from '../ChapterComponent/Chapter'

import image1 from '../../assets/chapterImage/chapter20/1.jpg'
import image2 from '../../assets/chapterImage/chapter20/2.jpg'
import image3 from '../../assets/chapterImage/chapter20/3.jpg'
import image4 from '../../assets/chapterImage/chapter20/4.jpg'

function Chapter20({user,num}) {
  return (
    <div>
         <Chapter
        user={user}
        fibQestion={"Habang sila ay nag-uusap, nakaramdam sila ng __________ ang buong paligid, na nagdulot ng takot sa kanilang dalawa."}
        fibAnswer={"pagyanig"}
        mcQuestion={'Bakit minamadali ni Prinsesa Leonora na paalisin si Don Juan?'}
        mcChoices={['Dahil ayaw niya ng bisita','Dahil takot siyang dumating ang serpyente','Dahil gusto niyang mag-isa','Dahil may ibang tao siyang pinapakita']}
        mcAnswer={'Dahil takot siyang dumating ang serpyente'}
        fourPics={[image1, image2, image3, image4,]}
        fourPicsAnswer={'pagibig'}
        summary={'Nabigla si Prinsesa Leonora nang makita si Don Juan. Nabighani naman ang prinsipe sa prinsesa dahil sa labis nitong kagandahan. Minamadaling paalisin ng prinsesa si Don Juan dahil hindi magtatagal ay maaari nang dumating ang serpyente. Nagmakaawa si Don Juan kay Prinsesa Leonora na siya ay kupkupin sapagkat tunay na nabihag niya ang puso ng prinsipe. Nawala na sa isip ni Don Juan na nag-iintay sa labas ng palasyo si Donya Juana. Dahil matatamis na pananalita ni Don Juan ay lumambot ang puso ni Prinsesa Leonora at pinapanhik ito sa loob ng palasyo. Isinalaysay ni Don Juan ang mga naging pagdurusa bago marating ang lugar na iyon. Nangako ng tapat na pag-ibig si Don Juan sa prinsesa bagama’t may pangamba ang prinsesa na pagtataksilan ito. Ilang sandali pa ay nakaramdam sila ng pagyanig sa buong paligid.'}

         />
    </div>
  )
}

export default Chapter20