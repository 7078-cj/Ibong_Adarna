import React from 'react'
import Chapter from '../ChapterComponent/Chapter'

function Chapter2({user}) {
  return (
    <div>
         <Chapter
        user={user}
        fibQestion={"The capital of France is 2 _____."}
        fibAnswer={"Paris"}
        mcQuestion={'Saan naganap ang kwento? 2'}
        mcChoices={['Albania',' Kardavia','Berbanya','Dystopia']}
        mcAnswer={'Berbanya'}
        fourPics={['https://via.placeholder.com/150/FF5733', 
         'https://via.placeholder.com/150/33FF57',
         'https://via.placeholder.com/150/3357FF',
         'https://via.placeholder.com/150/57FF33',]}
        fourPicsAnswer={'Color'}
        summary={'asdadadsasd 2222222'}

         />
    </div>
  )
}

export default Chapter2