import Buttons from "./Buttons";
import Timer from "./Timer";
import { IClock } from "../models/Clock";

export default function Clock({
  activePlayer,
  player1Time,
  player2Time,
  switchPlayer,
  toggleClock,
  resetClock,
  isRunning,
}: IClock) {
  return (
    <div className="clock">
      <Timer
        id="white"
        switchPlayer={switchPlayer}
        playerTime={player1Time}
        isActive={activePlayer === "white"}
      />

      <Buttons
        isRunning={isRunning}
        resetClock={resetClock}
        toggleClock={toggleClock}
      />

      <Timer
        id="black"
        switchPlayer={switchPlayer}
        playerTime={player2Time}
        isActive={activePlayer === "black"}
      />
    </div>
  );
}
