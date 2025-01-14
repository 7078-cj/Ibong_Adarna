import React from 'react'
import Chapter from '../ChapterComponent/Chapter'

import image1 from '../../assets/chapterImage/chapter31/1.jpg'
import image2 from '../../assets/chapterImage/chapter31/2.jpg'
import image3 from '../../assets/chapterImage/chapter31/3.jpg'
import image4 from '../../assets/chapterImage/chapter31/4.jpg'

function Chapter31({user,num}) {
  return (
    <div>
         <Chapter
        user={user}
        fibQestion={"Ang salitang trigo ay tumutukoy sa isang uri ng _________ na ginagamit sa paggawa ng tinapay."}
        fibAnswer={"damo"}
        mcQuestion={'Piliin ang tamang kasingkahulugan ng salitang batid sa pangungusap: "Batid ni Don Juan na mahirap ang utos ng hari.'}
        mcChoices={['Naiintindihan','Nakalimutan',' Nararamdaman','Naisip']}
        mcAnswer={'Naiintindihan'}
        fourPics={[image1, image2, image3, image4,]}
        fourPicsAnswer={'tinapay'}
        summary={'Ibong Adarna Buod Kabanata 31: Ang Ika-Unang Pagsubok ng Hari (Saknong 1007 - 1059)\nKinabukasan ay nagkita si Don Juan at Haring Salermo sa hardin.\nPinapatuloy ng hari sa loob ng palasyo si Don Juan ngunit ito ay tumanggi sa halip ay naghintay nang ipag-uutos ng hari.\nNag-utos ang hari sa kaniyang tauhan na kumuha ng isang salop ng trigong kakaani palang at ibinigay iyon kay Don Juan upang itanim.\nTuwang-tuwa ang hari dahil ang pag-aakala niya ay may mabibiktima na naman siya.\nSi Don Juan naman ay umuwi ng malungkot dahil batid niyang malabong mangyari na tumubo agad ang trigo at makapaghanda ng tinapay para sa hari kinabukasan.\nPinawi ng prinsesa ang pag-aalala ng prinsipe.\nSinabihan ito ng dalaga na magpahinga at matulog nalang dahil siya na ang bahala.\nGinamit nito ang mahika blangka para tupadin ang utos ng hari.\nSa kalaliman ng gabi ay isinabog ni Maria Blanca ang trigo at agad din itong namunga.\nPagkatapos ay inani niya ang mga bunga at dinala ito sa lutuan ng tinapay.\nBago muling sumikat ang araw ay namasa na ng mga Intsik na tagapaggawa ng tinapay ang mga trigong inani.\nNamangha ang hari dahil siya ay hinainan ng tinapay na may iba’t-ibang kulay at hugis mula sa isang supot ng trigo lamang.'}

         />
    </div>
  )
}

export default Chapter31