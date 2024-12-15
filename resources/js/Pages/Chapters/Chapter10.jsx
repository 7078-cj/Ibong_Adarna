import React from 'react'
import Chapter from '../ChapterComponent/Chapter'

function Chapter10({user,num}) {
  return (
    <div>
         <Chapter
        user={user}
        fibQestion={"Nang hindi kumanta ang Ibong Adarna, naalala ng hari ang __________ tungkol sa kanyang bunsong anak na pinaslang."}
        fibAnswer={"panaginip"}
        mcQuestion={'Ano ang nangyari sa hari pagkatapos makita ang Ibong Adarna?'}
        mcChoices={['Mas gumaan ang pakiramdam ng hari','Lumala ang kanyang sakit','Nawala ang sakit ng hari','Naging malakas at masigla ang hari']}
        mcAnswer={'Lumala ang kanyang sakit'}
        fourPics={['https://i.pinimg.com/236x/86/50/31/865031f87f869a8e7c0cd0bd133c2679.jpg', 
         'https://i.pinimg.com/236x/41/1c/90/411c908a3abe3c69c71b9325d0fbca59.jpg',
         'https://i.pinimg.com/236x/ed/82/a0/ed82a013326cc736286468b7990b46bc.jpg',
         'https://i.pinimg.com/736x/80/c4/2a/80c42aab674755fbc68551d3b3542a5f.jpg',]}
        fourPicsAnswer={'karamdaman'}
        summary={'asdadadsasd 2222222'}

         />
    </div>
  )
}

export default Chapter10