import React from "react";

export default function PlayerCard({ name,currentScore,totalScorePlayer,className, id}) {
  return (
        <div id={id} class={className}>
        <h1>{name}</h1>
        <p>{totalScorePlayer}</p>
        <div className="Player1CardMini">
        <p>Current Points <hr className="hr"/> {currentScore}</p>
      </div>
    </div>
  );
}