import React from 'react'
import Chapter from '../ChapterComponent/Chapter'

function Chapter5({user,num}) {
  return (
    <div>
         <Chapter
        user={user}
        fibQestion={"Nakatagpo si Don Juan ng isang matandang __________ na nagbigay ng gabay at payo upang matulungan siya."}
        fibAnswer={"leproso"}
        mcQuestion={'Ano ang ginamit ni Don Juan sa kanyang paglalakbay?'}
        mcChoices={['Isang kabayo','Isang barko','Paglalakad lamang','Isang chariot']}
        mcAnswer={'Paglalakad lamang'}
        fourPics={['https://i.pinimg.com/236x/e7/05/b1/e705b186fe1ecd442f9cbc224395f318.jpg', 
         'https://i.pinimg.com/236x/86/33/d7/8633d7b74eecaeb25325d919de002ed1.jpg',
         'https://i.pinimg.com/236x/ff/93/02/ff93027143a8e1b273172fce8bf936a2.jpg',
         'https://i.pinimg.com/236x/3d/f1/f8/3df1f82d7aeef64c8ca62eefdf325d98.jpg',]}
        fourPicsAnswer={'bato'}
        summary={'asdadadsasd 2222222'}

         />
    </div>
  )
}

export default Chapter5