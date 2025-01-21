import React from 'react'
import Chapter from '../ChapterComponent/Chapter'

import image1 from '../../assets/chapterImage/chapter38/1.jpg'
import image2 from '../../assets/chapterImage/chapter38/2.jpg'
import image3 from '../../assets/chapterImage/chapter38/3.jpg'
import image4 from '../../assets/chapterImage/chapter38/4.jpg'

function Chapter38({user,num}) {
  return (
    <div>
         <Chapter
        user={user}
        fibQestion={"Inilaglag din ng prinsesa ang kaniyang sabon upang maging ________ ang patag na daan. "}
        fibAnswer={"bundok"}
        mcQuestion={'"Nakita ni Don Juan ang kohe na puno ng tubig na iniwan ni Maria Blanca sa tabi ng ilog." Batay sa pangungusap, alin ang ibig sabihin ng "kohe"?'}
        mcChoices={['Singing','Bote','Lata','Pitaka']}
        mcAnswer={'Bote'}
        fourPics={[image1, image2, image3, image4,]}
        fourPicsAnswer={'karayom'}
        summary={'Ibong Adarna Buod Kabanata 38: Ang Pagtakas sa Reyno Delos Cristales (Saknong 1334 – 1382) Sa pagtakas ay inutusan ni Maria Blanca si Don Juan na kuhanin ang kabayo na nasa ikapitong pinto ngunit nagkamali ang prinsipe sa pagkuha at nakuha ang kabayo sa ikawalong pinto. Wala na silang oras magsisihan dahil kailangan na agad nilang makatakas. Tila isang ipu-ipo sa tulin ang nangyaring habulan sa pagitan ni Haring Salermo at ng magkasintahan. Upang hindi maabutan ay naghulog ng mga karayom ang prinsesa na agad naging bakal na tinik sa pamamagitan ng kaniyang mahika. Inabot ng dalawang araw ang hari bago tuluyang mahawi ang mga bakal na tinik. Inilaglag din ng prinsesa ang kaniyang sabon upang maging bundok ang patag na daan. Malapit na sanang maabutan ng hari ang dalawa dahil humanap ito ng ibang daan ngunit ginamit muli ng prinsesa ang kaniyang kapangyarihan. Inilaglag ng prinsesa ang kohe na kaniyang dala at naging isang karagatan ang dating tuyot na lupa. Hindi na naabutan ng hari ang dalawa ngunit isinumpa naman niya ang kaniyang anak na makakalimot at magtataksil sa kaniya si Don Juan sa oras na makabalik ito sa kaharian ng Berbanya. Dahil sa sama ng loob ay nagkasakit si Haring Salermo at namatay. Nakarating naman ang magkasintahan sa Berbanya pagkatapos ng mahabang paglalakbay. '}
        num={num}
         />
    </div>
  )
}

export default Chapter38