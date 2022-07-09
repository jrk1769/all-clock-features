import { useState } from "react";
import "./Clock.css";

const Clock = (props) => {
  const [time, setTime] = useState("Loading...");
  const [dateString, setDateString] = useState();
  const currentTime = () => {
    let date = new Date();
    setDateString(date.toDateString("en-US", Option));
    setTime(date.toLocaleTimeString());
  };
  setTimeout(() => currentTime(), 1000);
  return (
    <>
      <h1 style={{ color: "#d8d273" }}>INDIAN STANDARD TIME (IST)</h1>
      <div className="clockContainer">
        <div className="details">
          <p className="dateString">{dateString}</p>
        </div>
        <div className="clock">
          <p className="time">{time}</p>
        </div>
      </div>
    </>
  );
};

export default Clock;
