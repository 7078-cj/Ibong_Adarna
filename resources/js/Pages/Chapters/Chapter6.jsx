import React from 'react'
import Chapter from '../ChapterComponent/Chapter'

function Chapter6({user,num}) {
  return (
    <div>
         <Chapter
        user={user}
        fibQestion={"Ayon sa ermitanyo, kailangan ni Don Juan na hiwain ang kanyang palad at pigaan ng _____ upang manatiling gising."}
        fibAnswer={"dayap"}
        mcQuestion={'Ano ang ibinigay ng ermitanyo kay Don Juan upang matulungan siya?'}
        mcChoices={['Isang gintong sintas','Isang kabayo','Isang espada','Isang lihim na mapa']}
        mcAnswer={'Isang gintong sintas'}
        fourPics={['https://i.pinimg.com/236x/d5/d3/27/d5d327ba708fe4d0807fd59c72b2f500.jpg', 
         'https://i.pinimg.com/236x/92/58/90/92589061d43b196913b33d2b9cda852a.jpg',
         'https://i.pinimg.com/236x/b3/f0/e9/b3f0e9984b6f7136053e820895a9ba5d.jpg',
         'https://i.pinimg.com/236x/c4/04/6b/c4046b8796349a524e841960ec6d45f1.jpg',]}
        fourPicsAnswer={'payo'}
        summary={'asdadadsasd 2222222'}

         />
    </div>
  )
}

export default Chapter6