import React from 'react'
import Chapter from '../ChapterComponent/Chapter'

import image1 from '../../assets/chapterImage/chapter22/1.jpg'
import image2 from '../../assets/chapterImage/chapter22/2.jpg'
import image3 from '../../assets/chapterImage/chapter22/3.jpg'
import image4 from '../../assets/chapterImage/chapter22/4.jpg'

function Chapter22({user,num}) {
  return (
    <div>
         <Chapter
        user={user}
        fibQestion={"Ang prinsesa ay nagkaroon muli ng malay habang nasa bisig ni _______"}
        fibAnswer={"Don Pedro"}
        mcQuestion={'Ano ang ibig sabihin ng salitang "paglilinlang" mula sa kabanata?'}
        mcChoices={['Pagsisinungaling', 'Pangloloko', 'Paglilinis', 'Pangungusap']}
        mcAnswer={'Pangloloko'}
        fourPics={[image1, image2, image3, image4,]}
        fourPicsAnswer={'lobo'}
        summary={'Ibong Adarna Buod Kabanata 22: Ang Panibagong Panlilinlang (Saknong 659 – 731) Nang umalis ay naiwan ni Prinsesa Leonora ang singsing na diyamante na pinamana pa ng kaniyang ina. Tanging ang kanyang lobo lamang ang naisama. Dahil sa ginawang pagtataksil ng kapatid ay nahimatay si Prinsesa Leonora. Nagkaroon muli ng malay ang prinsesa habang nasa bisig ni Don Pedro. Ipinangako ni Don Pedro na gagawin niyang reyna ng Berbanya si Prinsesa Leonora. Pinakawalan ng prinsesa ang alagang lobo at inutusang iligtas si Don Juan. Umuwi si Don Pedro at Don Diego kasama ang dalawang prinsesa. Sinabi ni Don Pedro na hindi nila natagpuan si Don Juan sa halip ay iniligtas nila ang dalawang prinsesa sa kamay ng higante at ng serpyente. Iniutos ng hari na maikasal agad ang apat ngunit tumanggi si Prinsesa Leonora sa hari at nakiusap na ipakasal ito pagkaraan ng pitong taon dahil siya ay may panata. Pumayag ang hari na sina Don Diego at Donya Juana muna ang ipakasal. Nagkaroon ng siyam na araw na pagdiriwang sa kaharian. '}

         />
    </div>
  )
}

export default Chapter22