import { ITimer } from "../models/Timer";

export default function Timer({ switchPlayer, playerTime, isActive, id }: ITimer) {
  return (
    <div id={id} className={`timer ${isActive ? "active" : ""}`} onClick={switchPlayer}>
      <span className="timer-value">{playerTime}</span>
    </div>
  );
}
