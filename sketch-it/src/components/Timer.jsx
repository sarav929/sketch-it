import { useEffect, useState } from "react";

const Timer = ({ timer, onRefresh }) => {
  const [remaining, setRemaining] = useState(timer * 60); 
  const [isRunning, setIsRunning] = useState(true)

  useEffect(() => {
    setRemaining(timer * 60);  // Reset remaining time when `timer` prop changes
  }, [timer]); // This effect depends on the `count` prop

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
  
    <div>
      {formatTimer(remaining)}
      <button onClick={toggleTimer}>
        {isRunning ? "Pause" : "Play"}
      </button>
    </div>
  )
};

export default Timer;
