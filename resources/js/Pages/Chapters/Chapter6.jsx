import React from 'react'
import Chapter from '../ChapterComponent/Chapter'

import image1 from '../../assets/chapterImage/chapter6/1.jpg'
import image2 from '../../assets/chapterImage/chapter6/2.jpg'
import image3 from '../../assets/chapterImage/chapter6/3.jpg'
import image4 from '../../assets/chapterImage/chapter6/4.jpg'

function Chapter6({user,num}) {
  return (
    <div>
         <Chapter
        user={user}
        fibQestion={"Ayon sa ermitanyo, kailangan ni Don Juan na hiwain ang kanyang palad at pigaan ng _____ upang manatiling gising."}
        fibAnswer={"dayap"}
        mcQuestion={'Ano ang ibinigay ng ermitanyo kay Don Juan upang matulungan siya?'}
        mcChoices={['Isang gintong sintas','Isang kabayo','Isang espada','Isang lihim na mapa']}
        mcAnswer={'Isang gintong sintas'}
        fourPics={[image1, image2, image3, image4,]}
        fourPicsAnswer={'payo'}
        summary={'Humingi ng limos ang ermitanyo kay Don Juan. Ibinigay ng prinsipe ang natitirang tinapay sa matanda. Nagbilin ang ermitanyo kay Don Juan nang malaman nito ang pakay ng binata. Hinabilin ng matanda na huwag masisilaw sa kinang ng puno sa halip ay tumingin sa ibaba upang makita ang isang dampa. \n\nDoon ay matatanaw ni Don Juan ang isang pang ermitanyo na siyang makakatulong sa paghahanap ng lunas sa may sakit. Nang marating ni Don Juan ang Piedras Platas ay muntik nang malimutan nito ang bilin ng leprosong ermitanyo dahil sa pagkamangha sa kaniyang nasaksihan. Muli lang nagbalik ang kanyang diwa nang makita niya ang dampa. \n\nNarating ni Don Juan ang dampa at nakita ang tinapay na ibinigay niya sa leprosong ermitanyo. Dito ay nalaman ng prinsipe na isang engkantado ang Ibong Adarna. Ito ay masisilayan lamang tuwing gabi, pitong beses na umaawit at pitong beses din kung magpalit ng kulay ng balahibo. \n\nBilin ng ermitanyo na sa oras na umawit ang Ibong Adarna ay kailangan niyang hiwain ang palad at pigaan ng dayap upang mapaglabanan ang antok. Binigyan din nito ang binata ng sintas na ginto upang gamiting panghuli at panggapos sa ibon.'}
        num={num}
         />
    </div>
  )
}

export default Chapter6