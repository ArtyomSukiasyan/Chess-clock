import { Dispatch, SetStateAction } from "react";
import { IInitialTime } from "./InitialTime";
import { IIncrementRule } from "./IncrementRule";

export interface IConditionsModal {
  player1: IInitialTime;
  player1TimeChange: Dispatch<SetStateAction<IInitialTime>>;
  player2: IInitialTime;
  player2TimeChange: Dispatch<SetStateAction<IInitialTime>>;
  incrementRule: IIncrementRule;
  incrementRuleChange: Dispatch<SetStateAction<IIncrementRule>>;
  closeModal: () => void;
}
