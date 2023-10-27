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
        <TimeInput
          text="Player 1 Initial time:"
          value={player1Time}
          onChange={handlePlayer1TimeChange}
        />

        <TimeInput
          text="Player 1 Increment:"
          value={player1Increment}
          onChange={handlePlayer1IncrementChange}
        />

        <TimeInput
          text="Player 2 Initial Time:"
          value={player2Time}
          onChange={handlePlayer2TimeChange}
        />

        <TimeInput
          text="Player 2 Increment:"
          value={player2Increment}
          onChange={handlePlayer2IncrementChange}
        />
      </div>
      <button onClick={closeModal}>Submit</button>
    </div>
  );
}
