import { useState, useEffect, MouseEvent } from "react";
import Clock from "./components/Clock";
import ConditionsModal from "./components/ConditionsModal";
import { local } from "./helpers/localStorage";
import { changeTime } from "./helpers/changeTime";
import "./App.css";

function App() {
  const [player1, setPlayer1] = useState(local.get("player1"));
  const [player2, setPlayer2] = useState(local.get("player2"));
  const [activePlayer, setActivePlayer] = useState<"white" | "black">("white");
  const [isRunning, setIsRunning] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const [isOver, setIsOver] = useState(false);

  useEffect(() => {
    let timer: string | number | NodeJS.Timeout | undefined;

    if (isOver) {
      return;
    }

    if (!isRunning) {
      clearInterval(timer);
      return;
    }

    timer = setInterval(() => {
      const isWhiteHasTime = player1.seconds > 0 || player1.minutes > 0;
      const isBlackHasTime = player2.seconds > 0 || player2.minutes > 0;

      if (!isWhiteHasTime || !isBlackHasTime) {
        setIsOver(true);
        setIsRunning(false);

        return;
      }

      if (activePlayer === "white") {
        if (player1.seconds - 1 < 0) {
          setPlayer1((prev) => changeTime.decreaseMinutes(prev));

          return;
        }

        setPlayer1((prev) => changeTime.decreaseSeconds(prev));

        return;
      }

      if (player2.seconds - 1 < 0) {
        setPlayer2((prev) => changeTime.decreaseMinutes(prev));

        return;
      }

      setPlayer2((prev) => changeTime.decreaseSeconds(prev));
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [
    isRunning,
    activePlayer,
    player2.seconds,
    player1.seconds,
    player1.minutes,
    player2.minutes,
    isOver,
  ]);

  const switchPlayer = (e: MouseEvent<HTMLDivElement>) => {
    if (isOver) {
      return;
    }

    const target = e.target as HTMLDivElement;

    if (target.id !== activePlayer) {
      return;
    }

    setActivePlayer(activePlayer === "white" ? "black" : "white");

    if (!isRunning) {
      return;
    }

    if (activePlayer === "white") {
      if (player1.seconds + player1.increment > 59) {
        setPlayer1((prev) => changeTime.increaseMinutes(prev));

        return;
      }

      setPlayer1((prev) => changeTime.increaseSeconds(prev));

      return;
    }

    if (player2.seconds + player2.increment > 59) {
      setPlayer2((prev) => changeTime.increaseMinutes(prev));

      return;
    }

    setPlayer2((prev) => changeTime.increaseSeconds(prev));
  };

  const resetClock = () => {
    setIsRunning(false);
    setModalIsOpen(true);
    setActivePlayer("white");
  };

  const closeModal = () => {
    local.save("player1", player1);
    local.save("player2", player2);
    setModalIsOpen(false);
  };

  return (
    <div>
      {modalIsOpen ? (
        <ConditionsModal
          player1={player1}
          player2={player2}
          player1TimeChange={setPlayer1}
          player2TimeChange={setPlayer2}
          closeModal={closeModal}
        />
      ) : (
        <Clock
          activePlayer={activePlayer}
          isRunning={isRunning}
          toggleClock={() => setIsRunning(!isRunning)}
          player1={player1}
          player2={player2}
          resetClock={resetClock}
          switchPlayer={switchPlayer}
        />
      )}
    </div>
  );
}

export default App;
