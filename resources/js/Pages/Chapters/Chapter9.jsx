import React from 'react'
import Chapter from '../ChapterComponent/Chapter'

import image1 from '../../assets/chapterImage/chapter9/1.jpg'
import image2 from '../../assets/chapterImage/chapter9/2.jpg'
import image3 from '../../assets/chapterImage/chapter9/3.jpg'
import image4 from '../../assets/chapterImage/chapter9/4.jpg'

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
        fourPics={[image1, image2, image3, image4,]}
        fourPicsAnswer={'kapayapaan'}
        summary={'Agad na gumaling ang mga sugat sa palad ni Don Juan matapos itong pahiran ng gamot ng ermitanyo. Muling namangha si Don Juan sa hiwagang ipinamalas ng nito. Nagbilin ang ermitanyo sa tatlong prinsipe na nawa’y makarating sila ng payapa alang-alang sa kanilang amang hari. Nagbilin din ito na huwag sanang paglililo ang manahan sa kanilang mga puso. Sa kanilang pag-uwi ay nauunang naglalakad si Don Juan dala-dala ang hawla. Habang nasa likod naman nito ang dalawa pa niyang kapatid. Palihim na kinakausap ni Don Pedro si Don Diego. Dahil sa sobrang inggit nito kay Don Juan, binalak ni Don Pedro na patayin ang kaniyang bunsong kapatid ngunit ito ay tinutulan ni Don Diego. Sa halip na patayin ay napagkasunduan ng dalawa na bugbugin nalang si Don Juan. Sa kagubatan na ito aabutan ng kamatayan at madadala pa nila ang Ibong Adarna sa kaharian ng Berbanya. Hindi nanlaban si Don Juan kahit pa siya ang pinagtutulungan na bugbugin ng dalawa niyang kapatid. Iniwan ng magkapatid si Don Juan na nakagulapay sa gitna ng kagubatan. Tumakas sila tangay ang Ibong Adarna.'}

         />
    </div>
  )
}

export default Chapter9