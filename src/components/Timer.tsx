import { useEffect, useState } from "react";
import { SetterOrUpdater, useRecoilState, useRecoilValue } from "recoil";
import { contentsAtom, goalAtom, roundWaveCountAtom } from "recoils";
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

function getRoundWaveCount(
  setter: SetterOrUpdater<{
    round: number;
    wave: number;
  }>
) {
  var wave = 0;
  var round = 0;
  setter((prev) => {
    wave = prev.wave;
    round = prev.round;
    return { wave: wave, round: round };
  });
  return [wave, round];
}

function Timer() {
  // States
  const [time, setTime] = useState(RoundInformation[0].wave[0]); // 남은 시간 (단위: 초)
  const [roundWaveCount, setRoundWaveCount] =
    useRecoilState(roundWaveCountAtom);
  const [goal, setGoal] = useRecoilState(goalAtom);
  const [contents, setContents] = useRecoilState(contentsAtom);

  function makeRandomContents() {
    setContents(
      Array.from({ length: 12 }, (_) => Math.floor(Math.random() * 5))
    );
  }

  useEffect(() => {
    setGoal(RoundInformation[0].goal);
    makeRandomContents();
    const timer = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime === 0) {
          const [wave, round] = getRoundWaveCount(setRoundWaveCount);
          if (wave + 1 >= RoundInformation[round].wave.length) {
            setRoundWaveCount({ round: round + 1, wave: 0 });
            setGoal(RoundInformation[round + 1].goal);
          } else {
            setRoundWaveCount({ round: round, wave: wave + 1 });
            makeRandomContents();
          }

          return RoundInformation[round].wave[wave];
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
