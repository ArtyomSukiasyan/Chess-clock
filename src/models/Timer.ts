export interface ITimer {
  switchPlayer: () => void;
  playerTime: number;
  isActive: boolean;
  player: number;
}
