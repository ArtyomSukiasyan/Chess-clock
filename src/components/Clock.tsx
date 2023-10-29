import { IClock } from "../models/Clock";
import Timer from "./Timer";

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
        switchPlayer={switchPlayer}
        playerTime={player1Time}
        isActive={activePlayer === 1}
      />

      <button onClick={toggleClock}>{isRunning ? "Pause" : "Start"}</button>
      <button onClick={resetClock}>Reset</button>

      <Timer
        switchPlayer={switchPlayer}
        playerTime={player2Time}
        isActive={activePlayer === 2}
      />
    </div>
  );
}
