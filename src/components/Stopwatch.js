import { useEffect, useState} from 'react';

export default function Stopwatch({ pause, setPause, reset, setReset }) {
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });

  function updateTime() {
    if (time.seconds < 60)
      setTime(time => { return { hours: time.hours, minutes: time.minutes, seconds: time.seconds + 1 } });
    if (time.seconds >= 60)
      setTime(time => { return { hours: time.hours, minutes: time.minutes + 1, seconds: 0 } });
    if (time.minutes >= 60)
      setTime(time => { return { hours: time.hours + 1, minutes: 0, seconds: time.seconds } })
  }

  function resetTime() {
    setTime(() => { return { hours: 0, minutes: 0, seconds: 0 } });
  }

  useEffect(() => {
    const interval = setInterval(updateTime, 1000);

    if (reset == true) {
      resetTime();
      setReset(false);
    }
    if (pause == true) {
      clearInterval(interval);
    }

    if (interval != null)
      return () => clearInterval(interval);

  }, [pause, reset, time])

  return (
    <div className="timer">
      {`${time.hours < 10 ? "0" + time.hours : time.hours}:${time.minutes < 10 ? "0" + time.minutes : time.minutes}:${time.seconds < 10 ? "0" + time.seconds : time.seconds}`}
    </div>
  );
};