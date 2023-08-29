import React from "react";
import './SetWin.css';

export default function Setwin({ winner }) {
  return (
    <div className="SetWin">
      <p>Поздравляю</p>
      <h1>Выйграл {winner}</h1>
    </div>
  );
}