import React from 'react'
import Chapter from '../ChapterComponent/Chapter'

function Chapter13({user,num}) {
  return (
    <div>
         <Chapter
        user={user}
        fibQestion={"Si Don Juan ay __________ sa hari upang humingi ng tawad para sa kanyang mga kapatid."}
        fibAnswer={"lumuhod"}
        mcQuestion={'Ano ang ginawa ng Ibong Adarna habang nagpapalit ng kulay ng balahibo?'}
        mcChoices={['Kumanta at inilahad ang buong katotohanan','Tumawa at nagbigay ng payo','Nagpahinga','Lumipad palayo']}
        mcAnswer={'Kumanta at inilahad ang buong katotohanan'}
        fourPics={['https://i.pinimg.com/236x/9d/12/32/9d1232d00d8685e7e6f08c89d95713a2.jpg', 
         'https://i.pinimg.com/236x/06/81/b9/0681b9d8d97ea0c41cbef73b098fbacd.jpg',
         'https://i.pinimg.com/236x/62/f3/54/62f354acf630a3eb4d0c6a8b1ccc8812.jpg',
         'https://i.pinimg.com/236x/59/09/6e/59096e0f4a73d0cc1152fbc61bbe1caf.jpg',]}
        fourPicsAnswer={'kasiyahan'}
        summary={'asdadadsasd 2222222'}

         />
    </div>
  )
}

export default Chapter13