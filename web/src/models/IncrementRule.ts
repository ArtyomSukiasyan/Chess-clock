// Armageddon-style delayed increment: no increment until a player has made more than `afterMove` moves
export interface IIncrementRule {
  enabled: boolean;
  afterMove: number;
}
