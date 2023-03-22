import React from "react";
import { range } from '../../../src/utils';
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";


function GuessResults({ guesses, checkedAnswer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((i) => (
        <p key={Math.random()} className="guess">
          {range(5).map((j) => (
            <span 
              key={Math.random()} 
              className={`cell ${
                checkedAnswer[i] &&
                checkedAnswer[i][j].status
                }`}>
                {guesses[i]?.charAt(j)}
            </span>
          ))}
        </p>
      ))}      
    </div>
    );
}

export default GuessResults;
