import './App.css';
import Clock from './components/clock/clock';
import AppBtns from './components/appButton/appBtns';

function App() {
  return (
    <div className="app">
      
        <div className='appHeading'>
          <h2>Android Clock</h2>
        </div>
        <Clock />
    
      <footer className='appFooter'>
        <AppBtns class="alarmBtn footerBtn" value="Alarm" />
        <AppBtns class="stopwatchBtn footerBtn" value="Stopwatch" />
        <AppBtns class="countdownBtn footerBtn" value="Countdown" />
        <AppBtns class="clockBtn footerBtn selected" value="Clock" />
      </footer>
    </div>
  );
}

export default App;
