import PauseIcon from "../assets/icons/Pause";
import SettingsIcon from "../assets/icons/Settings";
import StartIcon from "../assets/icons/Start";
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

      <div className="icons">
        <div className="icon" onClick={toggleClock}>
          {isRunning ? <PauseIcon /> : <StartIcon />}
        </div>
        <div className="icon" onClick={resetClock}>
          <SettingsIcon />
        </div>
      </div>
      <Timer
        id="black"
        switchPlayer={switchPlayer}
        playerTime={player2Time}
        isActive={activePlayer === "black"}
      />
    </div>
  );
}
