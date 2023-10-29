import { ITimer } from "../models/Timer";

export default function Timer({ switchPlayer, playerTime, isActive }: ITimer) {
  return (
    <div className={`timer ${isActive ? "active" : ""}`} onClick={switchPlayer}>
      <span className="timer-value">{playerTime}</span>
    </div>
  );
}
