import React from 'react'
import Chapter from '../ChapterComponent/Chapter'

import image1 from '../../assets/chapterImage/chapter12/1.jpg'
import image2 from '../../assets/chapterImage/chapter12/2.jpg'
import image3 from '../../assets/chapterImage/chapter12/3.jpg'
import image4 from '../../assets/chapterImage/chapter12/4.jpg'

function Chapter12({user,num}) {
  return (
    <div>
         <Chapter
        user={user}
        fibQestion={"Natagpuan ng matandang ermitanyo si Don Juan na nakahandusay sa libis ng _____."}
        fibAnswer={"bundok"}
        mcQuestion={'Ano ang ginawa ng matandang ermitanyo upang matulungan si Don Juan?'}
        mcChoices={['Tinulungan siya tumayo','Pinagaling ang mga sugat ni Don Juan','Inalok siya ng pagkain','Pinaalis siya sa bundok']}
        mcAnswer={'Pinagaling ang mga sugat ni Don Juan'}
        fourPics={[image1, image2, image3, image4,]}
        fourPicsAnswer={'pinagaling'}
        summary={'Biglang sumulpot ang matandang ermitanyo sa libis ng isang bundok. Doon niya natagpuang nakahandusay sa lupa si Don Juan. Labis na nahabag ang ermitanyo sa sinapit ng prinsipe. Sa ikalawang pagkakataon ay muling ginamot ng matanda ang sugat ni Don Juan. Sa isang iglap ay biglang naglaho ang mga sugat sa katawan ng prinsipe. Namangha muli si Don Juan sa isang pang himala na nasaksihan niya. Niyakap nito ang matandang ermitanyo tanda ng kaniyang pagpapasalamat dahil sa pagliligtas sa kaniyang buhay. Pagkatapos ay inutos ng matanda na umuwi na si Don Juan sa palasyo upang iligtas ang amang hari. Madaling tinahak ng prinsipe ang daan pabalik sa kaharian ng Berbanya.'}

         />
    </div>
  )
}

export default Chapter12