import React from "react";

function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map((guess) => (
        <p key={Math.random()} className="guess">{guess}</p>
      ))}
      
    </div>
    );
}

export default GuessResults;
