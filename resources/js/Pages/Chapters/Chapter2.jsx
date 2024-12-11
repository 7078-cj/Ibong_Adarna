import React from 'react'
import Chapter from '../ChapterComponent/Chapter'

function Chapter2({user,num}) {
  return (
    <div>
         <Chapter
        user={user}
        fibQestion={"Ang ibong adarna ay matatagpuan sa bundok ng __________"}
        fibAnswer={"tabor"}
        mcQuestion={'Ano ang nangyari kay Don Fernando?'}
        mcChoices={['sumigla','nagkasakit','napagod','nagalak']}
        mcAnswer={'nagkasakit'}
        fourPics={['https://i.pinimg.com/736x/80/83/b5/8083b5a1eef5cfcaa26bf17ed1bcf0ae.jpg', 
         'https://i.pinimg.com/736x/bb/2e/0c/bb2e0c550c893b34251da5b8acaf955b.jpg',
         'https://i.pinimg.com/736x/b6/20/d3/b620d31c09dbdba9feea8579ba194448.jpg',
         'https://i.pinimg.com/236x/ac/03/bb/ac03bb188ae6f6e241a705931dc68fcb.jpg',]}
        fourPicsAnswer={'awit'}
        summary={'asdadadsasd 2222222'}

         />
    </div>
  )
}

export default Chapter2