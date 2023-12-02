import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { roundCountAtom, waveCountAtom } from "recoils";
import { RoundInformation } from "./Round";

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
  // Constants=

  // States
  const [time, setTime] = useState(5); // 남은 시간 (단위: 초)

  // States
  const [roundCount, setRoundCount] = useRecoilState(roundCountAtom);
  const [waveCount, setWaveCount] = useRecoilState(waveCountAtom);
  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime === 0) {
          setWaveCount((prev) => {
            if (prev + 1 >= RoundInformation[roundCount].wave.length) {
              setRoundCount((prev) => prev + 1);
              return 0;
            }
            return prev + 1;
          });
          return 5;
        }
        return prevTime - 1;
      });
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
