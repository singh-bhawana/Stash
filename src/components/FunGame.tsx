import React, { useState, useEffect } from "react";

const cardsData = [
  { id: 1, code: "AS", img: "https://deckofcardsapi.com/static/img/AS.png" },
  { id: 2, code: "2S", img: "https://deckofcardsapi.com/static/img/2S.png" },
  { id: 3, code: "3S", img: "https://deckofcardsapi.com/static/img/3S.png" },
  { id: 4, code: "4S", img: "https://deckofcardsapi.com/static/img/4S.png" },
  { id: 5, code: "5S", img: "https://deckofcardsapi.com/static/img/5S.png" },
  { id: 6, code: "6S", img: "https://deckofcardsapi.com/static/img/6S.png" },
  { id: 7, code: "7S", img: "https://deckofcardsapi.com/static/img/7S.png" },
  { id: 8, code: "8S", img: "https://deckofcardsapi.com/static/img/8S.png" },
];

const cardBackURL =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Card_back_06.svg/200px-Card_back_06.svg.png";

function shuffleArray<T>(array: T[]): T[] {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

type Card = {
  id: number;
  code: string;
  img: string;
  flipped: boolean;
  matched: boolean;
};

export default function SimpleMemoryGame() {
  const [deck, setDeck] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [disableAll, setDisableAll] = useState(true);
  const [matches, setMatches] = useState(0);
  const [gameWon, setGameWon] = useState(false);

  useEffect(() => {
    initializeGame();
  }, []);

  const initializeGame = () => {
    const doubledCards = [...cardsData, ...cardsData];
    const shuffled = shuffleArray(doubledCards).map((card, index) => ({
      ...card,
      id: index,
      flipped: true,
      matched: false,
    }));
    setDeck(shuffled);
    setFlippedCards([]);
    setDisableAll(true);
    setMatches(0);
    setGameWon(false);
    // Show all cards for 2 sec then flip down and enable clicks
    setTimeout(() => {
      setDeck((curDeck) =>
        curDeck.map((c) => ({ ...c, flipped: false }))
      );
      setDisableAll(false);
    }, 2000);
  };

  const handleCardClick = (id: number) => {
    if (disableAll) return;
    if (flippedCards.includes(id)) return;

    const newFlipped = [...flippedCards, id];
    const newDeck = deck.map((card) =>
      card.id === id ? { ...card, flipped: true } : card
    );

    setDeck(newDeck);
    setFlippedCards(newFlipped);

    if (newFlipped.length === 2) {
      setDisableAll(true);

      setTimeout(() => {
        const [firstId, secondId] = newFlipped;
        const firstCard = newDeck.find((c) => c.id === firstId);
        const secondCard = newDeck.find((c) => c.id === secondId);

        if (firstCard && secondCard && firstCard.code === secondCard.code) {
          // Match found
          const matchedDeck = newDeck.map((card) =>
            card.code === firstCard.code ? { ...card, matched: true } : card
          );
          setDeck(matchedDeck);
          setMatches((prev) => prev + 1);
          if (matches + 1 === cardsData.length) {
            setGameWon(true);
            setDisableAll(true);
          } else {
            setDisableAll(false);
          }
        } else {
          // No match, flip back cards
          const resetDeck = newDeck.map((card) =>
            card.id === firstId || card.id === secondId
              ? { ...card, flipped: false }
              : card
          );
          setDeck(resetDeck);
          setDisableAll(false);
        }
        setFlippedCards([]);
      }, 1000);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow select-none">
      <h2 className="text-center text-2xl font-bold mb-6 text-indigo-600">
        Memory Card Game
      </h2>

      <div className="grid grid-cols-4 gap-4 mb-6">
        {deck.map((card) => (
          <button
            key={card.id}
            onClick={() => handleCardClick(card.id)}
            disabled={disableAll || card.flipped || card.matched}
            className="focus:outline-none"
          >
            <img
              src={card.flipped || card.matched ? card.img : cardBackURL}
              alt={card.code}
              className="w-20 h-28 rounded-lg shadow"
            />
          </button>
        ))}
      </div>

      {gameWon && (
        <div className="p-4 text-center text-green-700 font-semibold text-lg">
          🎉 Congratulations! You matched all pairs! 🎉
        </div>
      )}

      <button
        onClick={initializeGame}
        className="mt-6 w-full py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition"
      >
        Restart Game
      </button>
    </div>
  );
}
