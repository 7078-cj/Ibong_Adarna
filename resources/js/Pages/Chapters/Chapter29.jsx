import React from 'react'
import Chapter from '../ChapterComponent/Chapter'

import image1 from '../../assets/chapterImage/chapter29/1.jpg'
import image2 from '../../assets/chapterImage/chapter29/2.jpg'
import image3 from '../../assets/chapterImage/chapter29/3.jpg'
import image4 from '../../assets/chapterImage/chapter29/4.jpg'

function Chapter29({user,num}) {
  return (
    <div>
         <Chapter
        user={user}
        fibQestion={"Sumapit ang ________ ng madaling araw at dumapo ang tatlong kalapati sa puno ng peras."}
        fibAnswer={"alas-kwatro"}
        mcQuestion={'Ano ang ibig sabihin ng "nagkubli"?'}
        mcChoices={['Naglakbay', 'Nagbigay', 'Nagtago', 'Naghanap']}
        mcAnswer={'Nagtago'}
        fourPics={[image1, image2, image3, image4,]}
        fourPicsAnswer={'kalapati'}
        summary={'Ibong Adarna Buod Kabanata 29: Ang Reyno Delos Cristales (Saknong 934 – 960) Gaya ng inasahan, nakarating ang agila at si Don Juan sa banyo ni Maria Blanca pagkatapos ng isang buwang paglipad. Hindi tumigil sa paglipad ang agila at naubos na din ang kanilang baon na pagkain. Nang makarating sa banyong paliguan ni Maria Blanca ay bumaba si Don Juan mula sa likod ng higanteng agila. Ito ay nagkubli sa likod ng halamanan. Ganap na alas-kwatro ng madaling araw ay dadating ang dalaga kasama ang kaniyang dalawang kapatid upang maligo. Malalaman niya kung sino sa tatlo si Maria Blanca dahil natatangi ang kaniyang ganda. Nagbilin din ang higanteng agila na magtago at hintayin ang pagdapo ng tatlong kalapati sa puno ng peras. Naiwan si Don Juan at naghintay. Sumapit ang alas-kwatro ng madaling araw at dumapo ang tatlong kalapati sa puno ng peras. Nakita ng prinsipe si Maria Blanca at nabihag ang puso nito. Mas lalong nahaling ito nang maghubad ng damit si ang dalaga. Lumusong si Maria Blanca sa tubig at naligo. Nang magkaroon ng pagkakataon ay kinuha ni Don Juan ang mga damit ng dalaga at pinaghahalikan ito. Nabigla ang prinsesa nang makitang wala na doon ang kaniyang mga damit at nagbanta na papatayin ang sinumang kumuha ng mga ito.  '}
        num={num}
         />
    </div>
  )
}

export default Chapter29