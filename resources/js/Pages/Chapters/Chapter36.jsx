import React from 'react'
import Chapter from '../ChapterComponent/Chapter'

import image1 from '../../assets/chapterImage/chapter36/1.jpg'
import image2 from '../../assets/chapterImage/chapter36/2.jpg'
import image3 from '../../assets/chapterImage/chapter36/3.jpg'
import image4 from '../../assets/chapterImage/chapter36/4.jpg'

function Chapter36({user,num}) {
  return (
    <div>
         <Chapter
        user={user}
        fibQestion={"Ang kabayo na iniutos paamuhin ni Haring Salermo ay _______ ni Maria Blanca."}
        fibAnswer={"ama"}
        mcQuestion={'Ano ang ibig sabihin ng nakaratay?'}
        mcChoices={['Naglakad','Nakaluhod','Nakahiga','Nakatayo']}
        mcAnswer={'Nakahiga'}
        fourPics={[image1, image2, image3, image4,]}
        fourPicsAnswer={'kabayo'}
        summary={'Ibong Adarna Buod Kabanata 36: Ang Pag-Amo sa Kabayo (Saknong 1240 – 1285) Sa muling pagkakataon ay ipinatawag ni Haring Salermo si Don Juan. Inutusan niya itong paamuhin ang isang kabayong mailap at malupit. Tinuruan ni Maria Blanca si Don Juan sa mga pamamaraan kung paano mapaamo dahil batid niyang ang kabayo na iyon ay ang kaniyang ama. Bilin ng dalaga na dagukan at paluin ito kung umalma. Nagawa ni Don Juan ang mga bilin ni Maria Blanca kung kaya’t napagtagumpayan nitong mapaamo ang kabayo. Nagkitang muli ang dalawa ng gabing iyon at natitiyak ni Maria Clara na ipapatawag ng hari si Don Juan. Nakaratay na ang hari at nagwakas na din ang panganib kaya maaari nang makapasok ng palasyo si Don Juan.'}
        num={num}
         />
    </div>
  )
}

export default Chapter36