import { ITimer } from "../models/Timer";

export default function Timer({
  activePlayer,
  switchPlayer,
  playerTime,
  isActive
}: ITimer) {
  return (
    <div
      className={`timer ${isActive ? "active" : ""}`}
      onClick={switchPlayer}
    >
      Player {activePlayer}: {playerTime}
    </div>
  );
}
