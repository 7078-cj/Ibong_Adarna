import React from 'react'
import Chapter from '../ChapterComponent/Chapter'

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
        fourPics={['https://i.pinimg.com/736x/02/59/69/0259699a168aea21ba838cd4873a1fdc.jpg', 
         'https://i.pinimg.com/236x/3f/6c/89/3f6c89b7e2123f425cd28f0d3bfb6703.jpg',
         'https://i.pinimg.com/236x/ff/09/60/ff0960335eb979efec40804abadfea71.jpg',
         'https://i.pinimg.com/236x/d3/dd/ad/d3ddad2729916d771e839f3a14dc094e.jpg',]}
        fourPicsAnswer={'kabundukan'}
        summary={'asdadadsasd 2222222'}

         />
    </div>
  )
}

export default Chapter16