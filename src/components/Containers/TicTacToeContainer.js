import { useState } from "react";

import TicTacToeView from "../Views/TicTacToeView"



const TicTacToeContainer = () => {
  const [playerIcon, setPlayerIcon] = useState(' ');
  const [gameActive, setGameActive] = useState(false);

  function playerIconChange(e) {
    if (e < 0) {
      if (playerIcon === 'X') {
        setPlayerIcon('O');
        return;
      }
      else{
        setPlayerIcon('X');
        return;
      }
    }
    else{
      if(e === 0){
        setPlayerIcon('O');
      } 
      else setPlayerIcon('X')
    }
    return;
  }

  function gameStatusChange(e){
    setGameActive(e);
  }

 
  function gameWon() {



    return false;
  }


  function playOffline() {
    gameStatusChange(true);
    let player = Math.floor(Math.random() * 2);
    playerIconChange(Math.floor(Math.random() * 2));
    console.log(playerIcon);
    while (!gameActive) {


      if (gameWon) gameActive = false;

    }
  }


  return (
    <TicTacToeView
      playOffline={playOffline} />
  );
};


export default TicTacToeContainer