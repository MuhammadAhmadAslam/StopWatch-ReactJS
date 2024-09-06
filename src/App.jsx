import { useState } from 'react';
import { Link } from 'react-router-dom';

function App() {
  let [milliSeconds, setMilliSeconds] = useState(0);
  let [seconds, setSeconds] = useState(0);
  let [minutes, setMinutes] = useState(0);
  let [hours, setHours] = useState(0);
  let [timer, setTimer] = useState(null); 

  let startTimer = () => {
    console.log('timer started');
    if (timer) return; 

    let interval = setInterval(() => {
      setMilliSeconds((prevMilliSeconds) => {
        if (prevMilliSeconds >= 99) {
          setSeconds((prevSeconds) => (prevSeconds + 1) % 60);
          if (seconds === 59) {
            setMinutes((prevMinutes) => (prevMinutes + 1) % 60);
            if (minutes === 59) {
              setHours((prevHours) => prevHours + 1);
            }
          }
          return 0;
        }
        return prevMilliSeconds + 1;
      });
    }, 10);

    setTimer(interval); 
  };

  const stopTimer = () => {
    clearInterval(timer); 
    setTimer(null); 
  };

  const resetTimer = () => {
    stopTimer();
    setMilliSeconds(0);
    setSeconds(0);
    setMinutes(0);
    setHours(0);
  };

  return (
    <>
      <div className="flex justify-center items-center flex-wrap">
        <h1  className="text-center mt-5 text-white text-4xl font-semibold px-4">
          StopWatch
        </h1>
      </div>

      <div className="parent mt-40">
        <div className="child flex justify-center items-center">
          <p className='text-white text-3xl font-semibold'> {hours} : </p>
          <p className='text-white text-3xl font-semibold'> {minutes} : </p>
          <p className='text-white text-3xl font-semibold'> {seconds} : </p>
          <p className='text-white text-3xl font-semibold'> {milliSeconds}</p> 
        </div>
      </div>

      <div className="flex justify-center items-center mt-4 cursor-pointer">
        <button className="border border-white text-white px-4 py-1 mx-3" onClick={startTimer}>
          Start
        </button>
        <button className="border border-white text-white px-4 py-1 mx-3" onClick={stopTimer}>
          Stop
        </button>
        <button className="border border-white text-white px-4 py-1 mx-3" onClick={resetTimer}>
          Reset
        </button>
      </div>
    </>
  );
}

export default App;
