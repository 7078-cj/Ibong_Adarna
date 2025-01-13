import React from 'react'
import Chapter from '../ChapterComponent/Chapter'

import image1 from '../../assets/chapterImage/chapter14/1.jpg'
import image2 from '../../assets/chapterImage/chapter14/2.jpg'
import image3 from '../../assets/chapterImage/chapter14/3.jpg'
import image4 from '../../assets/chapterImage/chapter14/4.jpg'

function Chapter14({user,num}) {
  return (
    <div>
         <Chapter
        user={user}
        fibQestion={"Si Don Diego ay madalas _____ habang nagbabantay sa Ibong Adarna."}
        fibAnswer={"antukin"} // makatulog
        mcQuestion={'Ano ang nangyari habang natutulog si Don Juan?'}
        mcChoices={['Tinulungan siya ng mga kawal','Sinamantala ng dalawang kapatid na pakawalan ang Ibong Adarna','Nagdasal siya para sa kaligtasan ng Ibong Adarna','Dumating ang hari at binantayan ang ibon']}
        mcAnswer={'Sinamantala ng dalawang kapatid na pakawalan ang Ibong Adarna'}
        fourPics={[image1, image2, image3, image4,]}
        fourPicsAnswer={'paglaya'}
        summary={'Giliw na giliw ang hari sa Ibong Adarna. Gabi-gabi kung ito’y dalawin ng hari. Napagpasyahan ng hari na ipabantay ang Ibong Adarna sa mga anak upang hindi ito mawala o makatakas man. Nagbabala ang hari na mananagot ang sinumang magpabaya sa ibon. Halinhinang nagbabantay ang magkakapatid. Di naman sang-ayon si Don Pedro sa pagbabantay dahil siya ay isang prinsipe. Si Don Diego naman ay mabilis antukin at madalas na mainip sa bagal ng oras habang nagbabantay. Habang si Don Juan naman ay idinadaan sa pagkausap sa Ibong Adarna upang hindi dalawin ng antok. Muling nagbalak ng kataksilan ang dalawang magkapatid. Sa una’y hindi sumang-ayon si Don Diego ngunit napapayag din ito matapos pangakuan ni Don Pedro na gagawin siyang kanang kamay kapag naging hari ito. Nakatulog si Don Juan sa puyat at pagod dahil sa magkasunod na skedyul ng pagbabantay nito sa ibon. Habang natutulog ay sinamantala ng dalawa niyang kapatid na pakawalan ang Ibong Adarna.'}

         />
    </div>
  )
}

export default Chapter14