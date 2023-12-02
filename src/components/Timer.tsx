import { useEffect, useState } from "react";

const getSeconds = (time: number) => {
  const seconds = Number(time % 60);
  if (seconds < 10) {
    return "0" + String(seconds);
  } else {
    return String(seconds);
  }
};

function Timer(changeRound: any) {
  const [time, setTime] = useState(300); // 남은 시간 (단위: 초)
  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div>
      <p>{getSeconds(time)}</p>
    </div>
  );
}

export default Timer;
