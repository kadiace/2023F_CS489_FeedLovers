import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { roundWaveCountAtom } from "recoils";
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
  const [roundWaveCount, setRoundWaveCount] =
    useRecoilState(roundWaveCountAtom);
  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime === 0) {
          setRoundWaveCount((prev) => {
            console.log(prev["wave"] + 1);
            console.log(RoundInformation[prev["round"]].wave.length);
            if (
              prev["wave"] + 1 >=
              RoundInformation[prev["round"]].wave.length
            ) {
              return { round: prev["round"] + 1, wave: 0 };
            }
            return { round: prev["round"], wave: prev["wave"] + 1 };
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
