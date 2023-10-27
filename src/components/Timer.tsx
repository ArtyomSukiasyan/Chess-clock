import { ITimer } from "../models/Timer";

export default function Timer({
  switchPlayer,
  playerTime,
  isActive,
  player
}: ITimer) {
  return (
    <div
      className={`timer ${isActive ? "active" : ""}`}
      onClick={switchPlayer}
    >
      Player {player}: {playerTime}
    </div>
  );
}
