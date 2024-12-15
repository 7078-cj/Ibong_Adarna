import React from 'react'
import Chapter from '../ChapterComponent/Chapter'

function Chapter12({user,num}) {
  return (
    <div>
         <Chapter
        user={user}
        fibQestion={"Natagpuan ng matandang ermitanyo si Don Juan na nakahandusay sa libis ng _____."}
        fibAnswer={"bundok"}
        mcQuestion={'Ano ang ginawa ng matandang ermitanyo upang matulungan si Don Juan?'}
        mcChoices={['Tinulungan siya tumayo','Pinagaling ang mga sugat ni Don Juan','Inalok siya ng pagkain','Pinaalis siya sa bundok']}
        mcAnswer={'Pinagaling ang mga sugat ni Don Juan'}
        fourPics={['https://i.pinimg.com/236x/f5/86/7a/f5867afd4201cf719ee1740ab2bc820a.jpg', 
         'https://i.pinimg.com/236x/70/d0/3c/70d03c96799e7ee984d6a99894352076.jpg',
         'https://i.pinimg.com/236x/9f/64/df/9f64dfa94d9f44aaf39817e0ca0df1e9.jpg',
         'https://i.pinimg.com/236x/1e/93/7e/1e937ecdf5975aa01d9110a288ceb32e.jpg',]}
        fourPicsAnswer={'pagpapagaling'}
        summary={'asdadadsasd 2222222'}

         />
    </div>
  )
}

export default Chapter12