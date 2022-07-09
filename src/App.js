import "./App.css";
import Clock from "./components/clock/Clock";
import { useState } from "react";
import Stopwatch from "./components/stopwatch/Stopwatch";
import Footer from "./components/footer/Footer";

function App() {
  const [selected, setSelected] = useState(1);
  return (
    <div className="app">
      <div className="displayArea">
        {selected === 0 && "Null"}
        {selected === 1 && <Stopwatch />}
        {selected === 2 && "Null"}
        {selected === 3 && <Clock />}
      </div>

      <footer className="appFooter">
        <Footer
          selected={selected}
          changeSelectedScreen={(screen) => {
            setSelected(screen);
          }}
        />
      </footer>
    </div>
  );
}

export default App;
