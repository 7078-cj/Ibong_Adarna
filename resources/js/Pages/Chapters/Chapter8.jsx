import React from 'react'
import Chapter from '../ChapterComponent/Chapter'

function Chapter8({user,num}) {
  return (
    <div>
         <Chapter
        user={user}
        fibQestion={"Si Don Pedro at Don Diego ay na __________ matapos mabuhusan ni Don Juan ng tubig mula sa balon."}
        fibAnswer={"buhay"}
        mcQuestion={'Ano ang ginawa ni Don Juan upang buhayin ang kanyang mga kapatid na naging bato?'}
        mcChoices={['Binuhusan ng tubig','Inihaplos ng langis','Binanggit ang kanilang pangalan','Pinuno ng mga dasal']}
        mcAnswer={'Binuhusan ng tubig'}
        fourPics={['https://i.pinimg.com/236x/66/ce/21/66ce21742a79d705df45d1c0ccd5be12.jpg', 
          'https://i.pinimg.com/236x/35/45/ee/3545ee9f10fc41522148822399225d5e.jpg',
         'https://i.pinimg.com/236x/8c/eb/9b/8ceb9b1903430108524445bf0f4d83e3.jpg',
         'https://i.pinimg.com/236x/ba/38/c6/ba38c6b88314f67d0db447dfe426ab09.jpg',]}
        fourPicsAnswer={'piging'}
        summary={'asdadadsasd 2222222'}

         />
    </div>
  )
}

export default Chapter8