import React, { useState, useEffect } from 'react';


function Countdown() {
    const now = new Date();
  const [targetTime, setTargetTime] = useState(new Date(now.getTime() + (1 * 60 * 1000)));
  const [timeRemaining, setTimeRemaining] = useState(targetTime - new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(targetTime - new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, [targetTime]);

  return (
    <div>
      {timeRemaining > 0 ? (
        <div>
          Time remaining: 
          {Math.floor((timeRemaining / (1000 * 60)) % 60)} minutes{' '}
          {Math.floor(timeRemaining / 1000) % 60} seconds
        </div>
      ) : (
        <div>Countdown finished!</div>
      )}
    </div>
  );
}

export default Countdown;