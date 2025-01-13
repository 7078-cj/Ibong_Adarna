import React from 'react'
import Chapter from '../ChapterComponent/Chapter'

import image1 from '../../assets/chapterImage/chapter5/1.jpg'
import image2 from '../../assets/chapterImage/chapter5/2.jpg'
import image3 from '../../assets/chapterImage/chapter5/3.jpg'
import image4 from '../../assets/chapterImage/chapter5/4.jpg'

function Chapter5({user,num}) {
  return (
    <div>
         <Chapter
        user={user}
        fibQestion={"Nakatagpo si Don Juan ng isang matandang __________ na nagbigay ng gabay at payo upang matulungan siya."}
        fibAnswer={"leproso"} // or ermitanyo
        mcQuestion={'Ano ang ginamit ni Don Juan sa kanyang paglalakbay?'}
        mcChoices={['Isang kabayo','Isang barko','Paglalakad lamang','Isang chariot']}
        mcAnswer={'Paglalakad lamang'}
        fourPics={[image1, image2, image3, image4,]}
        fourPicsAnswer={'bato'}
        summary={'Tatlong taon na ang lumipas ay hindi pa rin nakakabalik ang magkapatid na prinsipe samantalang lalong lumubha naman ang sakit ng hari. Atubiling inutusan ni Don Fernando si Don Juan na hanapin ang mga kapatid nito at hulihin ang Ibong Adarna. Humingi ng bendisyon si Don Juan upang payagan ito na umalis para hanapin ang mga kapatid at ang natatanging lunas sa ama. Di katulad ng naunang magkapatid, hindi gumamit si Don Juan ng kabayo sa halip ay naglakad lang ito. Naniniwala ang prinsipe na kusang dadating ang biyaya sa kanya kung mabuti ang kaniyang hangarin. Nagbaon siya ng limang tinapay at kumakain lamang tuwing makaisang buwan. Panay ang usal niya ng panalangin upang makayanan ang hirap. Apat na buwan na siyang naglalakbay at tumigas na ang natitirang baon na tinapay. Paglao’y narating ni Don Juan ang kapatagang bahagi ng bundok Tabor. Doon ay natagpuan niya ang isang leprosong matandang lalaki.'}

         />
    </div>
  )
}

export default Chapter5