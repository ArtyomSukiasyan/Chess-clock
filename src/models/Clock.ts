import { MouseEvent } from "react";

export interface IClock {
  activePlayer: "white" | "black";
  player1Time: number;
  player2Time: number;
  switchPlayer: (e: MouseEvent<HTMLDivElement>) => void;
  toggleClock: () => void;
  resetClock: () => void;
  isRunning: boolean;
}
