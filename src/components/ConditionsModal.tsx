import { IConditionsModal } from "../models/ConditionsModal";
import TimeInput from "./TimeInput";

export default function ConditionsModal({
  player1Time,
  handlePlayer1TimeChange,
  player1Increment,
  handlePlayer1IncrementChange,
  player2Time,
  handlePlayer2TimeChange,
  player2Increment,
  handlePlayer2IncrementChange,
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
            onChange={handlePlayer1TimeChange}
          />

          <TimeInput
            text="Increment (sec):"
            value={player1Increment}
            onChange={handlePlayer1IncrementChange}
          />
        </div>

        <div className="player-conditions">
          <h2>Player 2</h2>
          <TimeInput
            text="Initial Time (sec):"
            value={player2Time}
            onChange={handlePlayer2TimeChange}
          />

          <TimeInput
            text="Increment (sec):"
            value={player2Increment}
            onChange={handlePlayer2IncrementChange}
          />
        </div>
      </div>
      <div>
        <button onClick={closeModal}>Submit</button>
      </div>
    </div>
  );
}
