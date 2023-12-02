import { useEffect, useState } from "react";

const getTime = (time: number) => {
  const minutes: string = "0" + Math.floor(time / 60);
  const seconds: string = "0" + Number(time % 60);
  return (
    minutes.substring(minutes.length - 2) +
    ":" +
    seconds.substring(seconds.length - 2)
  );
};

function Timer() {
  const [time, setTime] = useState(10); // 남은 시간 (단위: 초)
  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => (prev == 0 ? 10 : prev - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div>
      <p>{getTime(time)}</p>
    </div>
  );
}

export default Timer;
