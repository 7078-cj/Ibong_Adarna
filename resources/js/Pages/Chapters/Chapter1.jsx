import React from 'react'
import Chapter from '../ChapterComponent/Chapter'

function Chapter1({user,num}) {

    console.log(num)

  return (
    <div>
        <Chapter
        user={user}
        fibQestion={"The capital of France is _____."}
        fibAnswer={"Paris"}
        mcQuestion={'Saan naganap ang kwento?'}
        mcChoices={['Albania',' Kardavia','Berbanya','Dystopia']}
        mcAnswer={'Berbanya'}
        fourPics={['https://via.placeholder.com/150/FF5733', 
         'https://via.placeholder.com/150/33FF57',
         'https://via.placeholder.com/150/3357FF',
         'https://via.placeholder.com/150/57FF33',]}
        fourPicsAnswer={'Color'}
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