import React from 'react'
import Chapter from '../ChapterComponent/Chapter'

import image1 from '../../assets/chapterImage/chapter32/1.jpg'
import image2 from '../../assets/chapterImage/chapter32/2.jpg'
import image3 from '../../assets/chapterImage/chapter32/3.jpg'
import image4 from '../../assets/chapterImage/chapter32/4.jpg'

function Chapter32({user,num}) {
  return (
    <div>
         <Chapter
        user={user}
        fibQestion={"Si Haring Salermo ay nagbigay ng ikalawang pagsubok kay Don Juan kung saan kailangan niyang hulihin ang labindalawang ________ at muling isilid ang mga ito sa prasko bago mag-umaga."}
        fibAnswer={"negrito"}
        mcQuestion={'Ano ang ginamit ni Maria Blanca upang maibalik ang labindalawang negrito sa prasko?'}
        mcChoices={['Mahiwagang singsing','Mahika',' Isang lambat','Panalangin']}
        mcAnswer={'Mahika'}
        fourPics={[image1, image2, image3, image4,]}
        fourPicsAnswer={'karagatan'}
        summary={'Ibong Adarna Buod Kabanata 32: Ang Ikalawang Utos ng Hari (Saknong 1060-1096)\nNagkita si Don Juan at Haring Salermo para sa ikalawang pagsubok.\n\nHabang nasa hardin ay may inilabas ang hari na isang prasko na may lamang labindalawang negrito at pinakawalan ito sa karagatan.\nUtos ng hari na hulihin ang lahat ng iyon at muling isilid sa prasko.\nNais ng hari na makita iyon kinaumagahan upang makaligtas sa kaparusahang kamatayan.\n\nMalungkot na nakipagkita si Don Juan kay Maria Blanca dahil sa pangambang hindi niya makumpleto ang labindalawang negrito dahil sa lawak ng karagatan.\nPinayapa ni Maria Blanca si Don Juan at inutusang kumuha ng ilaw.\n\nNang sumapit ang ikaapat ng madaling araw ay nagtungo ang dalawa sa tabing dagat.\nGinamit ng prinsesa ang kaniyang mahika at inutusan ang mga negrito na bumalik sa prasko kung ayaw nilang matikman ang kaniyang galit.\n\nKinaumagahan ay nakita ng hari ang prasko at ang labindalawang negrito sa loob nito.\nNagalit ang hari dahil hindi niya magawang kitilin si Don Juan katulad ng ginawa niya sa ibang mga nagtangkang manligaw sa kaniyang anak.\n\nUmisip ito ng mas mabigat na pagsubok.'}
        num={num}
         />
    </div>
  )
}

export default Chapter32