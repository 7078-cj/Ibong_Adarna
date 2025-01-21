import React from 'react'
import Chapter from '../ChapterComponent/Chapter'

import image1 from '../../assets/chapterImage/chapter21/1.jpg'
import image2 from '../../assets/chapterImage/chapter21/2.jpg'
import image3 from '../../assets/chapterImage/chapter21/3.jpg'
import image4 from '../../assets/chapterImage/chapter21/4.jpg'

function Chapter21({user,num}) {
  return (
    <div>
         <Chapter
        user={user}
        fibQestion={"Si Don Juan ay ________ sa laban kahit napagod dahil sa matinding lakas ng serpyente."}
        fibAnswer={"nanalangin"}
        mcQuestion={'Anong kahulugan ng salitang "serpyente"?'}
        mcChoices={['Isang higante','Isang ahas','Isang ibon', 'Isang prinsipe']}
        mcAnswer={'Isang ahas'}
        fourPics={[image1, image2, image3, image4,]}
        fourPicsAnswer={'lindol'}
        summary={'Ibong Adarna Buod Kabanata 21: Ang Serpyenteng may Pitong Ulo (Saknong 618 – 658) Kasabay ng malakas na pagyanig ay ang gumagapang na ahas paakyat sa hagdanan. Katulad ng pagharap sa higante ay matapang niya ring hinarap ang serpyente na may pitong ulo. Tinagpas niya ang ulo nito ngunit muli itong tumubo at nabuhay. Nakaramdam man ng pagod ay hindi nakalimutan ng prinsipe ang manalangin. Muling nanumbalik ang lakas nito at mas naging matapang. Tumagal ng tatlong oras ang laban ng dalawa hanggang sa tuluyang napagod ang serpyente. Inihagis ni Prinsesa Leonora ang balsamo kay Don Juan upang mapaglagyan ng bawat ulo na matatagpas. Nang makuha ni Don Juan ang pinakahuling ulo ay hindi na muling tumubo at nagkabuhay. Naiakyat sa itaas ng balon ang magkapatid. Nalaman ni Don Pedro ang ginawang pagliligtas ni Don Juan sa dalawang prinsesa dahilan kung bakit ito mas lalong nainggit sa kapatid lalo pa’t nabighani ito sa kagandahan ni Prinsesa Leonora. '}
        num={num}
         />
    </div>
  )
}

export default Chapter21