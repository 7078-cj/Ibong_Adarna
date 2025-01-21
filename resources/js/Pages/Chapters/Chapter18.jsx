import React from 'react'
import Chapter from '../ChapterComponent/Chapter'

import image1 from '../../assets/chapterImage/chapter18/1.jpg'
import image2 from '../../assets/chapterImage/chapter18/2.jpg'
import image3 from '../../assets/chapterImage/chapter18/3.jpg'
import image4 from '../../assets/chapterImage/chapter18/4.jpg'

function Chapter18({user,num}) {
  return (
    <div>
         <Chapter
        user={user}
        fibQestion={"Si Donya Juana ay isang __________ sa kagandahan na nakita ni Don Juan."}
        fibAnswer={"dyosa"}
        mcQuestion={'Ano ang nakita ni Don Juan nang makarating siya sa pinakamalalim na bahagi ng balon?'}
        mcChoices={['Isang madilim na kagubatan','Isang magandang hardin','Isang kuweba na puno ng mga alahas','Isang palasyo na yari sa ginto']}
        mcAnswer={'Isang magandang hardin'}
        fourPics={[image1, image2, image3, image4,]}
        fourPicsAnswer={'hardin'}
        summary={'Patuloy pa rin sa pagbaba si Don Juan hanggang sa marating niya ang pinakamalalim na bahagi ng balon. Namangha siya dahil isang magandang hardin ang kaniyang nasaksihan. Ito ang natatagong paraiso sa Armenya. Puno ng halaman at bulaklak sa paligid. Nagiging makulay at masamyo ang amoy ng kapaligiran dahil sa mga ito. Nakita ni Don Juan ang palasyo na yari sa ginto at pilak dahilan kung bakit ito nangingislap. Nasilayan din niya ang isang dalaga na diyosa sa kagandahan. Siya ay si Donya Juana. Di makapaniwala ang dalaga na narating ni Don Juan ang lugar na iyon. Lumuhod si Don Juan upang nagpakilala bilang prinsipe ng Armenya. Humingi din ito ng paumanhin dahil sa mapangahas na pagpunta sa lugar na iyon. Sumamo si Don Juan na tanggapin ng dalaga ang kaniyang pag-ibig. Hindi naman ito nasawi dahil inibig din siya ng dalaga.'}
        num={num}
         />
    </div>
  )
}

export default Chapter18