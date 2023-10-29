import { MouseEvent } from "react";

export interface ITimer {
  switchPlayer: (e: MouseEvent<HTMLDivElement>) => void;
  playerTime: number;
  isActive: boolean;
  id: string;
}
