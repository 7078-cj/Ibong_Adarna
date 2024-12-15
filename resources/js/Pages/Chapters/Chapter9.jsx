import React from 'react'
import Chapter from '../ChapterComponent/Chapter'

function Chapter9({user,num}) {
  return (
    <div>
         <Chapter
        user={user}
        fibQestion={"Habang naglalakad pauwi, palihim na kinakausap ni Don Pedro si Don Diego dahil sa sobrang _____ kay Don Juan."}
        fibAnswer={"inggit"}
        mcQuestion={'Ano ang naging kasunduan nina Don Pedro at Don Diego nang hindi nila matuloy ang pagpapatay kay Don Juan?'}
        mcChoices={['Pabayaan na lang si Don Juan sa kagubatan','Bugbugin na lang si Don Juan','Ibigay ang Ibong Adarna kay Don Juan','Ibalik ang Ibong Adarna sa hari']}
        mcAnswer={'Bugbugin na lang si Don Juan'}
        fourPics={['https://i.pinimg.com/236x/ca/4a/a5/ca4aa5bd0b67e605bca46e33cddb308e.jpg', 
          'https://i.pinimg.com/236x/74/66/9f/74669fb3d94ccc6d374b8b4d2f58958b.jpg',
         'https://i.pinimg.com/236x/ae/7d/bc/ae7dbc7447223b06165d14ad48dda308.jpg',
         'https://i.pinimg.com/236x/c9/c5/95/c9c595075334d24703db3ef1b78b51ed.jpg',]}
        fourPicsAnswer={'kapayapaan'}
        summary={'asdadadsasd 2222222'}

         />
    </div>
  )
}

export default Chapter9