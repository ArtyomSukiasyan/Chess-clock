import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [player1Time, setPlayer1Time] = useState(50);
  const [player2Time, setPlayer2Time] = useState(50);
  const [activePlayer, setActivePlayer] = useState(1);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer: any;
    if (isRunning) {
      timer = setInterval(() => {
        if (activePlayer === 1 && player1Time > 0) {
          setPlayer1Time(player1Time - 1);
        } else if (activePlayer === 2 && player2Time > 0) {
          setPlayer2Time(player2Time - 1);
        }
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isRunning, activePlayer, player1Time, player2Time]);

  const toggleClock = () => {
    setIsRunning(!isRunning);
  };

  const switchPlayer = () => {
    setActivePlayer(activePlayer === 1 ? 2 : 1);
  };

  const resetClock = () => {
    setIsRunning(false);
    setPlayer1Time(300);
    setPlayer2Time(300);
    setActivePlayer(1);
  };

  return (
    <div>
      <div className="clock">
        <div
          className={`timer ${activePlayer === 1 ? "active" : ""}`}
          onClick={switchPlayer}
        >
          Player 1: {player1Time}
        </div>
        <div
          className={`timer ${activePlayer === 2 ? "active" : ""}`}
          onClick={switchPlayer}
        >
          Player 2: {player2Time}
        </div>
      </div>
      <div className="controls">
        <button onClick={toggleClock}>{isRunning ? "Pause" : "Start"}</button>
        <button onClick={resetClock}>Reset</button>
      </div>
    </div>
  );
}

export default App;
