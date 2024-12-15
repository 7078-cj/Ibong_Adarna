import React from 'react'
import Chapter from '../ChapterComponent/Chapter'

function Chapter17({user,num}) {
  return (
    <div>
         <Chapter
        user={user}
        fibQestion={"Ang balon na natuklasan ng magkakapatid ay may makikinis na marmol at __________ na kaukit sa paligid."}
        fibAnswer={"ginto"}
        mcQuestion={'Ano ang natuklasan ng magkakapatid sa kanilang paglalakbay?'}
        mcChoices={['Isang madilim na kagubatan','Isang mahiwagang balon','Isang bundok na puno ng prutal','Isang palasyo na yari sa ginto']}
        mcAnswer={'Isang mahiwagang balon'}
        fourPics={['https://i.pinimg.com/236x/ab/1f/29/ab1f2957958a567213dd5ea8cd628360.jpg', 
         'https://i.pinimg.com/236x/0d/b3/01/0db301ba961d6649db60a2664fa56d73.jpg',
         'https://i.pinimg.com/236x/5c/18/a9/5c18a920dcf7ef9a9ab3c7c9805afeb5.jpg',
         'https://i.pinimg.com/236x/32/77/64/3277642f444d174e24d94fb15cce6589.jpg',]}
        fourPicsAnswer={'balon'}
        summary={'asdadadsasd 2222222'}

         />
    </div>
  )
}

export default Chapter17