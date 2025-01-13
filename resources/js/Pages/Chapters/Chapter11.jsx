import React from 'react'
import Chapter from '../ChapterComponent/Chapter'

import image1 from '../../assets/chapterImage/chapter11/1.jpg'
import image2 from '../../assets/chapterImage/chapter11/2.jpg'
import image3 from '../../assets/chapterImage/chapter11/3.jpg'
import image4 from '../../assets/chapterImage/chapter11/4.jpg'

function Chapter11({user,num}) {
  return (
    <div>
         <Chapter
        user={user}
        fibQestion={"Bagama't naghihirap, hindi nakalimutan ni Don Juan ang __________ ng kanyang ama, ang inang labis niyang pinanabikan, at ang bayang kaniyang sinilangan."}
        fibAnswer={"kalagayan"}
        mcQuestion={'Ano ang tanging pinagkukunan ng pag-asa ni Don Juan?'}
        mcChoices={['Ang kanyang mga kapatid','Ang panalangin','Ang Ibong Adarna','Ang kanyang lakas']}
        mcAnswer={'Ang panalangin'}
        fourPics={[image1, image2, image3, image4,]}
        fourPicsAnswer={'panalangin'}
        summary={'Wala nang ibang pinagkukunan ng pag-asa si Don Juan kundi ang panalangin. Ipinalanagin niya sa Mahal na Birhen na humaba pa ang buhay at gumaling ang amang may karamdaman. Para kay Don Juan ay kaya niyang ibigay ang Ibong Adarna sa kaniyang mga kapatid kung ito ang hangad ng mga ito at hindi na ito dapat pinagtaksilan pa. Bagama’t naghihirap ay hindi niya nakalimutang sariwain ang kalagayan ng may sakit na ama, ang inang kaniyang labis na pinanabikan, ang kahariang kinalakhan, at ang bayang kaniyang sinilangan.'}

         />
    </div>
  )
}

export default Chapter11