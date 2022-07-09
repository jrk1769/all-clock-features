import { useState } from "react";
import GenericSpan from "./genericSpan";
import "./Stopwatch.css";
import {
  Start,
  Pause,
  Play,
  Timer,
  Stop,
  StartOver,
} from "../../stopWatchConstants";

export default function Stopwatch() {
  const [stopWatchState, setStopWatchState] = useState(0);
  const [secValue, setSecValue] = useState(0);
  const [timerId, setTimerId] = useState(0);
  const startTimer = () => {
    let tId = setInterval(() => {
      setSecValue((sec) => sec + 1);
    }, 1000);
    setTimerId(tId);
  };
  const stopTimer = (id) => {
    clearInterval(id);
    setSecValue(0);
  };
  const pauseTimer = (id) => {
    clearInterval(id);
  };
  const playTimer = (id) => {
    startTimer();
  };
  const getFormattedTimer = (value) => {
    const secDigit = parseInt(value, 10); // convert value to number if it's string
    let hours = Math.floor(secDigit / 3600); // get hours
    let minutes = Math.floor((secDigit - hours * 3600) / 60); // get minutes
    let seconds = secDigit - hours * 3600 - minutes * 60; //  get seconds
    // add 0 if value < 10; Example: 2 => 02
    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    return hours + ":" + minutes + ":" + seconds; // Return is HH : MM : SS
  };
  return (
    <>
      <h1 style={{ color: "#d8d273" }}>STOPWATCH</h1>
      <div className="watchContainer">
        <div className="container">
          <div className="watchElements">
            {stopWatchState === 0 && (
              <>
                <GenericSpan
                  type={Start.type}
                  className={Start.className}
                  text={Start.text}
                  handleClick={() => {
                    startTimer();
                    setStopWatchState(1);
                  }}
                />
              </>
            )}
            {stopWatchState === 1 && (
              <>
                <GenericSpan
                  type={Stop.type}
                  className={Stop.className}
                  text={Stop.text}
                  handleClick={() => {
                    pauseTimer(timerId);
                    setStopWatchState(3);
                  }}
                />
                <GenericSpan
                  type={Timer.type}
                  className={Timer.className}
                  text={getFormattedTimer(secValue)}
                />
                <GenericSpan
                  type={Pause.type}
                  className={Pause.className}
                  text={Pause.text}
                  handleClick={() => {
                    pauseTimer(timerId);
                    setStopWatchState(2);
                  }}
                />
              </>
            )}
            {stopWatchState === 2 && (
              <>
                <GenericSpan
                  type={Stop.type}
                  className={Stop.className + " topReset"}
                  text={Stop.text}
                  handleClick={() => {
                    pauseTimer(timerId);
                    setStopWatchState(3);
                  }}
                />
                <GenericSpan
                  type={Timer.type}
                  className={Timer.className}
                  text={getFormattedTimer(secValue)}
                />
                <GenericSpan
                  type={Play.type}
                  className={Play.className}
                  text={Play.text}
                  handleClick={() => {
                    playTimer(timerId);
                    setStopWatchState(1);
                  }}
                />
              </>
            )}
            {stopWatchState === 3 && (
              <>
                <GenericSpan
                  type={StartOver.type}
                  className="stopTimer"
                  text={StartOver.text}
                  handleClick={() => {
                    stopTimer(timerId);
                    setStopWatchState(0);
                  }}
                />
                <GenericSpan
                  type={Timer.type}
                  className={Timer.className}
                  text={getFormattedTimer(secValue)}
                />
                <GenericSpan
                  type={StartOver.type}
                  className="playTimer"
                  text={StartOver.text}
                  handleClick={() => {
                    stopTimer(timerId);
                    setStopWatchState(0);
                  }}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
