import React, { useState, useEffect, useRef } from "react";

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
    .map(value => ({ value, sort: Math.random() }))
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

export default function FunGame() {
  const [deck, setDeck] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<Card[]>([]);
  const [disableInput, setDisableInput] = useState(true);
  const [matches, setMatches] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const startTimeRef = useRef<number | null>(null);
  const [elapsedTime, setElapsedTime] = useState<number | null>(null);

  useEffect(() => {
    initGame();
  }, []);

  const initGame = () => {
    const doubled = [...cardsData, ...cardsData];
    const shuffled = shuffleArray(doubled).map((c, idx) => ({
      ...c,
      id: idx,
      flipped: true, // Show all cards face-up initially
      matched: false,
    }));
    setDeck(shuffled);
    setFlippedCards([]);
    setDisableInput(true);
    setMatches(0);
    setGameOver(false);
    setElapsedTime(null);

    // After 2s, flip all down and enable input
    setTimeout(() => {
      setDeck(oldDeck =>
        oldDeck.map(card => ({ ...card, flipped: false }))
      );
      setDisableInput(false);
      startTimeRef.current = Date.now();
    }, 2000);
  };

  useEffect(() => {
    if (matches === cardsData.length && !gameOver) {
      setGameOver(true);
      setDisableInput(true);
      if (startTimeRef.current) {
        setElapsedTime(Math.floor((Date.now() - startTimeRef.current) / 1000));
      }
    }
  }, [matches, gameOver]);

  const flipCard = (id: number) => {
    if (disableInput) return;
    const clickedCard = deck.find(card => card.id === id);
    if (!clickedCard || clickedCard.flipped || clickedCard.matched) return;

    const newDeck = deck.map(card =>
      card.id === id ? { ...card, flipped: true } : card
    );
    const newFlipped = [...flippedCards, { ...clickedCard, flipped: true }];

    setDeck(newDeck);
    setFlippedCards(newFlipped);

    if (newFlipped.length === 2) {
      setDisableInput(true);
      setTimeout(() => checkMatch(newFlipped, newDeck), 1000);
    }
  };

  const checkMatch = (flipped: Card[], currentDeck: Card[]) => {
    const [first, second] = flipped;
    let newDeck = [...currentDeck];
    if (first.code === second.code) {
      newDeck = newDeck.map(card =>
        card.code === first.code ? { ...card, matched: true } : card
      );
      setMatches(prev => prev + 1);
    } else {
      newDeck = newDeck.map(card =>
        card.id === first.id || card.id === second.id
          ? { ...card, flipped: false }
          : card
      );
    }
    setDeck(newDeck);
    setFlippedCards([]);
    setDisableInput(false);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg select-none">
      <h2 className="text-center text-2xl font-bold mb-6 text-indigo-600">Card Memory Match</h2>

      <div className="grid grid-cols-4 gap-4 mb-6">
        {deck.map(card => (
          <button
            key={card.id}
            onClick={() => flipCard(card.id)}
            disabled={disableInput || card.flipped || card.matched}
            className="outline-none focus:outline-none"
          >
            <img
              src={card.flipped || card.matched ? card.img : cardBackURL}
              alt={card.code}
              className="w-20 h-28 rounded-lg shadow-md"
            />
          </button>
        ))}
      </div>

      {gameOver && elapsedTime !== null && (
        <div className="text-center text-indigo-700 font-semibold">
          🎉 You matched all cards in {elapsedTime} seconds! 🎉
        </div>
      )}

      {!gameOver && (
        <p className="text-center text-gray-600">Match all pairs to win!</p>
      )}

      <button
        onClick={initGame}
        className="mt-6 w-full bg-indigo-500 text-white py-2 rounded hover:bg-indigo-600 transition"
      >
        Restart Game
      </button>
    </div>
  );
}
