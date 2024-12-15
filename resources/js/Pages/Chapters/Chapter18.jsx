import React from 'react'
import Chapter from '../ChapterComponent/Chapter'

function Chapter18({user,num}) {
  return (
    <div>
         <Chapter
        user={user}
        fibQestion={"Si Donya Juana ay isang __________ sa kagandahan na nakita ni Don Juan."}
        fibAnswer={"dyosa"}
        mcQuestion={'Ano ang nakita ni Don Juan nang makarating siya sa pinakamalalim na bahagi ng balon?'}
        mcChoices={['Isang madilim na kagubatan','Isang magandang hardin','Isang kuweba na puno ng mga alahas','Isang palasyo na yari sa ginto']}
        mcAnswer={'Isang magandang hardin'}
        fourPics={['https://i.pinimg.com/236x/07/11/11/071111714c6534d9c579dc6ee5801d14.jpg', 
         'https://i.pinimg.com/236x/17/eb/94/17eb9442675c702bd29b1651a6b51bb1.jpg',
         'https://i.pinimg.com/236x/36/dc/a2/36dca25281eccd7aef2c7ca434e72443.jpg',
         'https://i.pinimg.com/236x/36/dc/a2/36dca25281eccd7aef2c7ca434e72443.jpg',]}
        fourPicsAnswer={'hardin'}
        summary={'asdadadsasd 2222222'}

         />
    </div>
  )
}

export default Chapter18