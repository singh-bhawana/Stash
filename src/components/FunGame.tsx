import React, { useState, useEffect, useRef } from "react";

const cards = [
  { id: 1, code: "AS", img: "https://deckofcardsapi.com/static/img/AS.png" },
  { id: 2, code: "2S", img: "https://deckofcardsapi.com/static/img/2S.png" },
  { id: 3, code: "3S", img: "https://deckofcardsapi.com/static/img/3S.png" },
  { id: 4, code: "4S", img: "https://deckofcardsapi.com/static/img/4S.png" },
  { id: 5, code: "5S", img: "https://deckofcardsapi.com/static/img/5S.png" },
  { id: 6, code: "6S", img: "https://deckofcardsapi.com/static/img/6S.png" },
  { id: 7, code: "7S", img: "https://deckofcardsapi.com/static/img/7S.png" },
  { id: 8, code: "8S", img: "https://deckofcardsapi.com/static/img/8S.png" },
];

const cardBack =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Card_back_06.svg/200px-Card_back_06.svg.png";

function shuffleArray<T>(array: T[]): T[] {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

type CardType = {
  id: number;
  code: string;
  img: string;
  flipped: boolean;
  matched: boolean;
};

export default function FunGame() {
  const [deck, setDeck] = useState<CardType[]>([]);
  const [flippedCards, setFlippedCards] = useState<CardType[]>([]);
  const [disableAll, setDisableAll] = useState(false);
  const [matches, setMatches] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [showTime, setShowTime] = useState<number | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    initGame();
  }, []);

  // Initialize: shuffle, all face up, then flip down after 4 seconds
  const initGame = () => {
    const doubled = [...cards, ...cards];
    const shuffledDeck = shuffleArray(doubled).map((c, idx) => ({
      ...c,
      id: idx,
      flipped: true,    // Start all flipped up
      matched: false,
    }));
    setDeck(shuffledDeck);
    setFlippedCards([]);
    setDisableAll(true);
    setMatches(0);
    setGameOver(false);
    setShowTime(null);
    setGameStarted(false);

    // After 4s, flip all down, enable game, start timer
    setTimeout(() => {
      setDeck((oldDeck) =>
        oldDeck.map((card) => ({ ...card, flipped: false }))
      );
      setDisableAll(false);
      setGameStarted(true);
      startTimeRef.current = Date.now();
    }, 4000);
  };

  useEffect(() => {
    if (matches === cards.length && !gameOver) {
      // Game won
      setGameOver(true);
      setDisableAll(true);
      if (startTimeRef.current) {
        setShowTime(Math.floor((Date.now() - startTimeRef.current) / 1000));
      }
    }
  }, [matches, gameOver]);

  const flipCard = (id: number) => {
    if (disableAll) return;

    const flipped = deck.find((card) => card.id === id);
    if (!flipped || flipped.flipped || flipped.matched) return;

    const newDeck = deck.map((card) =>
      card.id === id ? { ...card, flipped: true } : card
    );
    const newFlippedCards = [...flippedCards, { ...flipped, flipped: true }];

    setDeck(newDeck);
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      setDisableAll(true);
      setTimeout(() => {
        checkMatch(newFlippedCards, newDeck);
      }, 1000);
    }
  };

  const checkMatch = (flipped: CardType[], currentDeck: CardType[]) => {
    const [card1, card2] = flipped;
    let newDeck = [...currentDeck];
    if (card1.code === card2.code) {
      // Mark matched
      newDeck = newDeck.map((card) =>
        card.code === card1.code ? { ...card, matched: true } : card
      );
      setMatches((prev) => prev + 1);
    } else {
      // Flip back
      newDeck = newDeck.map((card) =>
        card.id === card1.id || card.id === card2.id
          ? { ...card, flipped: false }
          : card
      );
    }
    setDeck(newDeck);
    setFlippedCards([]);
    setDisableAll(false);
  };

  const resetGame = () => {
    initGame();
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg select-none">
      <h3
        className="text-center text-2xl font-bold mb-6"
        style={{
          background: "linear-gradient(90deg, #6a84ff, #d776e7)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Card Memory Match
      </h3>

      {!gameStarted && (
        <p className="text-center mb-4 font-medium text-neutral-600">
          All cards shown face-up for 4 seconds. Get ready to memorize!
        </p>
      )}

      <div className="grid grid-cols-4 gap-4 mb-6">
        {deck.map((card) => (
          <button
            key={card.id}
            onClick={() => flipCard(card.id)}
            disabled={!gameStarted || card.flipped || card.matched || disableAll}
            className="outline-none focus:outline-none"
          >
            <img
              src={card.flipped || card.matched ? card.img : cardBack}
              alt={card.code}
              className="w-20 h-28 rounded-lg shadow-md"
            />
          </button>
        ))}
      </div>

      {gameOver && (
        <div className="text-center">
          <p className="text-indigo-600 font-semibold mb-3">
            🎉 You matched all cards in {showTime} seconds! 🎉
          </p>
          <button
            onClick={resetGame}
            className="px-6 py-2 bg-gradient-to-r from-blue-400 to-pink-400 text-white rounded shadow hover:scale-105 transition"
          >
            Play Again
          </button>
        </div>
      )}

      {!gameOver && gameStarted && (
        <p className="text-center text-gray-600">Match all pairs to win.</p>
      )}
    </div>
  );
}
