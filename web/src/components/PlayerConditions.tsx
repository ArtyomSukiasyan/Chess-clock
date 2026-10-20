import TimeInput from "./TimeInput";
import { IPlayerConditions } from "../models/PlayerConditions";

export default function PlayerConditions({
  player,
  title,
  side,
  onChange,
}: IPlayerConditions) {
  return (
    <section className="card">
      <h2 className="card-title">
        {side && <span className={`side-dot side-dot--${side}`} />}
        {title}
      </h2>
      <TimeInput
        text="Minutes"
        value={player.minutes}
        max={180}
        onChange={(minutes) => onChange({ ...player, minutes })}
      />
      <TimeInput
        text="Seconds"
        value={player.seconds}
        max={59}
        onChange={(seconds) => onChange({ ...player, seconds })}
      />
      <TimeInput
        text="Increment (sec)"
        value={player.increment}
        max={60}
        onChange={(increment) => onChange({ ...player, increment })}
      />
    </section>
  );
}
