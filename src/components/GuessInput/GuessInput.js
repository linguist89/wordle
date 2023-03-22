import React from "react";
import GuessResults from "../GuessResults/GuessResults";
import { checkGuess } from "../../game-helpers";

function GuessInput({ answer }) {
  const [guessInput, setGuessInput] = React.useState('');
  const [guesses, setGuesses] = React.useState([]);
  const [checkedAnswer, setCheckedAnswer] = React.useState([]);

  function update_guesses(latestGuess){
    const nextGuesses = guesses
    nextGuesses.push(latestGuess)
    setGuesses(nextGuesses)
  }

  function check_answers(latestGuess, answer){
    const nextCheckedAnswer = checkedAnswer
    const tempCheckedAnswer = checkGuess(latestGuess, answer)
    nextCheckedAnswer.push(tempCheckedAnswer)
    setCheckedAnswer(nextCheckedAnswer)
  }

  return (
    <div>
      <GuessResults 
        guesses={guesses} 
        checkedAnswer={checkedAnswer}
      ></GuessResults>
      <form 
      className="guess-input-wrapper"
      onSubmit={event => {
        event.preventDefault()
        console.info({ guessInput })
        update_guesses(guessInput)
        check_answers(guessInput, answer)
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
