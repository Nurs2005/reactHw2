import React, { useState } from "react";
import CurrentPoint from "../CurrentPoint/CurrentPoint";
import Setwin from "../Setwin/Setwin";

export default function Container() {
  const [winner, setWinner] = useState({ win: false, name: "" });

  return (
    <div className="Containerr">
      <CurrentPoint setWinner={setWinner} />
      {winner.win && <Setwin winner={winner.name} />}
    </div>
  );
}
