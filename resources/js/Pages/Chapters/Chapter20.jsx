import React from 'react'
import Chapter from '../ChapterComponent/Chapter'

function Chapter20({user,num}) {
  return (
    <div>
         <Chapter
        user={user}
        fibQestion={"Habang sila ay nag-uusap, nakaramdam sila ng __________ ang buong paligid, na nagdulot ng takot sa kanilang dalawa."}
        fibAnswer={"pagyanig"}
        mcQuestion={'Bakit minamadali ni Prinsesa Leonora na paalisin si Don Juan?'}
        mcChoices={['Dahil ayaw niya ng bisita','Dahil takot siyang dumating ang serpyente','Dahil gusto niyang mag-isa','Dahil may ibang tao siyang pinapakita']}
        mcAnswer={'Dahil takot siyang dumating ang serpyente'}
        fourPics={['https://i.pinimg.com/236x/cc/ab/09/ccab096595bc1a9036c26279941255bb.jpg', 
         'https://i.pinimg.com/236x/1a/ab/5d/1aab5dfb3e2392af84872a187b3c6af4.jpg',
         'https://i.pinimg.com/236x/78/49/5a/78495a449f91f2090e2f8e2607a98706.jpg',
         'https://i.pinimg.com/736x/f0/72/0d/f0720db7cab8d12b78762b1438f3a85c.jpg',]}
        fourPicsAnswer={'pagibig'}
        summary={'asdadadsasd 2222222'}

         />
    </div>
  )
}

export default Chapter20