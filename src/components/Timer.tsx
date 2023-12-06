import { useEffect } from "react";
import { SetterOrUpdater, useRecoilState } from "recoil";
import {
  contentsAtom,
  goalAtom,
  isEventAtom,
  roundWaveCountAtom,
  roundStateAtom,
  timeAtom,
  consumerChatAtom,
} from "recoils/Atom";
import { RoundInformation, RoundState } from "./Round";
import { arrayBuffer } from "stream/consumers";

const displayTime = (time: number) => {
  const minutes: string = "0" + Math.floor(time / 60);
  const seconds: string = "0" + Number(time % 60);
  return (
    minutes.substring(minutes.length - 2) +
    ":" +
    seconds.substring(seconds.length - 2)
  );
};

const getRecoilValueHelper = (temp: any, setter: SetterOrUpdater<any>) => {
  let value = temp;
  setter((prev: any) => {
    value = prev;
    return value;
  });
  return value;
};

export const getRecoilValue = (setter: SetterOrUpdater<any>) => {
  return getRecoilValueHelper(0, setter);
};

export const updateContents = (
  setter: SetterOrUpdater<number[]>,
  strong: boolean,
  probBiased: boolean
) => {
  let contents = getRecoilValue(setter);
  setter(
    contents.map((n: number) => {
      if (strong || n === 6) {
        return Math.floor(Math.random() * 5);
      } else if (probBiased) {
        return Math.floor(Math.random() * 4) === 0
          ? -1
          : Math.floor(Math.random() * 5);
      } else return n;
    })
  );
};

const killOneBlamer = (setter: SetterOrUpdater<number[]>, n: number) => {
  let contents = getRecoilValue(setter).slice();
  let blamers = Array.from({ length: 16 }, (v, i) => i).filter(
    (n) => contents[n] === 6
  );
  blamers.sort(() => Math.random() - 0.5);
  for (let i = 0; i < n; i++) {
    contents[i] = -2;
  }
  setter(contents);
};

function Timer() {
  // state
  /* eslint-disable */
  const [time, setTime] = useRecoilState(timeAtom); // 남은 시간 (단위: 초)
  // const [time, setTime] = useRecoilState(RoundInformation[0].wave[0]); // 남은 시간 (단위: 초)
  const [roundWaveCount, setRoundWaveCount] =
    useRecoilState(roundWaveCountAtom);
  const [goal, setGoal] = useRecoilState(goalAtom);
  const [roundState, setRoundState] = useRecoilState(roundStateAtom);
  const [contents, setContents] = useRecoilState(contentsAtom);
  const [consumerChat, setConsumerChat] = useRecoilState(consumerChatAtom);
  const [isEvent, setIsEvent] = useRecoilState(isEventAtom);

  /* eslint-disable */
  useEffect(() => {
    setRoundWaveCount({ round: 0, wave: 0 });
    setGoal(RoundInformation[0].goal);
    setTime(RoundInformation[0].wave[0]);
    setRoundState("progress");
    updateContents(setContents, true, false);
    updateContents(setConsumerChat, true, true);
    const timer = setInterval(() => {
      let roundState = getRecoilValue(setRoundState);
      if (roundState === "progress" || roundState === "pending") {
        let prevTime = getRecoilValue(setTime);
        let newTime;
        {
          if (prevTime === 0) {
            // Reach timeout
            const { wave, round } = getRecoilValue(setRoundWaveCount);
            if (wave + 1 >= RoundInformation[round].wave.length) {
              // Reach max wave
              const remain = getRecoilValue(setGoal);
              if (remain > 0) {
                setRoundState("fail");
                newTime = 0;
              } else {
                throw new Error("");
              }
            } else {
              setRoundWaveCount({ round: round, wave: wave + 1 });
              setIsEvent(false);
              updateContents(setContents, true, false);
              killOneBlamer(setConsumerChat, 1);
              updateContents(setConsumerChat, false, false);
            }
            newTime = RoundInformation[round].wave[wave];
          } else {
            if (roundState === "progress" || prevTime > 1) {
              newTime = prevTime - 1;
            } else {
              newTime = prevTime;
            }
          }
        }
        setTime(newTime);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div>
      <p>{displayTime(time)}</p>
    </div>
  );
}

export default Timer;
