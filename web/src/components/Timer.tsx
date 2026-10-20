import { ITimer } from "../models/Timer";

const pad = (value: number) => String(value).padStart(2, "0");

export default function Timer({ switchPlayer, player, isActive, id }: ITimer) {
  return (
    <div
      id={id}
      className={`timer ${isActive ? "active" : ""}`}
      onClick={isActive ? switchPlayer : () => {}}
    >
      <span className={`timer-value ${id === "white" ? "timer-value--flipped" : ""}`}>
        {pad(player.minutes)}:{pad(player.seconds)}
      </span>
    </div>
  );
}
