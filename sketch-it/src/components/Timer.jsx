import { useEffect, useState } from "react";

const Timer = ({ timer, onRefresh }) => {

  const [remaining, setRemaining] = useState(timer * 60)

  useEffect(() => {
    if (remaining <= 0) {
      onRefresh()
      return
    }

    const interval = setInterval(() => {
      setRemaining((prev) => prev - 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [remaining, onRefresh])

  const formatTimer = (seconds) => {
    const min = Math.floor(seconds / 60)
    const sec = seconds % 60
    return `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`
  }

  return (
    <div>
      <div>{formatTimer(remaining)}</div>
    </div>
  );
};

export default Timer;
