import React from 'react'
import Chapter from '../ChapterComponent/Chapter'

import image1 from '../../assets/chapterImage/chapter5/1.jpg'
import image2 from '../../assets/chapterImage/chapter5/2.jpg'
import image3 from '../../assets/chapterImage/chapter5/3.jpg'
import image4 from '../../assets/chapterImage/chapter5/4.jpg'

function Chapter5({user,num}) {
  return (
    <div>
         <Chapter
        user={user}
        fibQestion={"Nakatagpo si Don Juan ng isang matandang __________ na nagbigay ng gabay at payo upang matulungan siya."}
        fibAnswer={"leproso"} // or ermitanyo
        mcQuestion={'Ano ang ginamit ni Don Juan sa kanyang paglalakbay?'}
        mcChoices={['Isang kabayo','Isang barko','Paglalakad lamang','Isang chariot']}
        mcAnswer={'Paglalakad lamang'}
        fourPics={[image1, image2, image3, image4,]}
        fourPicsAnswer={'bato'}
        summary={'asdadadsasd 2222222'}

         />
    </div>
  )
}

export default Chapter5