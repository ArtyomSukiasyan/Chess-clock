import PauseIcon from "../assets/icons/Pause";
import SettingsIcon from "../assets/icons/Settings";
import StartIcon from "../assets/icons/Start";
import { IButtonProps } from "../models/ButtonProps";

export default function Buttons({
  isRunning,
  toggleClock,
  resetClock,
}: IButtonProps) {
  return (
    <div className="icons">
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
