import React from 'react'
import Chapter from '../ChapterComponent/Chapter'

import image1 from '../../assets/chapterImage/chapter26/1.jpg'
import image2 from '../../assets/chapterImage/chapter26/2.jpg'
import image3 from '../../assets/chapterImage/chapter26/3.jpg'
import image4 from '../../assets/chapterImage/chapter26/4.jpg'

function Chapter26({user,num}) {
  return (
    <div>
         <Chapter
        user={user}
        fibQestion={"Habang si Don Juan ay patuloy sa paglalakbay, si Prinsesa Leonora naman ay patuloy din sa ________."}
        fibAnswer={"Pagtangis"}
        mcQuestion={'Ano ang ibig sabihin ng salitang "panangis?"'}
        mcChoices={['Pag-iyak', 'Pag-aalala', 'Pagdiriwang', 'Pagkagalak']}
        mcAnswer={'Pag-iyak'}
        fourPics={[image1, image2, image3, image4,]}
        fourPicsAnswer={'Paglalakbay'}
        summary={'Ibong Adarna Buod Kabanata 26: Ang Panangis ni Prinsesa Leonora (Saknong 832 – 858) Habang si Don Juan ay patuloy sa paglalakbay, si Prinsesa Leonora naman ay patuloy din sa pagtangis. Sa tuwing nalalaman niyang hindi si Don Juan ang dumadalaw sa kanya kundi si Don Pedro ay hindi nito pinagbubuksan ng pinto. Ang pangalan pa rin ni Don Juan ang laging sambit ng prinsesa. Nagbanta naman si Don Pedro na may mangyayaring masama kung siya ay mabibigo sa pag-ibig niya kay Prinsesa Leonora. Hiniling ni Don Pedro sa prinsesa na limutin na nito si Don Juan dahil ito ay hindi na muling magbabalik sapagkat patay na. Gayunpaman, tanging si Don Juan lang ang nasa puso’t-isip ng dalaga. Sa kabila ng tatlong taong pag-iintay at pagtitiis ay hindi nito magawang pakasalan si Don Pedro. Sa kabilang banda, nagpatuloy sa paglalakbay si Don Juan. Inabot pa siya ng limang buwan na paglalakbay. Pitong bundok ang kaniyang binagtas bago tuluyang makarating sa dampa ng ermitanyo.  '}
        num={num}
         />
    </div>
  )
}

export default Chapter26