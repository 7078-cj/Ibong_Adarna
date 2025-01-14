import React from 'react'
import Chapter from '../ChapterComponent/Chapter'

import image1 from '../../assets/chapterImage/chapter45/1.jpg'
import image2 from '../../assets/chapterImage/chapter45/2.jpg'
import image3 from '../../assets/chapterImage/chapter45/3.jpg'
import image4 from '../../assets/chapterImage/chapter45/4.jpg'

function Chapter45({user,num}) {
  return (
    <div>
         <Chapter
        user={user}
        fibQestion={"Pagkatapos ng kasal nina Don Juan at Maria Blanca ay nagpaalam na ang mga ito upang magbalik sa ________"}
        fibAnswer={"Reyno delos Cristales"}
        mcQuestion={'Sino ang naging hari at reyna ng kaharian ng Berbanya?'}
        mcChoices={['Juan at Leonora','Juan at Maria Blanca','Pedro at Maria Blanca', 'Pedro at Leonora']}
        mcAnswer={'Pedro at Leonora'}
        fourPics={[image1, image2, image3, image4,]}
        fourPicsAnswer={'hari'}
        summary={'Ibong Adarna Buod Kabanata 45: Ang Masayang Yugto (Saknong 1681 – 1692) Naging makatuwiran si Haring Fernando at pinili kung ano ang nararapat. Ipinakasal ng hari si Don Juan kay Maria Blanca. Wala namang nagawa si Prinsesa Leonora kundi tanggapin ang kapasyahan ng hari. Nais ni Don Fernando na ipamana ang kaharian ng Berbanya kay Don Juan ngunit sinabi ni Maria Blanca na ipagkaloob nalang ito kay Don Pedro sapagkat pamumunuan ni Don Juan ang Reyno delos Cristales. Binasbasan ng Arsobispo si Don Pedro bilang hari at si Prinsesa Leonora bilang Reyna ng Berbanya. Pagkatapos ng kasal nina Don Juan at Maria Blanca ay nagpaalam na ang mga ito upang magbalik sa Reyno delos Cristales. '}

         />
    </div>
  )
}

export default Chapter45