export interface IPreset {
  category: string;
  minutes: number;
  increment: number;
}

export const presets: IPreset[] = [
  { category: "Bullet", minutes: 1, increment: 0 },
  { category: "Bullet", minutes: 2, increment: 1 },
  { category: "Blitz", minutes: 3, increment: 0 },
  { category: "Blitz", minutes: 3, increment: 2 },
  { category: "Blitz", minutes: 5, increment: 0 },
  { category: "Blitz", minutes: 5, increment: 3 },
  { category: "Rapid", minutes: 10, increment: 0 },
  { category: "Rapid", minutes: 10, increment: 5 },
  { category: "Rapid", minutes: 15, increment: 10 },
];
