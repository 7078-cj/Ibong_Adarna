import React from 'react'
import Chapter from '../ChapterComponent/Chapter'

import image1 from '../../assets/chapterImage/chapter41/1.jpg'
import image2 from '../../assets/chapterImage/chapter41/2.jpg'
import image3 from '../../assets/chapterImage/chapter41/3.jpg'
import image4 from '../../assets/chapterImage/chapter41/4.jpg'

function Chapter41({user,num}) {
  return (
    <div>
         <Chapter
        user={user}
        fibQestion={"Sinalubong ng tugtugan ang pagdating ni Maria Blanca na nagpapanggap bilang ________"}
        fibAnswer={"emperatris"}
        mcQuestion={'Ano ang kahulugan ng "pakay"?'}
        mcChoices={['Gawain','Balak','Pagtanggi', 'Kagalakan']}
        mcAnswer={'Balak'}
        fourPics={[image1, image2, image3, image4,]}
        fourPicsAnswer={'laro'}
        summary={'Ibong Adarna Buod Kabanata 41: Ang Pagbawi kay Don Juan (Saknong 1450 – 1472) Sinalubong ng tugtugan ang pagdating ni Maria Blanca na nagpapanggap bilang emperatris. Panandaliang hininto ang kasal upang parangalan ang pagdating ng mahalagang bisita. Labis na pighati ang nararamdaman ni Maria Blanca dahil nasisilayan niya si Don Juan na nakatuon ang pansin kay Prinsesa Leonora. Ipinaalam ni Maria Blanca ang pakay niya sa pagdalo ng kasal na iyon. Aniya may hinanda siyang laro na nais ipakita bilang handog sa ikakasal. Humiling siya ng prasko na may lamang tubig sa kaniyang diyamanteng singsing. Biglang may sumulpot na prasko na may nakalagay na dalawang maliliit na ita. '}
        num={num}
         />
    </div>
  )
}

export default Chapter41