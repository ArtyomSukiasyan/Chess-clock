import { IInitialTime } from "./InitialTime";

export interface IPlayerConditions {
  player: IInitialTime;
  title: string;
  side?: "white" | "black";
  onChange: (value: IInitialTime) => void;
}
