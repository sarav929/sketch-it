import { useEffect, useState } from "react";
import { PlayCircle, PauseCircle } from "@phosphor-icons/react";
import Command from "./Command";

const Timer = ({ timer, onRefresh }) => {
  const [remaining, setRemaining] = useState(timer * 60); 
  const [isRunning, setIsRunning] = useState(true)

  useEffect(() => {
    setRemaining(timer * 60);  
  }, [timer]); 

  useEffect(() => {
    if (remaining <= 0) {
      onRefresh(); 
      return;
    }

    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setRemaining((prev) => prev - 1);
      }, 1000);
    }

    return () => clearInterval(interval); 
  }, [remaining, isRunning, onRefresh]);

  const formatTimer = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  };

  const toggleTimer = () => {
    setIsRunning((prev) => !prev);
  };

  return (
    <div className="timer-wrapper flex gap-3 items-center">
      <div className="timer text-xl text-bold">{formatTimer(remaining)}</div>
      <Command 
        type="pause-play" 
        Icon={isRunning ? PauseCircle : PlayCircle} 
        onClick={toggleTimer} 
      />
    </div>
  );
};

export default Timer;
