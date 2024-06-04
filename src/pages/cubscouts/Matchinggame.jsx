import React, { useState, useEffect } from "react";
import Nav from '../../components/Nav';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';

const Matchinggame = () => {
  // State declarations
  const [cards, setCards] = useState([]); // State for storing the cards
  const [flippedCards, setFlippedCards] = useState([]); // State for storing the flipped cards
  const [matchedCards, setMatchedCards] = useState([]); // State for storing the matched cards

  // Function to shuffle the cards array
  const shuffleCards = (cards) => {
    // Create a copy of the cards array
    const shuffledCards = [...cards];

    // Shuffle the cards using Fisher-Yates algorithm
    for (let i = shuffledCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]];
    }

    return shuffledCards;
  };

  // Function to handle card click event
  const handleCardClick = (id) => {
    const clickedCard = cards.find(card => card.id === id);
    if (flippedCards.length === 2 || matchedCards.includes(id)) {
      // If two cards are already flipped or the clicked card is already matched, do nothing
      console.log(matchedCards);
      return;
    }

    // Add the clicked card to the flippedCards array
    setFlippedCards((prevFlippedCards) => [...prevFlippedCards, clickedCard]);
  };

  // Function to reset the game
  const resetGame = () => {
    // Define the initial state of the cards array with pairs
    const initialCards = [
      { id: 1, value: "🔦" },
      { id: 2, value: "🔦" },
      { id: 3, value: "🌲" },
      { id: 4, value: "🌲" },
      { id: 5, value: "🔥" },
      { id: 6, value: "🔥" },
      { id: 7, value: "🏕️" },
      { id: 8, value: "🏕️" },
      { id: 9, value: "🌳" },
      { id: 10, value: "🌳" },
      { id: 11, value: "🔧" },
      { id: 12, value: "🔧" },
      { id: 13, value: "🧭" },
      { id: 14, value: "🧭" },
      { id: 15, value: "⛺" },
      { id: 16, value: "⛺" },
    ];

    // Shuffle the initial cards
    const shuffledCards = shuffleCards(initialCards);

    // Reset the state
    setCards(shuffledCards);
    setFlippedCards([]);
    setMatchedCards([]);
  };

  // useEffect hook to initialize cards
  useEffect(() => {
    resetGame();
  }, []);

  // useEffect hook to check for matches
  useEffect(() => {
    const checkForMatch = () => {
      const [firstCard, secondCard] = flippedCards;

      if (firstCard.value === secondCard.value) {
        // If the flipped cards match, add them to the matchedCards array and clear the flippedCards array
        setMatchedCards((prevMatchedCards) => [...prevMatchedCards, firstCard.id, secondCard.id]);
        setFlippedCards([]);
      } else {
        // If the flipped cards don't match, reset the flippedCards array after a delay
        setTimeout(() => {
          setFlippedCards([]);
        }, 500);
      }
    };

    if (flippedCards.length === 2) {
      // Check for a match when two cards are flipped
      const timer = setTimeout(() => {
        checkForMatch();
      }, 500);

      // Cleanup the timer if the component unmounts or the flippedCards change
      return () => clearTimeout(timer);
    }
  }, [flippedCards, cards]);

  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Hero title="Memory Game" subtitle="Match the cards to win!" heromatchinggameoverlay="hero-matchinggameoverlay" />
        <div className="matching-game">
          <div className="cards">
            {/* Render each card */}
            {cards.map((card) => (
              <div key={card.id} className={`card ${flippedCards.some(flippedCard => flippedCard.id === card.id) ? "flipped" : ""}`} onClick={() => handleCardClick(card.id)}>
                {/* Display the value of flipped cards */}
                {flippedCards.some(flippedCard => flippedCard.id === card.id) || matchedCards.includes(card.id) ? card.value : ""}
              </div>
            ))}
          </div>
          {/* Display completion message */}
          {matchedCards.length === cards.length && (
            <>
              <p className="win-text">Congratulations! You completed the game!</p>
              <button className="btn reset-button" onClick={resetGame}>Reset Game</button>
            </>
          )}
          <Link className="btn home-link" to="/dashboard">Dashboard</Link>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Matchinggame;
