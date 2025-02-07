import { useEffect, useState } from "react";

const Timer = ({ timer, onRefresh }) => {
  const [remaining, setRemaining] = useState(timer * 60); 

  useEffect(() => {
    setRemaining(timer * 60);  // Reset remaining time when `timer` prop changes
  }, [timer]); // This effect depends on the `count` prop

  useEffect(() => {
    if (remaining <= 0) {
      onRefresh(); 
      return;
    }

    const interval = setInterval(() => {
      setRemaining((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval); 
  }, [remaining, onRefresh]);

  const formatTimer = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  };

  return <div>{formatTimer(remaining)}</div>;
};

export default Timer;
