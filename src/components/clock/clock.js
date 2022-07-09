import { useState } from "react";
import { months, days } from "../../monthsAndDays"

const Clock = props => {
    const [time, setTime] = useState("Loading...");
    const [dateString, setDateString] = useState();
    const currentTime = () => {
        let date = new Date();
        // console.log(days[3]);
        let hh = date.getHours();
        let mm = date.getMinutes();
        let ss = date.getSeconds();
        let dateNum = date.getDate();
        let day = days[date.getDay()];
        let month = months[date.getMonth()];
        let year = date.getFullYear();

        hh = (hh < 10) ? "0" + hh : hh;
        mm = (mm < 10) ? "0" + mm : mm;
        ss = (ss < 10) ? "0" + ss : ss;

        setDateString(day + ", " + dateNum + ", " + month + ", " + year)
            
        setTime(hh + ":" + mm + ":" + ss + " ");

        // return time;
    }
    setTimeout(() => currentTime(), 1000)
    return (
        <div>
            <div className="details">
                <p className="dateString">{dateString}</p>
            </div>
            <div className="clock">
                <p className="time">{time}</p>
            </div>
        </div>
    )
}

export default Clock;