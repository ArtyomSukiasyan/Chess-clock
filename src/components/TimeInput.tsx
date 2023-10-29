import { ITimeInput } from "../models/TimeInput";

export default function TimeInput({ text, value, onChange }: ITimeInput) {
  const inputStyle = {
    padding: "5px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    fontSize: "40px",
    width: "80px",  
    height: "80px"
  };
  return (
    <div className="time-input">
      {text}
      <input
        min={0}
        type="number"
        value={value}
        onChange={onChange}
        style={inputStyle}
      />
    </div>
  );
}
