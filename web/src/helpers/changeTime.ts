import { IInitialTime } from "../models/InitialTime";

function increaseMinutes(prev: IInitialTime) {
  return {
    ...prev,
    minutes: prev.minutes + Math.trunc((prev.seconds + prev.increment) / 60),
    seconds: (prev.seconds + prev.increment) % 60,
  };
}

function increaseSeconds(prev: IInitialTime) {
  return {
    ...prev,
    seconds: prev.seconds + prev.increment,
  };
}

function decreaseMinutes(prev: IInitialTime) {
  return {
    ...prev,
    minutes: prev.minutes - 1,
    seconds: 59,
  };
}

function decreaseSeconds(prev: IInitialTime) {
  return {
    ...prev,
    seconds: prev.seconds - 1,
  };
}

export const changeTime = {
  increaseMinutes,
  increaseSeconds,
  decreaseMinutes,
  decreaseSeconds,
};
