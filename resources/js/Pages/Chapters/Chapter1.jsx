import React from 'react'
import Chapter from '../ChapterComponent/Chapter'

function Chapter1({user}) {
  return (
    <div>
        <Chapter
        user={user}
        fibQestion={"The capital of France is _____."}
        fibAnswer={"Paris"}
        mcQuestion={'Saan naganap ang kwento?'}
        mcChoices={['Albania',' Kardavia','Berbanya','Dystopia']}
        mcAnswer={'Berbanya'}
        fourPics={['https://via.placeholder.com/150/FF5733', // Replace with actual image URLs
         'https://via.placeholder.com/150/33FF57',
         'https://via.placeholder.com/150/3357FF',
         'https://via.placeholder.com/150/57FF33',]}
        fourPicsAnswer={'Color'}
        summary={'asdadadsasd'}

         />
    </div>
  )
}

export default Chapter1