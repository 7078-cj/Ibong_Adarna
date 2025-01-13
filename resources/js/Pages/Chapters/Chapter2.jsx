import React from 'react'
import Chapter from '../ChapterComponent/Chapter'

import image1 from '../../assets/chapterImage/chapter2/1.jpg'
import image2 from '../../assets/chapterImage/chapter2/2.jpg'
import image3 from '../../assets/chapterImage/chapter2/3.jpg'
import image4 from '../../assets/chapterImage/chapter2/4.jpg'

function Chapter2({user,num}) {
  return (
    <div>
         <Chapter
        user={user}
        fibQestion={"Ang ibong adarna ay matatagpuan sa bundok ng __________"}
        fibAnswer={"tabor"}
        mcQuestion={'Ano ang nangyari kay Don Fernando?'}
        mcChoices={['sumigla','nagkasakit','napagod','nagalak']}
        mcAnswer={'nagkasakit'}
        fourPics={[image1, image2, image3, image4,]}
        fourPicsAnswer={'awit'}
        summary={'Nagkaroon ng malubhang karamdaman si Don Fernando buhat sa isang bangungot. Sa kaniyang panaginip ay nakita niya ang bunsong anak na si Don Juan na pinaslang ng dalawang buhong at inihulog sa malalim na balon. Dahil sa pag-aalala ay hindi na nakatulog at nakakain ng maayos ang hari magmula noon hanggang sa ito’y maging buto’t-balat na. Maging ang asawa at mga anak ng Don ay nabahala na din dahil walang sinuman ang makapagbigay ng lunas sa sakit ng hari. Isang medikong paham ang dumating sa kaharian na naghayag na ang tanging lunas sa sakit ng hari ay ang awit ng isang ibon na makikita sa bundok ng Tabor sa may kumikinang na puno ng Piedras Platas. Ang ibon na ito ay matatagpuan lamang tuwing gabi dahil ito ay nasa burol tuwing araw. Nang malaman ang tungkol sa lunas ay agad nag-utos ang pinuno ng monarka sa panganay na si Don Pedro upang hanapin at hulihin ang Ibong Adarna.'}

         />
    </div>
  )
}

export default Chapter2