import React from 'react'
import Chapter from '../ChapterComponent/Chapter'

import image1 from '../../assets/chapterImage/chapter16/1.jpg'
import image2 from '../../assets/chapterImage/chapter16/2.jpg'
import image3 from '../../assets/chapterImage/chapter16/3.jpg'
import image4 from '../../assets/chapterImage/chapter16/4.jpg'

function Chapter16({user,num}) {
  return (
    <div>
         <Chapter
        user={user}
        fibQestion={"Naninirahan si Don Juan sa Armenya upang __________ at huwag maparusahan sa pagkawala ng Ibong Adarna."}
        fibAnswer={"magtago"}
        mcQuestion={'Ano ang likas na katangian ng kabundukan ng Armenya?'}
        mcChoices={['Maraming disyertong lugar','Paraíso sa kagandahan na may maraming hayop at pananim','Isang lugar na puno ng yelo','Isang lugar na madilim at mapanganib']}
        mcAnswer={'Paraíso sa kagandahan na may maraming hayop at pananim'}
        fourPics={[image1, image2, image3, image4,]}
        fourPicsAnswer={'kabundukan'}
        summary={'Ang kabundukan ng Armenya ay paraiso sa kagandahan. Maraming hayop at pananim sa paligid. Maraming uri ng ibon ang nasa himpapawid. Malinis at malinaw ang tubig sa batis. Walang magugutom sa lugar na iyon dahil sa mayamang kalikasan. Sa lugar na ito naninirahan si Don Juan upang magtago at huwag maparusahan sa pagkawala ng Ibong Adarna. Nahihiya si Don Diego na humarap kay Don Juan dahil sa nagawa na namang pagkakasala subalit dahil kay Don Pedro ay nahikayat nito na tumira sila doon kasama ni Don Juan. Pumayag naman si Don Juan sa panukala ni Don Pedro dahil sa mahal niya ang mga ito. Maligayang nanirahan ang magkakapatid sa kabundukan ng Armenya. Isang bahay na gawa sa kahoy ang naging tirahan nila doon. Lumipas ang panahon at napagpasyahan ng tatlo na tuklasin ang iba pang bahagi ng Armenya na hindi pa nila nararating.'}
        num={num}
         />
    </div>
  )
}

export default Chapter16