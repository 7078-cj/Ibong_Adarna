import React, { useState } from 'react'

function WordBank() {

    const words = [
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
        
        // Add more words as needed
      ];
      
      
        const [cards, setCards] = useState(() =>
          words.sort(() => Math.random() - 0.5) // Shuffle words
        );
        const [flipped, setFlipped] = useState(Array(words.length).fill(false));
      
        const handleFlip = (index) => {
          setFlipped((prev) =>
            prev.map((f, i) => (i === index ? !f : f)) // Toggle the clicked card
          );
        }
        
      
    return (
          <div className="flex flex-wrap gap-4 p-4 justify-center">
            {cards.map((card, index) => (
              <div
                key={index}
                className={`relative w-56 h-72 cursor-pointer transform-style-preserve-3d transition-transform duration-500 ${
                  flipped[index] ? "rotate-y-180" : ""
                }`}
                onClick={() => handleFlip(index)}
              >
                {/* Front Side */}
                <div className="absolute inset-0 bg-gray-200 text-gray-800 border border-gray-300 rounded-lg shadow-md flex flex-col justify-center p-4 backface-hidden">
                  <h3 className="font-bold text-lg mb-2">Kahulugan</h3>
                  <p className="text-sm mb-2">{card.meaning}</p>
                  <h4 className="font-semibold text-sm">Mga Kasingkahulugan</h4>
                  <p className="text-sm mb-2">{card.synonyms}</p>
                  <h4 className="font-semibold text-sm">Mga Kasalungat</h4>
                  <p className="text-sm">{card.antonyms}</p>
                </div>
      
                {/* Back Side */}
                <div className="absolute inset-0 bg-yellow-200 text-gray-800 border border-gray-300 rounded-lg shadow-md flex flex-col justify-center p-4 transform rotate-y-180 backface-hidden">
                  <h3 className="font-bold text-lg mb-2">{card.word}</h3>
                  <p className="text-sm">{card.example}</p>
                </div>
              </div>
            ))}
          </div>
        );
      
}

export default WordBank