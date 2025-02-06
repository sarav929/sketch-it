import { useState, useEffect } from "react";

const Timer = ({ timer }) => {

  const [timeLeft, setTimeLeft] = useState(timer * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60); 
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const startTimer = () => {
    if (isRunning) return;

    setIsRunning(true);
    const id = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(id);
          setIsRunning(false);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    setIntervalId(id);
  };

  const pauseTimer = () => {
    clearInterval(intervalId);
    setIsRunning(false);
  };

  useEffect(() => {
    setTimeLeft(timer * 60);
  }, [timer]);

  useEffect(() => {
    startTimer()
    return () => {
      clearInterval(intervalId);
    };
  }, [intervalId]);

  return (
    <div>
      <div>{formatTime(timeLeft)}</div>
      {isRunning && (<button onClick={pauseTimer}>
        Stop
      </button>)}
      {!isRunning && (<button onClick={startTimer}>
        Play
      </button>)}
    </div>
  );
};

export default Timer;
