import { initialTime } from "../constants/initialTime";
import { IInitialTime } from "../models/InitialTime";

function get(player: "player1" | "player2"): IInitialTime {
  const localValue = localStorage.getItem(player);

  return localValue ? JSON.parse(localValue) : initialTime;
}

function save(player: "player1" | "player2", value: IInitialTime) {
  localStorage.setItem(player, JSON.stringify(value));
}

export const local = { get, save };
