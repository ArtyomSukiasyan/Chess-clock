import { useEffect, useRef, useState } from "react";
import { IConditionsModal } from "../models/ConditionsModal";
import { IInitialTime } from "../models/InitialTime";
import { presets } from "../constants/presets";
import PlayerConditions from "./PlayerConditions";

const isSameTime = (a: IInitialTime, b: IInitialTime) =>
  a.minutes === b.minutes &&
  a.seconds === b.seconds &&
  a.increment === b.increment;

const hasTime = (player: IInitialTime) =>
  player.minutes > 0 || player.seconds > 0;

// Matches the .collapsible transition in App.css
const COLLAPSE_MS = 350;

export default function ConditionsModal({
  player1,
  player1TimeChange,
  player2,
  player2TimeChange,
  closeModal,
}: IConditionsModal) {
  const [sameForBoth, setSameForBoth] = useState(isSameTime(player1, player2));
  const [isCollapsing, setIsCollapsing] = useState(false);
  const shouldRevealCards = useRef(false);
  const collapseTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(collapseTimer.current), []);

  // After switching to separate times, scroll down so both color cards are fully visible
  useEffect(() => {
    if (sameForBoth || !shouldRevealCards.current) {
      return;
    }

    shouldRevealCards.current = false;
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }, [sameForBoth]);

  const setBoth = (value: IInitialTime) => {
    player1TimeChange(value);
    player2TimeChange(value);
  };

  const toggleSameForBoth = () => {
    if (isCollapsing) {
      return;
    }

    if (sameForBoth) {
      shouldRevealCards.current = true;
      setSameForBoth(false);

      return;
    }

    // Mirror the reveal: scroll back up while the Black card folds away, then merge the cards
    setIsCollapsing(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    collapseTimer.current = setTimeout(() => {
      player2TimeChange(player1);
      setSameForBoth(true);
      setIsCollapsing(false);
    }, COLLAPSE_MS);
  };

  const canStart = hasTime(player1) && hasTime(player2);

  return (
    <div className="setup">
      <header className="setup-header">
        <h1>Chess Clock</h1>
        <p>Choose a time control</p>
      </header>

      <div className="presets">
        {presets.map(({ category, minutes, increment }) => {
          const preset = { minutes, seconds: 0, increment };
          const isSelected =
            isSameTime(player1, preset) && isSameTime(player2, preset);

          return (
            <button
              key={`${minutes}+${increment}`}
              type="button"
              className={`preset ${isSelected ? "preset--selected" : ""}`}
              onClick={() => {
                setBoth(preset);
                setSameForBoth(true);
              }}
            >
              <span className="preset-time">
                {minutes} + {increment}
              </span>
              <span className="preset-category">{category}</span>
            </button>
          );
        })}
      </div>

      <div className="section-row">
        <h2 className="section-title">Custom</h2>
        <label className="switch">
          <input
            type="checkbox"
            checked={sameForBoth || isCollapsing}
            onChange={toggleSameForBoth}
          />
          <span className="switch-track" />
          Same for both
        </label>
      </div>

      {sameForBoth ? (
        <PlayerConditions
          title="Both players"
          player={player1}
          onChange={setBoth}
        />
      ) : (
        <>
          <PlayerConditions
            title="White"
            side="white"
            player={player1}
            onChange={player1TimeChange}
          />
          <div
            className={`collapsible ${isCollapsing ? "collapsible--closed" : ""}`}
          >
            <div className="collapsible-inner">
              <PlayerConditions
                title="Black"
                side="black"
                player={player2}
                onChange={player2TimeChange}
              />
            </div>
          </div>
        </>
      )}

      <div className="setup-footer">
        <button
          type="button"
          className="start-btn"
          disabled={!canStart}
          onClick={closeModal}
        >
          {canStart ? "Start" : "Set a time to start"}
        </button>
      </div>
    </div>
  );
}
