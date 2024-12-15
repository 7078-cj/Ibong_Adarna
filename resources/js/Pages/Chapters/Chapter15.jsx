import React from 'react'
import Chapter from '../ChapterComponent/Chapter'

function Chapter15({user,num}) {
  return (
    <div>
         <Chapter
        user={user}
        fibQestion={"Si Don Diego ay madalas _____ habang nagbabantay sa Ibong Adarna."}
        fibAnswer={"antukin"}
        mcQuestion={'Bakit umalis si Don Juan mula sa kaharian ng Berbanya?'}
        mcChoices={['Dahil gusto niyang maglakbay','Dahil batid niyang kailangan niyang magtago matapos magpabaya sa Ibong Adarna','Dahil pinagalitan siya ng hari','Dahil hindi siya gusto ng kanyang mga kapatid']}
        mcAnswer={'Dahil batid niyang kailangan niyang magtago matapos magpabaya sa Ibong Adarna'}
        fourPics={['https://i.pinimg.com/236x/15/14/5e/15145e68739599d98fc26ffe1b58a424.jpg', 
         'https://i.pinimg.com/236x/c0/7d/87/c07d870620848c21ef523720509de0d5.jpg',
         'https://i.pinimg.com/236x/d8/aa/d9/d8aad938f2beea672124ebf1309584c7.jpg',
         'https://i.pinimg.com/236x/4c/13/3b/4c133b04684a6d83d3a0b8e6cc32fc0a.jpg',]}
        fourPicsAnswer={'paglisan'}
        summary={'asdadadsasd 2222222'}

         />
    </div>
  )
}

export default Chapter15