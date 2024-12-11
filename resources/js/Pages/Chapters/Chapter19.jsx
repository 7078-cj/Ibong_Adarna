import React from 'react'
import Chapter from '../ChapterComponent/Chapter'

function Chapter19({user,num}) {
  return (
    <div>
         <Chapter
        user={user}
        fibQestion={"Ang nagbabantay sa hardin ay isang malupit na __________."}
        fibAnswer={"higante"}
        mcQuestion={'Saan matatagpuan si Prinsesa Leonora?'}
        mcChoices={['Sa isang kagubatan na puno ng mga bulaklak','Sa isang palasyo na may malaking hagdanang ginto','Sa isang kuweba sa ilalim ng bundok','Sa isang kabundukan na may yelo']}
        mcAnswer={'Sa isang palasyo na may malaking hagdanang ginto'}
        fourPics={['https://i.pinimg.com/236x/12/ae/ff/12aeff51b34552bfabf6d5a13c57f7ea.jpg', 
         'https://i.pinimg.com/236x/01/5d/65/015d6571342c40e252c1dd4f2d273696.jpg',
         'https://i.pinimg.com/236x/b8/b4/14/b8b414a34ca58a9428f06cbe361d8926.jpg',
         'https://i.pinimg.com/236x/9b/d0/e8/9bd0e8b2f6f6503c42b7f5fe00aaf8c7.jpg',]}
        fourPicsAnswer={'serpyente'}
        summary={'asdadadsasd 2222222'}

         />
    </div>
  )
}

export default Chapter19