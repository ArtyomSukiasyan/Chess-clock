import { Dispatch, SetStateAction } from "react";
import { IInitialTime } from "./InitialTime";

export interface IPlayerConditions {
  player: IInitialTime;
  playerName: "player1" | "player2";
  onChange: Dispatch<SetStateAction<IInitialTime>>;
}
