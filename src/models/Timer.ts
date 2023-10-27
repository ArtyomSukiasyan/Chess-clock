export interface ITimer {
  activePlayer: number;
  switchPlayer: () => void;
  playerTime: number;
  isActive: boolean;
}
