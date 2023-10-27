import { ITimeInput } from "../models/TimeInput";

export default function TimeInput({ text, value, onChange }: ITimeInput) {
  return (
    <div className="time-input">
      {text}
      <input type="number" value={value} onChange={onChange} />
    </div>
  );
}