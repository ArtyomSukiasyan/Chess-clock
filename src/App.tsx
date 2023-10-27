import { useState, useEffect, ChangeEvent } from "react";
import "./App.css";
import Clock from "./components/Clock";
import ConditionsModal from "./components/ConditionsModal";

function App() {
  const [player1Time, setPlayer1Time] = useState(50);
  const [player2Time, setPlayer2Time] = useState(50);
  const [player1Increment, setPlayer1Increment] = useState(0);
  const [player2Increment, setPlayer2Increment] = useState(0);
  const [activePlayer, setActivePlayer] = useState(1);
  const [isRunning, setIsRunning] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(true);

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
        const isHaveTimes = player1Time > 0 && player2Time > 0;

        if (activePlayer === 1 && isHaveTimes) {
          setPlayer1Time(player1Time - 1);
        } else if (activePlayer === 2 && isHaveTimes) {
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
      {modalIsOpen ? (
        <ConditionsModal
          player1Time={player1Time}
          handlePlayer1TimeChange={handlePlayer1TimeChange}
          player1Increment={player1Increment}
          handlePlayer1IncrementChange={handlePlayer1IncrementChange}
          player2Time={player2Time}
          handlePlayer2TimeChange={handlePlayer2TimeChange}
          player2Increment={player2Increment}
          handlePlayer2IncrementChange={handlePlayer2IncrementChange}
          closeModal={() => setModalIsOpen(false)}
        />
      ) : (
        <Clock
          activePlayer={activePlayer}
          player1Time={player1Time}
          player2Time={player2Time}
          switchPlayer={switchPlayer}
          resetClock={resetClock}
          toggleClock={() => setIsRunning(!isRunning)}
          isRunning={isRunning}
        />
      )}
    </div>
  );
}

export default App;
