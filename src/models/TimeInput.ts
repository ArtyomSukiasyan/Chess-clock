export interface ITimeInput {
  text: string;
  value: number;
  max: number;
  step?: number;
  onChange: (value: number) => void;
}
