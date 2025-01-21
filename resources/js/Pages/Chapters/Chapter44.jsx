import React from 'react'
import Chapter from '../ChapterComponent/Chapter'

import image1 from '../../assets/chapterImage/chapter44/1.jpg'
import image2 from '../../assets/chapterImage/chapter44/2.jpg'
import image3 from '../../assets/chapterImage/chapter44/3.jpg'
import image4 from '../../assets/chapterImage/chapter44/4.jpg'

function Chapter44({user,num}) {
  return (
    <div>
         <Chapter
        user={user}
        fibQestion={"Nagtapat si Don Juan kay Prinsesa Leonora na si ________ ang totoo niyang iniibig at nakiusap na tanggapin ang pag-ibig na laan ni Don Pedro."}
        fibAnswer={"Maria Blanca"}
        mcQuestion={'Ano ang ibig sabihin ng "ninais" sa kwento ng Ibong Adarna?'}
        mcChoices={['Kinailangan','Ginusto','Kinalimutan', 'Napilitan']}
        mcAnswer={'Ginusto'}
        fourPics={[image1, image2, image3, image4,]}
        fourPicsAnswer={'arsobispo'}
        summary={'Ibong Adarna Buod Kabanata 44: Ang Pagbabalik ng Alaala ni Don Juan (Saknong 1580 – 1680) Sa isang iglap ay biglang nagbalik ang lahat ng alaala ng prinsipe. Agad itong humingi ng tawad kay Maria Blanca at nangakong hindi na muli ito magtataksil. Noon din ay nalaman ni Don Fernando ang lahat ng totoong pangyayari. Naguguluhan ang hari kung ano ang nararapat na gawin lalo na kung kanino dapat ipakasal si Don Juan. Humingi ito ng tulong sa Arsobispo. Ayon sa Arsobispo, higit na may karapatan kay Don Juan ang nauna. Labis na nagdamdam si Maria Blanca at nagalit kaya binuksan nito ang prasko at ibinuhos ang lamang tubig dahilan kung bakit bumaha sa palasyo. Nakiusap si Don Juan kay Maria Blanca na pahintuin ang pagbaha at nangakong hindi na muli ito makakalimot. Nakiusap din siya sa kaniyang ama at sa Arsobispo na ipakasal ito kay Maria Blanca. Nagtapat si Don Juan kay Prinsesa Leonora na si Maria Blanca ang totoo niyang iniibig at nakiusap na tanggapin ang pag-ibig na laan ni Don Pedro. Nang mga oras na iyon ay ninais ni Don Juan na makasal sila ni Maria Blanca.   '}
        num={num}
         />
    </div>
  )
}

export default Chapter44