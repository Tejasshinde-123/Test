import React, { useState, useEffect } from 'react';
import './Stopwatch.css'

function Stopwatch() {
  const [timer, setTimer] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  useEffect(() => {
    return () => {
      clearInterval(timer);
    };
  }, [timer]);

  const startStop = () => {
    if (isRunning) {
      clearInterval(timer);
    } else {
      const newTimer = setInterval(updateDisplay, 1000);
      setTimer(newTimer);
    }
    setIsRunning(!isRunning);
  };

  const updateDisplay = () => {
    setSeconds((prevSeconds) => {
      let newSeconds = prevSeconds + 1;
      if (newSeconds === 60) {
        setSeconds(0);
        setMinutes((prevMinutes) => {
          let newMinutes = prevMinutes + 1;
          if (newMinutes === 60) {
            setMinutes(0);
            setHours((prevHours) => prevHours + 1);
          }
          return newMinutes;
        });
      }
      return newSeconds;
    });
  };

  const reset = () => {
    clearInterval(timer);
    setSeconds(0);
    setMinutes(0);
    setHours(0);
    setIsRunning(false);
  };

  const formatTime = (time) => {
    return (time < 10 ? '0' : '') + time;
  };

  return (
    <div className="stopwatch">
      <div id="display">{formatTime(hours)}:{formatTime(minutes)}:{formatTime(seconds)}</div>
      <button id="startStopBtn" onClick={startStop}>
        {isRunning ? 'Stop' : 'Start'}
      </button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Stopwatch;
