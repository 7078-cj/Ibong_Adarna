import React from 'react'
import Chapter from '../ChapterComponent/Chapter'

import image1 from '../../assets/chapterImage/chapter43/1.jpg'
import image2 from '../../assets/chapterImage/chapter43/2.jpg'
import image3 from '../../assets/chapterImage/chapter43/3.jpg'
import image4 from '../../assets/chapterImage/chapter43/4.jpg'

function Chapter43({user,num}) {
  return (
    <div>
         <Chapter
        user={user}
        fibQestion={"Ipinagpatuloy ng dalawang ita ang ________ at isinalaysay nito ang pagtakas noon ng dalawa kay Haring Salermo. "}
        fibAnswer={"dula"}
        mcQuestion={'Sa kabila ng pagpapalabas ng dula ay hindi pa rin makaalala si Don Juan sa halip ay mas lalo pa itong nawili kay Prinsesa Leonora. Ano ang kahulugan ng salitang "nawili" ayon sa pangungusap.'}
        mcChoices={['Nainis','Nagulat','Nahulog ang loob', 'Bumilis ang tibok ng puso']}
        mcAnswer={'Nahulog ang loob'}
        fourPics={[image1, image2, image3, image4,]}
        fourPicsAnswer={'ita'}
        summary={'Ibong Adarna Buod Kabanata 43: Ang Pagpaparusa kay Don Juan (Saknong 1542 – 1579) Sa kabila ng pagpapalabas ng dula ay hindi pa rin makaalala si Don Juan sa halip ay mas lalo pa itong nawili kay Prinsesa Leonora. Ipinagpatuloy ng dalawang ita ang dula at isinalaysay nito ang pagtakas noon ng dalawa kay Haring Salermo. Upang di maabutan ng hari ay ginamit ni Maria Blanca ang kapangyarihan ng diyamanteng singsing. Isinalaysay din nito ang mga pangyayari nang sila ay makabalik na sa kaharian ng Berbanya. Wala pa ring maalala ang negrito kaya patuloy itong pinaghahampas ng negrita. Nasasaktan si Don Juan ngunit binabalewala lang niya ito dahil sa Prinsesa Leonora ang nananatili sa puso ng prinsipe. Naiyak si Maria Blanca dahil batid nitong tuluyan ng nakalimot si Don Juan. Kinuha ni Maria Blanca ang prasko at babasagin na niya ito upang gunawin ang buong reyno.'}

         />
    </div>
  )
}

export default Chapter43