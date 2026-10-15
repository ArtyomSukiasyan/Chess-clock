import Buttons from "./Buttons";
import Timer from "./Timer";
import { IClock } from "../models/Clock";

export default function Clock({
  activePlayer,
  player1,
  player2,
  switchPlayer,
  toggleClock,
  resetClock,
  restartClock,
  isRunning,
}: IClock) {
  return (
    <div className="clock">
      <Timer
        id="white"
        isActive={activePlayer === "white"}
        player={player1}
        switchPlayer={switchPlayer}
      />

      <Buttons
        isRunning={isRunning}
        resetClock={resetClock}
        restartClock={restartClock}
        toggleClock={toggleClock}
      />
      <Timer
        id="black"
        isActive={activePlayer === "black"}
        player={player2}
        switchPlayer={switchPlayer}
      />
    </div>
  );
}
