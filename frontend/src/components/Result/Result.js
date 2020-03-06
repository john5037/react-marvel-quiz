import React from "react";

const Result = ({score, playAgain}) => (
  <div className="ui center aligned header">
    <div className="ui header center">You scored {score} / 3 correct answers!</div>
    <button className="ui green button" onClick={playAgain}>
      Play again!
    </button>
  </div>
);

export default Result;
