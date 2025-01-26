import React from 'react'
import Chapter from '../ChapterComponent/Chapter'

import image1 from '../../assets/chapterImage/chapter4/1.jpg'
import image2 from '../../assets/chapterImage/chapter4/2.jpg'
import image3 from '../../assets/chapterImage/chapter4/3.jpg'
import image4 from '../../assets/chapterImage/chapter4/4.jpg'

function Chapter4({user,num}) {
  return (
    <div>
         <Chapter
        user={user}
        fibQestion={"Si Don Pedro ay naging __________ matapos dumumi ang Ibong Adarna"}
        fibAnswer={"bato"}
        mcQuestion={'Ilang buwan ang paghahanap ni don Diego bago niya natagpuan ang Piedras Platas?'}
        mcChoices={['Anim na buwan','Apat na buwan','Limang buwan','Tatlong buwan']}
        mcAnswer={'Limang buwan'}
        fourPics={[image1, image2, image3, image4,]}
        fourPicsAnswer={'tulog'}
        summary={'Dahil sa nangyari ay hindi na nakabalik ng kaharian ng Berbanya si Don Pedro. Inatasan ni Don Fernando ang ikalawang anak na si Don Diego na hanapin ang nawawalang kapatid at hulihin ang Ibong Adarna. \n\nNaglakbay si Don Diego ng mahigit limang buwan bago nito tuluyang marating ang Piedras Platas. Nagpapahinga ito sa isang bato doon nang biglang dumating ang Ibong Adarna. Nasaksihan ng kaniyang mga mata ang pitong beses na pag-awit at pagpapalit ng kulay ng balahibo ng ibon. \n\nHindi nito naiwasang makatulog dahil sa lamyos ng tinig ng mahiwagang ibon. Napatakan muli ng dumi ng ibon si Don Diego dahilan kung bakit naging bato rin ito. Parang isang libingan ang ilalaim ng puno ng Piedras Platas dahil sa dalawang prinsipe na kapwa naging bato.'}
        num={num}
         />
    </div>
  )
}

export default Chapter4