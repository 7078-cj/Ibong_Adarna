import React from 'react'
import Chapter from '../ChapterComponent/Chapter'

import image1 from '../../assets/chapterImage/chapter19/1.jpg'
import image2 from '../../assets/chapterImage/chapter19/2.jpg'
import image3 from '../../assets/chapterImage/chapter19/3.jpg'
import image4 from '../../assets/chapterImage/chapter19/4.jpg'

function Chapter19({user,num}) {
  return (
    <div>
         <Chapter
        user={user}
        fibQestion={"Ang nagbabantay sa hardin ay isang malupit na __________."}
        fibAnswer={"higante"}
        mcQuestion={'Saan matatagpuan si Prinsesa Leonora?'}
        mcChoices={['Sa isang kagubatan na puno ng mga bulaklak','Sa isang palasyo na may malaking hagdanang ginto','Sa isang kuweba sa ilalim ng bundok','Sa isang kabundukan na may yelo']}
        mcAnswer={'Sa isang palasyo na may malaking hagdanang ginto'}
        fourPics={[image1, image2, image3, image4,]}
        fourPicsAnswer={'serpyente'}
        summary={'Nagbabala si Donya Juana kay Don Juan na ang nagbabantay sa hardin ay isang malupit na higante. Maya-maya pa’y lumabas ang higante dahil may naamoy daw ito na tao. Laking tuwa ng higante dahil hindi na niya kinakailangang mamundok upang humanap ng makakain. Nagalit si Don Juan sa higante at hinarap niya ito. Nakipaglaban ang prinsipe gamit ang kaniyang matalas na espada hanggang sa matalo ang higante. Ayaw umalis ni Donya Juana sa lugar na iyon hanggang di niya kasama ang bunsong kapatid na si Prinsesa Leonora. Nakiusap ito kay Don Juan na iligtas ang kaniyang kapatid. Muling nagbigay ng babala si Donya Juana kay Don Juan dahil ang tagapagbantay naman ni Prinsesa Leonora ay serpyente na may pitong ulo. Mas mabagsik ito kumpara sa higante dahil kahit tagpasin ang ulo ay muling tutubo at mabubuhay ito. Matatagpuan si Prinsesa Leonora sa di kalayuang palasyo na may malaking hagdanang ginto.'}
        num={num}
         />
    </div>
  )
}

export default Chapter19