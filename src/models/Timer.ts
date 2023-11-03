import { MouseEvent } from "react";
import { IInitialTime } from "./InitialTime";

export interface ITimer {
  switchPlayer: (e: MouseEvent<HTMLDivElement>) => void;
  player: IInitialTime;
  isActive: boolean;
  id: string;
}
