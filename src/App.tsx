import { useState, useEffect, MouseEvent } from "react";
import Clock from "./components/Clock";
import { local } from "./helpers/localStorage";
import "./App.css";
import ConditionsModal from "./components/ConditionsModal";

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

    if (isRunning) {
      timer = setInterval(() => {
        const isWhiteHasTime = player1.seconds > 0 || player1.minutes > 0;
        const isBlackHasTime = player2.seconds > 0 || player2.minutes > 0;

        if (!isWhiteHasTime || !isBlackHasTime) {
          setIsOver(true);
          return;
        }

        if (activePlayer === "white" && isWhiteHasTime) {
          if (player1.seconds - 1 < 0 && player1.minutes > 0) {
            setPlayer1((prev) => {
              return {
                ...prev,
                minutes: prev.minutes - 1,
                seconds: 59,
              };
            });
            return;
          }
          setPlayer1((prev) => {
            return {
              ...prev,
              seconds: prev.seconds - 1,
            };
          });
        } else if (activePlayer === "black" && isBlackHasTime) {
          if (player2.seconds - 1 < 0 && player2.minutes > 0) {
            setPlayer2((prev) => {
              return {
                ...prev,
                minutes: prev.minutes - 1,
                seconds: 59,
              };
            });
            return;
          }
          setPlayer2((prev) => {
            return {
              ...prev,
              seconds: prev.seconds - 1,
            };
          });
        }
      }, 1000);
    } else {
      clearInterval(timer);
    }

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
      if (player1.seconds + player1.increment >= 60) {
        setPlayer1((prev) => {
          return {
            ...prev,
            minutes:
              prev.minutes +
              Math.trunc((player1.seconds + player1.increment) / 60),
            seconds:
              prev.seconds +
              (((player1.seconds + player1.increment) % 60) - 59),
          };
        });
      } else {
        setPlayer1((prev) => {
          return {
            ...prev,
            seconds: prev.seconds + prev.increment,
          };
        });
      }
    } else {
      if (player2.seconds + player2.increment >= 60) {
        setPlayer2((prev) => {
          return {
            ...prev,
            minutes:
              prev.minutes +
              Math.trunc((player2.seconds + player2.increment) / 60),
            seconds:
              prev.seconds +
              (((player2.seconds + player2.increment) % 60) - 59),
          };
        });
      } else {
        setPlayer2((prev) => {
          return {
            ...prev,
            seconds: prev.seconds + prev.increment,
          };
        });
      }
    }
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
