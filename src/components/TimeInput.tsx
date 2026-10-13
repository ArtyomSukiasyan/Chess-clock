import { ITimeInput } from "../models/TimeInput";

const clamp = (value: number, max: number) => Math.min(Math.max(value, 0), max);

export default function TimeInput({
  text,
  value,
  max,
  step = 1,
  onChange,
}: ITimeInput) {
  return (
    <div className="stepper">
      <span className="stepper-label">{text}</span>
      <div className="stepper-controls">
        <button
          type="button"
          className="stepper-btn"
          aria-label={`Decrease ${text}`}
          disabled={value <= 0}
          onClick={() => onChange(clamp(value - step, max))}
        >
          −
        </button>
        <input
          className="stepper-input"
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          aria-label={text}
          value={value}
          onFocus={(e) => e.target.select()}
          onChange={(e) => {
            const digits = e.target.value.replace(/\D/g, "");
            onChange(clamp(Number(digits), max));
          }}
        />
        <button
          type="button"
          className="stepper-btn"
          aria-label={`Increase ${text}`}
          disabled={value >= max}
          onClick={() => onChange(clamp(value + step, max))}
        >
          +
        </button>
      </div>
    </div>
  );
}
