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
        
        summary={'Ang kaharian ng Berbanya ay tanyag bilang isang sagana at may payapang pamumuhay. Ang mga piging at pagdiriwang ay madalas na idinaraos sa kaharian ng Berbanya dahil masayahin ang hari’t reyna na namumuno dito na sila Don Fernando at Donya Valeriana.\n\n Sila ay may tatlong lalaking mga anak na sina Don Pedro, Don Diego, at si Don Juan. Ang tatlong prisipe na ito ay likas na magagaling at matatalino higit kanino pa man sa buong kaharian. \n\nNagsanay ang tatlo sa paghawak ng mga sandata at patalim sa pakikipaglaban ngunit isa lang sa kanila ang maaaring mahirang bilang tagapagmana ng kaharian. Hindi maikakaila na paborito ni Don Fernando ang bunsong anak na si Don Juan kaya namayani ang inggit ng panganay na si Don Pedro sa kapatid.'}
        num={num}

         />
    </div>
  )
}

export default Chapter1