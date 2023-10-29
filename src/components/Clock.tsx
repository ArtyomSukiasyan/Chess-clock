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
        id="white"
        switchPlayer={switchPlayer}
        playerTime={player1Time}
        isActive={activePlayer === "white"}
      />

      <button onClick={toggleClock}>{isRunning ? "Pause" : "Start"}</button>
      <button onClick={resetClock}>Reset</button>

      <Timer
        id="black"
        switchPlayer={switchPlayer}
        playerTime={player2Time}
        isActive={activePlayer === "black"}
      />
    </div>
  );
}
