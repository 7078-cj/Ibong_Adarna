import React from 'react'
import Chapter from '../ChapterComponent/Chapter'

import image1 from '../../assets/chapterImage/chapter33/1.jpg'
import image2 from '../../assets/chapterImage/chapter33/2.jpg'
import image3 from '../../assets/chapterImage/chapter33/3.jpg'
import image4 from '../../assets/chapterImage/chapter33/4.jpg'

function Chapter33({user,num}) {
  return (
    <div>
         <Chapter
        user={user}
        fibQestion={"Ang utos ng hari ay mailipat ang bundok bago sumikat ang ________"}
        fibAnswer={"araw"}
        mcQuestion={'Piliin ang tamang kasingkahulugan ng salitang nais sa pangungusap: "Nais ng hari na mailipat ang bundok sa harap ng durungawan.'}
        mcChoices={['Gusto','Takot','Naisip','Iniiwasan']}
        mcAnswer={'Gusto'}
        fourPics={[image1, image2, image3, image4,]}
        fourPicsAnswer={'durungawan'}
        summary={'Ibong Adarna Buod Kabanata 33: Ang Paglipat sa Bundok (Saknong 1097 – 1122) Muling nagkita si Don Juan at Haring Salermo sa hardin para sa susunod na pagsubok. Nais ng hari na itapat ang bundok sa harap ng kanyang durungawan upang pumasok sa palasyo ang sariwang hangin. Bilin ng hari na mailipat ito bago pa man sumikat ang araw. Nakipagkita muli si Don Juan kay Maria Blanca at kita sa mukha nito ang pangamba. Muling pinayapa ng prinsesa ang prinsipe at sinabing siya na ang gagawa noon. Nang sumapit ang madaling araw ay tumungo si Maria Blanca sa bundok habang si Don Juan naman ay namamahinga. Pinalakad ng dalaga ang bundok sa Palacio Real gamit ang malakas na hangin. Pagsapit ng umaga, nabigla ang hari nang makita niya ang bundok sa tapat ng kaniyang durungawan. Hindi makapaniwala ang hari na muling malalagpasan ni Don Juan ang kaniyang pagsubok.'}

         />
    </div>
  )
}

export default Chapter33