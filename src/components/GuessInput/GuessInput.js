import React from "react";
import GuessResults
 from "../GuessResults/GuessResults";
function GuessInput() {
  const [guessInput, setGuessInput] = React.useState('');
  const [guesses, setGuesses] = React.useState([]);

  function update_guesses(latestGuess){
    const nextGuesses = guesses
    nextGuesses.push(latestGuess)
    setGuesses(nextGuesses)
  }

  return (
    <div>
      <GuessResults guesses={guesses}></GuessResults>
      <form 
      className="guess-input-wrapper"
      onSubmit={event => {
        event.preventDefault()
        console.info({ guessInput })
        update_guesses(guessInput)
        setGuessInput('')
      }}
      >
        <label htmlFor="guess-input">Enter guess:</label>
        <input 
        id="guess-input" 
        type="text"
        pattern="[A-Za-z]{5}"
        value={guessInput}
        onChange={event => {
          setGuessInput(event.target.value.toUpperCase())
        }}
        ></input>
      </form>
    </div>
  );
}

export default GuessInput;
