import { ITimer } from "../models/Timer";

export default function Timer({ switchPlayer, player, isActive, id }: ITimer) {
  return (
    <div
      id={id}
      className={`timer ${isActive ? "active" : ""}`}
      onClick={switchPlayer}
    >
      <span className="timer-value">
        {player.minutes} : {player.seconds}
      </span>
    </div>
  );
}
