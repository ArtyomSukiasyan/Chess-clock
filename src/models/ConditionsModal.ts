import { Dispatch, SetStateAction } from "react";
import { IInitialTime } from "./InitialTime";

export interface IConditionsModal {
  player1: IInitialTime;
  player1TimeChange: Dispatch<SetStateAction<IInitialTime>>;
  player2: IInitialTime;
  player2TimeChange: Dispatch<SetStateAction<IInitialTime>>;
  closeModal: () => void;
}
