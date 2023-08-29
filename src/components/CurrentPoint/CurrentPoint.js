import Button from '../Button/Button';
import PlayerCard from '../PlayerCard/PlayerCard';
import './CurrentPoint.css';
import React, { useState,useEffect } from "react";
import {
  BsFillDice1Fill,
  BsFillDice2Fill,
  BsFillDice3Fill,
  BsFillDice4Fill,
  BsFillDice5Fill,
  BsFillDice6Fill,
} from "react-icons/bs";
export default function CurrentPoint({setWinner}) {
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [currentScore, setCurrentScore] = useState(0);
  const [currentScore1, setCurrentScore1] = useState(0);
  const [totalScorePlayer1, setTotalScorePlayer1] = useState(0);
  const [totalScorePlayer2, setTotalScorePlayer2] = useState(0);
  const [randomDice, setRandomDice] = useState(null);
  const [name, setName] = useState('game1');
  const [name1, setName1] = useState('game2');
  const [currentPlayerIndicator, setCurrentPlayerIndicator] = useState(1);
    const diceIcons = [
    null,
    <BsFillDice1Fill />,
    <BsFillDice2Fill />,
    <BsFillDice3Fill />,
    <BsFillDice4Fill />,
    <BsFillDice5Fill />,
    <BsFillDice6Fill />,
  ]
  useEffect(() => {
    setRandomDice(4);
  }, []);
  const getRandomDice = () => {
    const random = Math.floor(Math.random() * 6) + 1;
    setRandomDice(random)
    if(currentPlayer  === 1){
      if(random === 1){
        setCurrentScore(0)
        setCurrentPlayer(2)
      }else {
        setCurrentScore(currentScore + random);
      }
    }else{
      if(random === 1){
        setCurrentScore1(0)
        setCurrentPlayer(1)
      }else {
        setCurrentScore1(currentScore1 + random);
      }
    }
  };
  const hold = () => {
    if (currentPlayer === 1) {
      setTotalScorePlayer1(totalScorePlayer1 + currentScore);
      if (totalScorePlayer1 + currentScore >= 100) {
        setWinner({ win: true, name: name });
      }
      setCurrentScore(0);
      setCurrentPlayerIndicator(2);
      setCurrentPlayer(2);
    } else {
      setTotalScorePlayer2(totalScorePlayer2 + currentScore1);
      if (totalScorePlayer2 + currentScore1 >= 100) { 
        setWinner({ win: true, name: name1 });
      }
      setCurrentScore1(0);
      setCurrentPlayerIndicator(1);
      setCurrentPlayer(1);
    }
  };
  return (
    <div className="Container">
      <PlayerCard id={`${currentPlayerIndicator === 1 ? 'current-player' : ''}`}   className="Player1Card2" name={name} totalScorePlayer={totalScorePlayer1} currentScore={currentScore}/>
      <hr className="br"/>
      <div className="iconBtns">
      <Button className="NewGame"  value={"🐷NEW GAME"} onClick={()=>{
              setCurrentScore1(0);
              setCurrentPlayer(0);
              setTotalScorePlayer1(0)
              setTotalScorePlayer2(0)
      }}/><br className="hr"/>
      <div className="DiceIcon">{diceIcons[randomDice]}</div>
      <Button className="role" value={"🎲ROLL THE DICE"} onClick={getRandomDice}/> <br className="hr"/>
      <Button className="leave" value={"👌LEAVE"} onClick={hold}/>
      </div>
      <PlayerCard  id={`${currentPlayerIndicator === 2 ? 'current-player' : ''}`}  className="Player1Card1" name={name1} totalScorePlayer={totalScorePlayer2} currentScore={currentScore1}/>
    </div>
  );
}