import { IConditionsModal } from "../models/ConditionsModal";
import TimeInput from "./TimeInput";

export default function ConditionsModal({
  player1Time,
  player1TimeChange,
  player1Increment,
  player1IncrementChange,
  player2Time,
  player2TimeChange,
  player2Increment,
  player2IncrementChange,
  closeModal,
}: IConditionsModal) {
  return (
    <div className="modal">
      <div className="controls">
        <div className="player-conditions">
          <h2>Player 1</h2>
          <TimeInput
            text="Initial time (sec):"
            value={player1Time}
            onChange={player1TimeChange}
          />

          <TimeInput
            text="Increment (sec):"
            value={player1Increment}
            onChange={player1IncrementChange}
          />
        </div>

        <div className="player-conditions">
          <h2>Player 2</h2>
          <TimeInput
            text="Initial Time (sec):"
            value={player2Time}
            onChange={player2TimeChange}
          />

          <TimeInput
            text="Increment (sec):"
            value={player2Increment}
            onChange={player2IncrementChange}
          />
        </div>
      </div>
      <div>
        <button onClick={closeModal}>Submit</button>
      </div>
    </div>
  );
}
