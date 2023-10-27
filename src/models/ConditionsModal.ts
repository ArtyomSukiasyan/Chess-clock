import { ChangeEvent } from "react";

export interface IConditionsModal {
  player1Time: number;
  handlePlayer1TimeChange: (e: ChangeEvent<HTMLInputElement>) => void;
  player1Increment: number;
  handlePlayer1IncrementChange: (e: ChangeEvent<HTMLInputElement>) => void;
  player2Time: number;
  handlePlayer2TimeChange: (e: ChangeEvent<HTMLInputElement>) => void;
  player2Increment: number;
  handlePlayer2IncrementChange: (e: ChangeEvent<HTMLInputElement>) => void;
  closeModal: () => void;
}
