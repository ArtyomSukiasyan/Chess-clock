import { MouseEvent } from "react";
import { IInitialTime } from "./InitialTime";

export interface IClock {
  activePlayer: "white" | "black";
  player1: IInitialTime;
  player2: IInitialTime;
  switchPlayer: (e: MouseEvent<HTMLDivElement>) => void;
  toggleClock: () => void;
  resetClock: () => void;
  isRunning: boolean;
}
