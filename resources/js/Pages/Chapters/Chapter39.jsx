import React from 'react'
import Chapter from '../ChapterComponent/Chapter'

import image1 from '../../assets/chapterImage/chapter39/1.jpg'
import image2 from '../../assets/chapterImage/chapter39/2.jpg'
import image3 from '../../assets/chapterImage/chapter39/3.jpg'
import image4 from '../../assets/chapterImage/chapter39/4.jpg'

function Chapter39({user,num}) {
  return (
    <div>
         <Chapter
        user={user}
        fibQestion={"Sa isang iglap ay biglang nakalimot si Don Juan sa binitiwang pangako kay Maria Blanca nang makita si Prinsesa ________ "}
        fibAnswer={"Leonora"}
        mcQuestion={'Ano ang ibig sabihin ng "magarbo"?'}
        mcChoices={['Engrande o Bongga','Mayaman','Mahirap','Simple']}
        mcAnswer={'Engrande o Bongga'}
        fourPics={[image1, image2, image3, image4,]}
        fourPicsAnswer={'prinsesa'}
        summary={'Ibong Adarna Buod Kabanata 39: Ang Sumpaan (Saknong 1383 – 1425) Nang makarating sa palasyo ay nagpaalam si Don Juan kay Maria Blanca na iiwan muna ito sa isang nayon habang siya ay mauuna nang pumasok sa palasyo upang makapaghanda ng isang magarbong pagsalubong para sa prinsesa. Sa una ay tutol ang dalaga ngunit wala din itong nagawa. Mahigpit na nagbilin si Maria Blanca kay Don Juan na huwag titingin o lalapit man lang sa kung sinumang babae sa palasyo. Nangako ang prinsipe na hindi ito makakalimot sa ginawang sumpaan. Hiningi ni Don Juan ang bendisyun ng ama at malugod na tinanggap ni Haring Fernando ang anak. Sa ga oras na iyon ay naroon din si Prinsesa Leonora. Nagtapat ito sa prinsipe na pitong taon na siyang naghihintay sa muling pagbabalik nito. Sa isang iglap ay biglang nakalimot si Don Juan sa binitiwang pangako kay Maria Blanca nang makita si Prinsesa Leonora. Natuklasan din ng hari ang ginawang pagtataksil ni Don Pedro sa kapatid. Dahil dito ay hinayaan ng hari na pumili si Prinsesa Leonora ng kaniyang papakasalan sa pagitan nina Don Juan at Don Pedro.'}
        num={num}
         />
    </div>
  )
}

export default Chapter39