import React from 'react'
import Chapter from '../ChapterComponent/Chapter'

import image1 from '../../assets/chapterImage/chapter34/1.jpg'
import image2 from '../../assets/chapterImage/chapter34/2.jpg'
import image3 from '../../assets/chapterImage/chapter34/3.jpg'
import image4 from '../../assets/chapterImage/chapter34/4.jpg'

function Chapter34({user,num}) {
  return (
    <div>
         <Chapter
        user={user}
        fibQestion={"Ang kastilyo na ipinagawa ng hari ay itinayo sa gitna ng ________"}
        fibAnswer={"karagatan"}
        mcQuestion={'Ano ang ipinagawa ng hari kay Don Juan sa Kabanata 34?'}
        mcChoices={['Pagtatanim ng trigo','Pagtatayo ng kastilyo','Paggawa ng isang damuhan','Pagtatayo ng isang tulay']}
        mcAnswer={'Pagtatayo ng kastilyo'}
        fourPics={[image1, image2, image3, image4,]}
        fourPicsAnswer={'kastilyo'}
        summary={'Ibong Adarna Buod Kabanata 34: Ang Paggawa ng Kastilyo (Saknong 1123 – 1179) Sa susunod na pagkikita ay iniutos ng hari kay Don Juan na itakip ang bundok sa gitna ng karagatan at tayuan ito ng kastilyo. Kinakailangan na lagyan ng gulod at kanyon ang gagawing kaharian. Ibinigay din sa kaniya ang mga gagamiting materyales katulad ng palataw at bareta, piko, kalaykay, maso at kutsara. Sa pagsubok na ito masusukat ng hari ang katalinuhang taglay ni Don Juan. Katulad ng mga nakaaran, nagkita muli sina Don Juan at Maria Blanca. Sa halip na mag-alala ay pinayuhan ni Maria Blanca na magpahinga nalang si Don Juan at sya na lamang ang gagawa ng utos ng hari. Katulad ng inutos ng hari, pinaandar ng dalaga ang bundok at itinabon ito sa karagatan na siyang naging muog. Ikalima ng hapon nang ipag-utos ng hari na tanggalin na ang kastilyo sa gitna ng karagatan. Sa pamamagitan ng kapangyarihan ni Maria Blanca ay nawala ang kastilyo at muling bumalik ang lahat sa dati nitong anyo. Natupad na naman ni Don Juan ang pagsubok ng hari.'}

         />
    </div>
  )
}

export default Chapter34