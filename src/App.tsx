import { useState, useEffect, MouseEvent } from "react";
import Clock from "./components/Clock";
import ConditionsModal from "./components/ConditionsModal";
import "./App.css";

function App() {
  const [player1Time, setPlayer1Time] = useState(0);
  const [player2Time, setPlayer2Time] = useState(0);
  const [player1Increment, setPlayer1Increment] = useState(0);
  const [player2Increment, setPlayer2Increment] = useState(0);
  const [activePlayer, setActivePlayer] = useState<"white" | "black">("white");
  const [isRunning, setIsRunning] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(true);

  useEffect(() => {
    let timer: string | number | NodeJS.Timeout | undefined;

    if (isRunning) {
      timer = setInterval(() => {
        const isHaveTimes = player1Time > 0 && player2Time > 0;

        if (activePlayer === "white" && isHaveTimes) {
          setPlayer1Time(player1Time - 1);
        } else if (activePlayer === "black" && isHaveTimes) {
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

  const switchPlayer = (e: MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;

    if (target.id !== activePlayer) {
      return;
    }

    if (activePlayer === "white") {
      setPlayer1Time((prev) => prev + player1Increment);
    } else {
      setPlayer2Time((prev) => prev + player2Increment);
    }

    setActivePlayer(activePlayer === "white" ? "black" : "white");
  };

  const resetClock = () => {
    setIsRunning(false);
    setModalIsOpen(true);
    setActivePlayer("white");
  };

  return (
    <div>
      {modalIsOpen ? (
        <ConditionsModal
          player1Time={player1Time}
          player1TimeChange={(e) => setPlayer1Time(parseInt(e.target.value))}
          player1Increment={player1Increment}
          player1IncrementChange={(e) =>
            setPlayer1Increment(parseInt(e.target.value))
          }
          player2Time={player2Time}
          player2TimeChange={(e) => setPlayer2Time(parseInt(e.target.value))}
          player2Increment={player2Increment}
          player2IncrementChange={(e) =>
            setPlayer2Increment(parseInt(e.target.value))
          }
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
