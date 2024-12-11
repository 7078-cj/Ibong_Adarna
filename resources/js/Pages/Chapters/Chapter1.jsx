import React from 'react'
import Chapter from '../ChapterComponent/Chapter'

function Chapter1({user,num}) {

    console.log(num)

  return (
    <div>
        <Chapter
        user={user}
        fibQestion={"Ang kaharian ng __________ ay isang lugar ng kasaganaan at kaligayahan."}
        fibAnswer={"berbanya"}
        mcQuestion={'Siya ang paboritong anak ni Don Fernando.'}
        mcChoices={['Don Pedro','Don Diego','Don Juan','Don Kier']}
        mcAnswer={'Don Juan'}
        fourPics={['https://i.pinimg.com/736x/45/5a/94/455a949cdf29139dfbf974e6b8a5bc60.jpg', 
         'https://i.pinimg.com/736x/19/12/25/191225aab465df1ed84c3203acc0ed8b.jpg',
         'https://i.pinimg.com/736x/3b/f8/26/3bf826d15ceb64dfc9d3712f5a451838.jpg',
         'https://i.pinimg.com/736x/7f/bb/6c/7fbb6c65a94568d76d271c6c15b12e6e.jpg',]}
        fourPicsAnswer={'Kaharian'}

        words={[
                    {
                      word: "Makatao",
                      meaning: "Humane; showing compassion or benevolence.",
                      antonyms: "Walang puso, brutal",
                      synonyms: "Mabait, maawain",
                      example: "Ang makataong pagtulong sa mga nangangailangan ay kahanga-hanga."
                    },
                    {
                      word: "Pag-ibig",
                      meaning: "A strong feeling of affection and care towards someone.",
                      antonyms: "Galit, pagkamuhi",
                      synonyms: "Pagmamahal, pagsinta",
                      example: "Ang pag-ibig ng magulang ay walang hanggan."
                    },
        ]}
        
        summary={'asdadadsasd'}
        num={num}

         />
    </div>
  )
}

export default Chapter1