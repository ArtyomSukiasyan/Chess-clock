export interface IClock {
  activePlayer: number;
  player1Time: number;
  player2Time: number;
  switchPlayer: () => void;
  toggleClock: () => void;
  resetClock: () => void;
  isRunning: boolean;
}
