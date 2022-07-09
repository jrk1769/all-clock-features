import FooterBtn from "../shared/FooterBtn";
import "./Footer.css";

const Footer = (props) => {
  return (
    <>
      <FooterBtn
        class={
          props.selected === 0
            ? "alarmBtn footerBtn selected"
            : "alarmBtn footerBtn"
        }
        handleClick={() => props.changeSelectedScreen(0)}
        value="Alarm"
      />
      <FooterBtn
        class={
          props.selected === 1
            ? "stopwatchBtn footerBtn selected"
            : "stopwatchBtn footerBtn"
        }
        handleClick={() => props.changeSelectedScreen(1)}
        value="Stopwatch"
      />
      <FooterBtn
        class={
          props.selected === 2
            ? "countdownBtn footerBtn selected"
            : "countdownBtn footerBtn"
        }
        handleClick={() => props.changeSelectedScreen(2)}
        value="Countdown"
      />
      <FooterBtn
        class={
          props.selected === 3
            ? "clockBtn footerBtn selected"
            : "clockBtn footerBtn"
        }
        handleClick={() => props.changeSelectedScreen(3)}
        value="Clock"
      />
    </>
  );
};

export default Footer;
