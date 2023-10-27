import { useState, useEffect, ChangeEvent } from "react";
import "./App.css";
import TimeInput from "./components/TimeInput";

function App() {
  const [player1Time, setPlayer1Time] = useState(50);
  const [player2Time, setPlayer2Time] = useState(50);
  const [player1Increment, setPlayer1Increment] = useState(0);
  const [player2Increment, setPlayer2Increment] = useState(0);
  const [activePlayer, setActivePlayer] = useState(1);
  const [isRunning, setIsRunning] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(true);

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handlePlayer1TimeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPlayer1Time(parseInt(e.target.value, 10));
  };

  const handlePlayer2TimeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPlayer2Time(parseInt(e.target.value, 10));
  };

  const handlePlayer1IncrementChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPlayer1Increment(parseInt(e.target.value, 10));
  };

  const handlePlayer2IncrementChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPlayer2Increment(parseInt(e.target.value, 10));
  };

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
    if (activePlayer === 1) {
      setPlayer1Time((prev) => prev + player1Increment);
    } else {
      setPlayer2Time((prev) => prev + player2Increment);
    }

    setActivePlayer(activePlayer === 1 ? 2 : 1);
  };

  const resetClock = () => {
    setIsRunning(false);
    setPlayer1Time(50);
    setPlayer2Time(50);
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
      <button onClick={toggleClock}>{isRunning ? "Pause" : "Start"}</button>
      <button onClick={resetClock}>Reset</button>
      
      {modalIsOpen && (
        <div className="modal">
          <div className="controls">
            <TimeInput
              text="Player 1 Initial time:"
              value={player1Time}
              onChange={handlePlayer1TimeChange}
            />

            <TimeInput
              text="Player 1 Increment:"
              value={player1Increment}
              onChange={handlePlayer1IncrementChange}
            />

            <TimeInput
              text="Player 2 Initial Time:"
              value={player2Time}
              onChange={handlePlayer2TimeChange}
            />

            <TimeInput
              text="Player 2 Increment:"
              value={player2Increment}
              onChange={handlePlayer2IncrementChange}
            />
          </div>
          <button onClick={closeModal}>Submit</button>
        </div>
      )}
    </div>
  );
}

export default App;
