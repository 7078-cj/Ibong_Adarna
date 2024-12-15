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
        summary={'asdadadsasd 2222222'}

         />
    </div>
  )
}

export default Chapter16