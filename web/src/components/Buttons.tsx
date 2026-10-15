import PauseIcon from "../assets/icons/Pause";
import RestartIcon from "../assets/icons/Restart";
import SettingsIcon from "../assets/icons/Settings";
import StartIcon from "../assets/icons/Start";
import { IButtonProps } from "../models/ButtonProps";

export default function Buttons({
  isRunning,
  toggleClock,
  resetClock,
  restartClock,
}: IButtonProps) {
  return (
    <div className="icons">
      {!isRunning && (
        <div className="icon" onClick={restartClock}>
          <RestartIcon />
        </div>
      )}

      <div className="icon" onClick={toggleClock}>
        {isRunning ? <PauseIcon /> : <StartIcon />}
      </div>

      {!isRunning && (
        <div className="icon" onClick={resetClock}>
          <SettingsIcon />
        </div>
      )}
    </div>
  );
}
