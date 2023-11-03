import { IConditionsModal } from "../models/ConditionsModal";
import TimeInput from "./TimeInput";

export default function ConditionsModal({
  player1,
  player1TimeChange,
  player2,
  player2TimeChange,
  closeModal,
}: IConditionsModal) {
  return (
    <div className="modal">
      <div className="controls">
        <div className="player-conditions">
          <h2>Player 1</h2>
          <TimeInput
            text="Initial time (minutes):"
            value={player1.minutes}
            onChange={(e) =>
              player1TimeChange((prev) => {
                return {
                  ...prev,
                  minutes: Number(e.target.value),
                };
              })
            }
          />
          <TimeInput
            text="Initial time (sec):"
            value={player1.seconds}
            onChange={(e) =>
              player1TimeChange((prev) => {
                return {
                  ...prev,
                  seconds: Number(e.target.value),
                };
              })
            }
          />

          <TimeInput
            text="Increment (sec):"
            value={player1.increment}
            onChange={(e) =>
              player1TimeChange((prev) => {
                return {
                  ...prev,
                  increment: Number(e.target.value),
                };
              })
            }
          />
        </div>

        <div className="player-conditions">
          <h2>Player 2</h2>
          <TimeInput
            text="Initial Time (minutes):"
            value={player2.minutes}
            onChange={(e) =>
              player2TimeChange((prev) => {
                return {
                  ...prev,
                  minutes: Number(e.target.value),
                };
              })
            }
          />
          <TimeInput
            text="Initial Time (sec):"
            value={player2.seconds}
            onChange={(e) =>
              player2TimeChange((prev) => {
                return {
                  ...prev,
                  seconds: Number(e.target.value),
                };
              })
            }
          />

          <TimeInput
            text="Increment (sec):"
            value={player2.increment}
            onChange={(e) =>
              player2TimeChange((prev) => {
                return {
                  ...prev,
                  increment: Number(e.target.value),
                };
              })
            }
          />
        </div>
      </div>
      <div>
        <button onClick={closeModal}>Submit</button>
      </div>
    </div>
  );
}
