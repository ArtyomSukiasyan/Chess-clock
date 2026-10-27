import { initialTime } from "../constants/initialTime";
import { initialIncrementRule } from "../constants/incrementRule";
import { IInitialTime } from "../models/InitialTime";
import { IIncrementRule } from "../models/IncrementRule";

const INCREMENT_RULE_KEY = "incrementRule";

function get(player: "player1" | "player2"): IInitialTime {
  const localValue = localStorage.getItem(player);

  return localValue ? JSON.parse(localValue) : initialTime;
}

function save(player: "player1" | "player2", value: IInitialTime) {
  localStorage.setItem(player, JSON.stringify(value));
}

function getIncrementRule(): IIncrementRule {
  const localValue = localStorage.getItem(INCREMENT_RULE_KEY);

  return localValue
    ? { ...initialIncrementRule, ...JSON.parse(localValue) }
    : initialIncrementRule;
}

function saveIncrementRule(value: IIncrementRule) {
  localStorage.setItem(INCREMENT_RULE_KEY, JSON.stringify(value));
}

export const local = { get, save, getIncrementRule, saveIncrementRule };
