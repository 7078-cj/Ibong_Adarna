import React from 'react'
import Chapter from '../ChapterComponent/Chapter'

import image1 from '../../assets/chapterImage/chapter46/1.jpg'
import image2 from '../../assets/chapterImage/chapter46/2.jpg'
import image3 from '../../assets/chapterImage/chapter46/3.jpg'
import image4 from '../../assets/chapterImage/chapter46/4.jpg'

function Chapter46({user,num,lvlData}) {
  return (
    <div>
         <Chapter
        user={user}
        fibQestion={"Ipinagtaka ni Don Juan ang mabilis na pagdating nila sa Reyno delos Cristales. Kung ang una niyang paglalakbay ay inabot ng isang buwan ngayon naman ay nakarating sila sa kaharian sa loob ng ________ oras."}
        fibAnswer={"isang"}
        mcQuestion={'Ano ang ibig sabihin ng salitang "yumao"?'}
        mcChoices={['yumaman','umalis','naglakbay', 'namatay']}
        mcAnswer={'namatay'}
        fourPics={[image1, image2, image3, image4,]}
        fourPicsAnswer={'piging'}
        summary={'Ibong Adarna Buod Kabanata 46: Ang Hari at Reyna ng Reyno Delos Cristales (Saknong 1693 – 1717) Ipinagtaka ni Don Juan ang mabilis na pagdating nila sa Reyno delos Cristales. Kung ang una niyang paglalakbay ay inabot ng isang buwan ngayon naman ay nakarating sila sa kaharian sa loob ng isang oras. Matagal-tagal na din mula ng yumao ang amang hari at ang kaniyang mga kapatid na prinsesa. Nasa pamumuno man ng iba ang kaharian ay nanatili itong mapayapa. Masayang tinanggap ng mamamayan ng reyno ang pagdating ni Maria Blanca bilang bagong reyna. Ang mga isinumpa ni Haring Salermo ay nakalaya na. Nagkaroon ng isang malaking piging sa kaharian at nagpahayag si Maria Blanca na si Don Juan na ang bagong hari ng kaharian. Siyam na araw na nagdiwang ang kaharian. Mas lalo pang umunlad ang Reyno delos Cristales dahil sa magandang pamamalakad ng hari at reyna. '}
        num={num}
        lvl={lvlData}
         />
    </div>
  )
}

export default Chapter46