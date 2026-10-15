import { ITimer } from "../models/Timer";

export default function Timer({ switchPlayer, player, isActive, id }: ITimer) {
  return (
    <div
      id={id}
      className={`timer ${isActive ? "active" : ""}`}
      onClick={isActive ? switchPlayer : () => {}}
    >
      <span className={id === "white" ? "timer-value" : ""}>
        {player.minutes < 10 && "0"}
        {player.minutes} : {player.seconds < 10 && "0"}
        {player.seconds}
      </span>
    </div>
  );
}
