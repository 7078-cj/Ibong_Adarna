import React from 'react'
import Chapter from '../ChapterComponent/Chapter'

import image1 from '../../assets/chapterImage/chapter24/1.jpg'
import image2 from '../../assets/chapterImage/chapter24/2.jpg'
import image3 from '../../assets/chapterImage/chapter24/3.jpg'
import image4 from '../../assets/chapterImage/chapter24/4.jpg'

function Chapter24({user,num}) {
  return (
    <div>
         <Chapter
        user={user}
        fibQestion={"Inutusan ng Ibong Adarna si Don Juan na maglakbay patungo sa napakalayo ngunit magandang reyno na matatagpuan sa dakong ________."}
        fibAnswer={"Silangan"}
        mcQuestion={'Saan inutusan ng Ibong Adarna si Don Juan na maglakbay?'}
        mcChoices={['Bundok ng Tabor', 'Reyno delos Cristales', 'Ilog ng Jordan', 'Kaharian ng Berbanya']}
        mcAnswer={'Reyno delos Cristales'}
        fourPics={[image1, image2, image3, image4,]}
        fourPicsAnswer={'Prinsesa'}
        summary={'Ibong Adarna Buod Kabanata 24: Ang Muling Pagkikita ng Ibong Adarna at ni Don Juan (Saknong 758 -794) Nagising si Don Juan dahil sa awit ng Ibong Adarna. Nang magising ay laking tuwa ng prinsipe nang makita niya ang ibon na nakadapo sa sanga. Muling nagsalaysay ang ibon kay Don Juan sa pamamagitan ng awit nito. Natuklasan ng prinsipe na kaya umalis ang ibon ay dahil gusto nitong iligtas ang prinsipe sa isang pasakit. Balak na patayin nina Don Pedro at Don Diego ang ibon at si Don Juan. Inutusan ng Ibong Adarna na maglakbay si Don Juan sa napakalayo ngunit magandang reyno. Ito ay matatagpuan sa dakong silangan. Ayon dito, sa lugar na iyon ay matatagpuan niya ang tatlong magkakapatid na prinsesa na sina Isabel, Juana, at Maria Blanca. Ang kanilang ama ay si Haring Salermo, isang hari na ubod ng tuso at talino. Bilin ng ibon na si Maria Blanca ang piliin sa tatlo dahil walang kaparis ang kagandahan nito. Pumayag ang prinsipe sa utos ng ibon at agad naglakbay patungo Reyno delos Cristales. Sa kabilang banda, puno parin ng pag-aalala si Prinsesa Leonora dahil sa pagkabahala na baka hindi nailigtas ng lobo ang kaniyang mahal na si Don Juan. '}
        num={num}
         />
    </div>
  )
}

export default Chapter24