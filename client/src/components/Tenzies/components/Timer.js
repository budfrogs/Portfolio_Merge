import React, { useState, useEffect } from "react";

const Timer = ({ start, onTotalTime }) => {
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (start) {
      const startTime = Date.now() - timeElapsed;
      interval = setInterval(() => {
        const newTimeElapsed = Date.now() - startTime;
        setTimeElapsed(newTimeElapsed);
        onTotalTime(newTimeElapsed);
      }, 1000);
      setIsRunning(true);
    } else {
      clearInterval(interval);
      setIsRunning(false);
      setTimeElapsed(0);
    }

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [start]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60000);
    const seconds = ((time % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  };

  return <h3>{formatTime(timeElapsed)}</h3>;
};

export default Timer;
