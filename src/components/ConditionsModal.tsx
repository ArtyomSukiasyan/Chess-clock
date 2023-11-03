import { IConditionsModal } from "../models/ConditionsModal";
import PlayerConditions from "./PlayerConditions";

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
        <PlayerConditions
          player={player1}
          playerName={"player1"}
          onChange={player1TimeChange}
        />

        <PlayerConditions
          player={player2}
          playerName="player2"
          onChange={player2TimeChange}
        />
      </div>
      <div>
        <button onClick={closeModal}>Submit</button>
      </div>
    </div>
  );
}
