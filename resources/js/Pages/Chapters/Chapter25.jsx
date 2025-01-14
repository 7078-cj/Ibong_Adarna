import React from 'react'
import Chapter from '../ChapterComponent/Chapter'

import image1 from '../../assets/chapterImage/chapter25/1.jpg'
import image2 from '../../assets/chapterImage/chapter25/2.jpg'
import image3 from '../../assets/chapterImage/chapter25/3.jpg'
import image4 from '../../assets/chapterImage/chapter25/4.jpg'

function Chapter25({user,num}) {
  return (
    <div>
         <Chapter
        user={user}
        fibQestion={" Si Don Juan ay nagtaka dahil sa ________ na ibinigay ng matanda, hindi nababawasan ang tubig mula sa bumbong kahit inumin niya ito."}
        fibAnswer={"inumin"}
        mcQuestion={' Ano ang ibinigay ng matanda kay Don Juan na nagbigay ng panibagong lakas at sigla sa kanya?'}
        mcChoices={['Tinapay at pulot-pukyutan', 'Prutas at tubig', 'Kanin at ulam', 'Gatas at biskwit']}
        mcAnswer={'Tinapay at pulot-pukyutan'}
        fourPics={[image1, image2, image3, image4,]}
        fourPicsAnswer={'Pagkain'}
        summary={'Ibong Adarna Buod Kabanata 25: Ang Bagong Mundo (Saknong 795 – 831) Sa loob ng tatlong taon na paglalakbay ni Don Juan sa parang at mga gubat ay imbes na mapalapit ito sa Reyno delos Cristales ay mas lalo lang napalayo at naligaw. May natagpuan siyang isang matanda at dahil sa gutom ay humingi ito dito ng limos. Binigyan ng matanda si Don Juan ng durog at bukbukin na sa itim na tinapay. Dahil sa labis na gutom ay hindi na ito alintana ni Don Juan. Ngunit sa kaniyang pagtataka ay napakalinamnam ng tinapay nang ito ay kaniyang kainin. Binigyan din siya ng matanda ng pulot-pukyutan at inabutan ng inumin sa bumbong. Muling nagtaka si Don Juan dahil sa kabila ng pag-inom nito ay pansing hindi nababawasan ang tubig mula sa bumbong. Muling bumalik ang lakas at sigla ni Don Juan. Nalaman din ng matanda ang pakay ng prinsipe na hanapin at puntahan ang Reyno delos Cristales. Nagulat ito dahil sa isang daang taong paninirahan nito doon ay hindi niya alam ang daan patungo sa Reyno. Sa halip ay ibinilin nito na pumunta ang prinsipe sa ikapitong bundok upang hanapin ang isang ermitanyo. Nagbigay din ang matanda ng kapirasong baro upang marapatin siyang paglingkuran ng ermitanyo. Bilin din nito na sabihin na ang kapirasong baro ay galing sa isang matandang sugatan.  '}

         />
    </div>
  )
}

export default Chapter25