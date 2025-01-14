import React from 'react'
import Chapter from '../ChapterComponent/Chapter'

import image1 from '../../assets/chapterImage/chapter28/1.jpg'
import image2 from '../../assets/chapterImage/chapter28/2.jpg'
import image3 from '../../assets/chapterImage/chapter28/3.jpg'
import image4 from '../../assets/chapterImage/chapter28/4.jpg'

function Chapter28({user,num}) {
  return (
    <div>
         <Chapter
        user={user}
        fibQestion={"Ang ermitanyo ay nagsabing aabutin ng ________ bago marating ang kaharian ni Maria Blanca"}
        fibAnswer={"isang buwan"}
        mcQuestion={'Ano ang ibig sabihin ng salitang "paumanhin"?'}
        mcChoices={['Salamat', 'Pag-asa', 'Payo', 'Patawad']}
        mcAnswer={'Patawad'}
        fourPics={[image1, image2, image3, image4,]}
        fourPicsAnswer={'Agila'}
        summary={'Ibong Adarna Buod Kabanata 27: Ang Ikapitong Bundok (Saknong 859 – 911) Sa ikapitong bundok ay nasilayan ni Don Juan ang ermitanyo na hanggang baywang ang balbas. Ibinigay ng Don sa ermitanyo ang kapiraso ng baro na noo’y binigay ng matanda na nagpalimos ng pagkain at inumin sa kaniya. Nalaman ng ermitanyo ang pakay ni Don Juan ngunit sa loob ng limang daang taon na paninirahan ay hindi nito nababatid ang Reyno delos Cristales. Pinatugtog nito ang kampana sa kaniyang pinto hudyat ng pagdating ng mga hayop sa Armenya ngunit wala ni isa sa kanila ang nakakaalam sa reyno. Ibinigay ng ermitanyo ang kapiraso ng baro kay Don Juan at inutusan ang olikornyo na ihatid ang prinsipe sa bahay ng kapatid nito na kapwa ermitanyo. Nang makarating ay nakita niya ang ermitanyo na sayad hanggang lupa ang balbas. Muling ibinigay ni Don Juan ang kapiraso ng baro na siyang binigay ng naunang ermitanyo. Nalaman din ng ermitanyo ang pakay ni Don Juan ngunit sa loob ng walong daang taon na paninirahan nito ay hindi din niya batid ang kahariang hinahanap ni Don Juan. Pinatugtog niya ang kampana na nasa pintuan at nagsidatingan ang laksa-laksang ibon. Ngunit wala sa mga ito ang nakakaalam sa kinaroroonan ng kaharian.  '}

         />
    </div>
  )
}

export default Chapter28