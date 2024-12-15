import React from 'react'
import Chapter from '../ChapterComponent/Chapter'

import image1 from '../../assets/chapterImage/chapter1/1.jpg'
import image2 from '../../assets/chapterImage/chapter1/2.jpg'
import image3 from '../../assets/chapterImage/chapter1/3.jpg'
import image4 from '../../assets/chapterImage/chapter1/4.jpg'

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
        fourPics={[image1, image2, image3, image4,]}
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