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
  totalAtom,
} from "recoils/Atom";
import { RoundInformation } from "./Round";

const displayTime = (time: number) => {
  const minutes: string = "0" + Math.floor(time / 60);
  const seconds: string = "0" + Number(time % 60);
  return (
    minutes.substring(minutes.length - 2) +
    ":" +
    seconds.substring(seconds.length - 2)
  );
};

export const getRecoilValue = <T,>(setter: SetterOrUpdater<T>) => {
  let value: T;
  setter((prev: T) => {
    value = prev;
    return value;
  });
  return value!;
};

export const updateContentsId = (
  strong: boolean,
  probBiased: boolean,
  eventContent: number,
  prev: number[]
) =>
  prev.map((n: number) => {
    if (n === -2) {
      return n;
    } else {
      if (eventContent >= 0) {
        return eventContent;
      } else if (strong || n === 6) {
        if (probBiased) {
          return Math.floor(Math.random() * 4) === 0
            ? -1
            : Math.floor(Math.random() * 5);
        } else return Math.floor(Math.random() * 5);
      } else return n;
    }
  });

const killBlamers = (setter: SetterOrUpdater<number[]>, n: number) => {
  let contents = getRecoilValue(setter).slice();
  let blamers = Array.from({ length: 16 }, (v, i) => i).filter(
    (n) => contents[n] === 6
  );
  blamers.sort(() => Math.random() - 0.5);
  for (let i = 0; i < Math.min(n, blamers.length); i++) {
    contents[blamers[i]] = -2;
  }
  setter(contents);
};

function Timer() {
  // state
  /* eslint-disable */
  const [time, setTime] = useRecoilState(timeAtom); // 남은 시간 (단위: 초)
  const [roundWaveCount, setRoundWaveCount] =
    useRecoilState(roundWaveCountAtom);
  const [goal, setGoal] = useRecoilState(goalAtom);
  const [total, setTotal] = useRecoilState(totalAtom);
  const [roundState, setRoundState] = useRecoilState(roundStateAtom);
  const [contents, setContents] = useRecoilState(contentsAtom);
  const [consumerChat, setConsumerChat] = useRecoilState(consumerChatAtom);
  const [isEvent, setIsEvent] = useRecoilState(isEventAtom);

  /* eslint-disable */
  useEffect(() => {
    setRoundWaveCount({ round: 0, wave: 0 });
    setGoal(RoundInformation[0].goal);
    setTotal(0);
    setTime(RoundInformation[0].wave[0]);
    setRoundState("progress");
    setContents(updateContentsId(true, false, -1, contents));
    setConsumerChat(updateContentsId(true, true, -1, consumerChat));
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
              // Go to next wave
              setRoundWaveCount({ round: round, wave: wave + 1 });
              if (getRecoilValue(setIsEvent)) {
                setIsEvent(false);
                killBlamers(setConsumerChat, 1);
              }
              setContents(
                updateContentsId(true, false, -1, getRecoilValue(setContents))
              );
              setConsumerChat(
                updateContentsId(
                  false,
                  true,
                  -1,
                  getRecoilValue(setConsumerChat)
                )
              );
            }
            newTime = RoundInformation[round].wave[wave + 1];
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
