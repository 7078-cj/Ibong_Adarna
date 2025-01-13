import React from 'react'
import Chapter from '../ChapterComponent/Chapter'

import image1 from '../../assets/chapterImage/chapter13/1.jpg'
import image2 from '../../assets/chapterImage/chapter13/2.jpg'
import image3 from '../../assets/chapterImage/chapter13/3.jpg'
import image4 from '../../assets/chapterImage/chapter13/4.jpg'

function Chapter13({user,num}) {
  return (
    <div>
         <Chapter
        user={user}
        fibQestion={"Si Don Juan ay __________ sa hari upang humingi ng tawad para sa kanyang mga kapatid."}
        fibAnswer={"lumuhod"}
        mcQuestion={'Ano ang ginawa ng Ibong Adarna habang nagpapalit ng kulay ng balahibo?'}
        mcChoices={['Kumanta at inilahad ang buong katotohanan','Tumawa at nagbigay ng payo','Nagpahinga','Lumipad palayo']}
        mcAnswer={'Kumanta at inilahad ang buong katotohanan'}
        fourPics={[image1, image2, image3, image4,]}
        fourPicsAnswer={'kasiyahan'}
        summary={'Sa wakas ay nakabalik na muli si Don Juan sa kaharian ng Berbanya. Namutla ang mukha nina Don Pedro at Don Diego nang nakita nila ang bunsong kapatid. Unang pinuntahan ng prinsipe ang nakaratay na ama at lumuhod ito sa harap ng hari. Umawit na rin ang Ibong Adarna at inilahad nito ang buong katotohanan. Habang nagpapalit ng kulay ng balahibo ay isinasalaysay ng ibon ang mga paghihirap ni Don Juan hanggang sa pagtataksil ng dalawa niyang kapatid. Sa ikapitong awit ng ibon ay biglang nakatayo ang hari at nawala ang bakas ng karamdaman sa kaniya. Sa labis na galak ng hari ay niyakap nito ang bunsong si Don Juan pati ang ibon. Iniutos naman ni Don Fernando sa mga kagawad ng palasyo na ipatapon ang mga taksil niyang anak bilang parusa. Nahabag naman si Don Juan sa kaniyang mga kapatid kaya lumuhod ito sa hari at inihingi ng tawad ang mga kapatid. Lumambot ang puso ng hari dahil sa ginawa ni Don Juan kung kaya’t nagbago ang isip nito. Ngunit binalaan nito ang dalawang prinsipe na sa susunod na magtaksil ito ay kamatayan ang magiging kaparusahan sa mga ito. Masayang niyakap ni Don Juan ang dalawa niyang kapatid. Bumalik ang kasiyahan ng palasyo dahil sa paggaling ng hari.'}

         />
    </div>
  )
}

export default Chapter13