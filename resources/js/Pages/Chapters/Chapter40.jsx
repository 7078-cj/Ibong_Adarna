import React from 'react'
import Chapter from '../ChapterComponent/Chapter'

import image1 from '../../assets/chapterImage/chapter40/1.jpg'
import image2 from '../../assets/chapterImage/chapter40/2.jpg'
import image3 from '../../assets/chapterImage/chapter40/3.jpg'
import image4 from '../../assets/chapterImage/chapter40/4.jpg'

function Chapter40({user,num}) {
  return (
    <div>
         <Chapter
        user={user}
        fibQestion={"Gamit ang mahika, naghanda si Maria Blanca ng karosang ________ at nagbihis bilang emperatris upang makadalo at maghiganti sa kasal nina Don Juan at Prinsesa Leonora. "}
        fibAnswer={"ginto"}
        mcQuestion={'Ano ang ibig sabihin ng salitang "Natuklasan"?'}
        mcChoices={['Naranasan','Nakita','Natunghayan', 'Nalaman']}
        mcAnswer={'Nalaman'}
        fourPics={[image1, image2, image3, image4,]}
        fourPicsAnswer={'kasal'}
        summary={'Ibong Adarna Buod Kabanata 40: Ang Paglimot sa Sumpaan (Saknong 1426 – 1449) Nagtakda ang hari na maikasal sina Don Juan at Prinsesa Leonora sa linggo ding iyon. Si Don Pedro ay dapat sana’y itatakwil ng hari ngunit nakiusap si Prinsesa Leonora na gawin nalang ito pagkatapos ng gaganaping kasal. Nagdiwang ang buong kaharian sa nalalapit na pag-iisang dibdib ng dalawa habang tatlong araw na ang nakakalipas ay hindi parin bumabalik si Don Juan kay Maria Blanca. Natuklasan ni Maria Blanca ang pagtataksil ni Don Juan. Habang siya ay nagdurusa si Don Juan naman ay nagsasaya sa piling ni Prinses Leonora. Naghanda si Maria Blanca ng gagawing paghihiganti sa araw ng kasal ng dalawa. Nagkaroon siya ng karosang ginto gamit ang kaniyang mahika at nagpanggap ito bilang emperatris upang makadalo sa kasal. Ang karosang ginto na may labindalawang kabayo ang siyang maghahatid dito sa kaharian ng Berbanya.'}

         />
    </div>
  )
}

export default Chapter40