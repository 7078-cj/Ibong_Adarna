import React from 'react'
import Chapter from '../ChapterComponent/Chapter'

import image1 from '../../assets/chapterImage/chapter35/1.jpg'
import image2 from '../../assets/chapterImage/chapter35/2.jpg'
import image3 from '../../assets/chapterImage/chapter35/3.jpg'
import image4 from '../../assets/chapterImage/chapter35/4.jpg'

function Chapter35({user,num}) {
  return (
    <div>
         <Chapter
        user={user}
        fibQestion={"Ang singsing ay natagpuan sa ilalim ng __________ ni Haring Salermo kinabukasan"}
        fibAnswer={"unan"}
        mcQuestion={'Anong nangyari kay Maria Blanca pagkatapos niyang itapon sa dagat?'}
        mcChoices={['Naging ulap at lumipad sa himpapawid','Naging ibon at lumipad palayo','Naging tubig','Naging isda at sumisid sa dagat']}
        mcAnswer={'Naging isda at sumisid sa dagat'}
        fourPics={[image1, image2, image3, image4,]}
        fourPicsAnswer={'singsing'}
        summary={'Ibong Adarna Buod Kabanata 35: Ang Nawawalang Singsing (Saknong 1180 – 1239) Ipinatawag ni Haring Salermo si Don Juan at sinabi dito na nahulog ang diyamante niyang singsing. Nais ng hari na hanapin ni Don Juan ang singsing sa gitna ng dagat at matagpuan ito sa ilalim ng unan ng hari. Ikasiyam ng gabi nang magkita sina Don Juan at Maria Blanca sa banyong paliguan. Nagtungo ang dalawa sa dagat. Inutusan ng dalaga si Don Juan na tadtarin ito ng pinung-pino at ihagis sa tubig. Nagbilin siya na huwag hahayaang may matapon ni kapirasong laman at huwag matutulog si Don Juan habang nag-iintay. Lilitaw ang kamay ng prinsesa kasama ang singsing at kailangan iyon kuhanin ni Don Juan. Sinunod ng prinsipe ang lahat ng pinag-utos ni Maria Blanca. Naging isda ang prinsesa at sumisid sa dagat. Sa tagal nang pag-iintay ay nakatulog naman ang prinsipe. Ilang beses nang lumitaw ang kamay ng prinsesa at ang singsing ngunit hindi ito nakuha ni Don Juan. Umahon si Maria Blanca at nagalit kay Don Juan ngunit hindi rin ito nagawang tiisin ng dalaga. Sa ikalawang pagkakataon ay tinadtad muli ang prinsesa at inihagis sa karagatan subalit sa hindi inaasahan ay tumalsik ang isang bahagi ng daliri ng prinsesa. Lumitaw ang kamay nito na may hawak na singsing ngunit wala ang hintuturo nito. Nagbilin si Maria Blanca na gawing palatandaan sa kanya ang kamay na kulang ng isang daliri. Namangha ang hari nang matagpuan niya ang singsing sa ilalim ng kaniyang unan kinabukasan.'}
        num={num}
         />
    </div>
  )
}

export default Chapter35