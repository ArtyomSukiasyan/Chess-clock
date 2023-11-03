import TimeInput from "./TimeInput";
import { IPlayerConditions } from "../models/PlayerConditions";

export default function PlayerConditions({
  player,
  playerName,
  onChange,
}: IPlayerConditions) {
  return (
    <div className="player-conditions">
      <h2>{playerName}</h2>
      <TimeInput
        text="Initial time (minutes):"
        value={player.minutes}
        onChange={(e) =>
          onChange((prev) => {
            return {
              ...prev,
              minutes: Number(e.target.value),
            };
          })
        }
      />
      <TimeInput
        text="Initial time (sec):"
        value={player.seconds}
        onChange={(e) =>
          onChange((prev) => {
            return {
              ...prev,
              seconds: Number(e.target.value),
            };
          })
        }
      />

      <TimeInput
        text="Increment (sec):"
        value={player.increment}
        onChange={(e) =>
          onChange((prev) => {
            return {
              ...prev,
              increment: Number(e.target.value),
            };
          })
        }
      />
    </div>
  );
}
