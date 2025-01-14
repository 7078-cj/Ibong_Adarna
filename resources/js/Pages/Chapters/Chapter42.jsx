import React from 'react'
import Chapter from '../ChapterComponent/Chapter'

import image1 from '../../assets/chapterImage/chapter42/1.jpg'
import image2 from '../../assets/chapterImage/chapter42/2.jpg'
import image3 from '../../assets/chapterImage/chapter42/3.jpg'
import image4 from '../../assets/chapterImage/chapter42/4.jpg'

function Chapter42({user,num}) {
  return (
    <div>
         <Chapter
        user={user}
        fibQestion={"Pinapalo ng negrita ang negrito ngunit si Don ________ ang nasasaktan."}
        fibAnswer={"Juan"}
        mcQuestion={'Ano ang kAno ang ibig sabihin ng "trigo" sa kwento?'}
        mcChoices={[' Isang klase ng hayop','Hayop','Sinasakang damo', 'Bunga ng punongkahoy']}
        mcAnswer={'Sinasakang damo'}
        fourPics={[image1, image2, image3, image4,]}
        fourPicsAnswer={'hampas'}
        summary={'Ibong Adarna Buod Kabanata 42: Ang Dula-Dulaan (Saknong 1473 – 1541) Ang dalawang ita sa prasko ay mag-asawa. HInahampas ng negrita ang negrito gamit ang pamalo sa tuwing hindi nito naaalala ang mga pangyayari. Sa pamamagitan ng dula ay isinasalaysay nito ang mga pagsubok na ibinigay ni Haring Salermo. Mula sa pagpapatanim ng trigo at paggawa ng tinapay gamit ang bunga nito, paglipat ng bundok sa tapat ng durungawan ng Palacio Real, pagtatayo ng kastilyo, ang paghahanap sa nawawalng singsing ng hari, ang pagpapaamo sa kabayo, at ang pagpili sa tatlong prinsesa. Pinapalo ng negrita ang negrito ngunit si Don Juan ang nasasaktan.'}

         />
    </div>
  )
}

export default Chapter42