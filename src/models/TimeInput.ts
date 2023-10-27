import { ChangeEvent } from "react";

export interface ITimeInput {
  text: string;
  value: number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
