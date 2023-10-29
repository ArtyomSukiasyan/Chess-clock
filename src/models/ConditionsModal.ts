import { ChangeEvent } from "react";

export interface IConditionsModal {
  player1Time: number;
  player1TimeChange: (e: ChangeEvent<HTMLInputElement>) => void;
  player1Increment: number;
  player1IncrementChange: (e: ChangeEvent<HTMLInputElement>) => void;
  player2Time: number;
  player2TimeChange: (e: ChangeEvent<HTMLInputElement>) => void;
  player2Increment: number;
  player2IncrementChange: (e: ChangeEvent<HTMLInputElement>) => void;
  closeModal: () => void;
}
