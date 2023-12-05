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

const displayTime = (time: number) => {
  const minutes: string = "0" + Math.floor(time / 60);
  const seconds: string = "0" + Number(time % 60);
  return (
    minutes.substring(minutes.length - 2) +
    ":" +
    seconds.substring(seconds.length - 2)
  );
};

export const getRoundWaveCount = (
  setter: SetterOrUpdater<{
    round: number;
    wave: number;
  }>
) => {
  let wave = 0;
  let round = 0;
  setter((prev) => {
    wave = prev.wave;
    round = prev.round;
    return { wave: wave, round: round };
  });
  return [wave, round];
};

export const getGoal = (setter: SetterOrUpdater<number>) => {
  let goal = 0;
  setter((prev) => {
    goal = prev;
    return goal;
  });
  return goal;
};

const getConsumerChat = (setter: SetterOrUpdater<number[]>) => {
  let consumerChat = [0];
  setter((prev) => {
    consumerChat = prev;
    return consumerChat;
  });
  return consumerChat;
};

const getRoundState = (setter: SetterOrUpdater<RoundState>) => {
  let roundState: RoundState = "progress";
  setter((prev) => {
    roundState = prev;
    return roundState;
  });
  return roundState;
};

const getTime = (setter: SetterOrUpdater<number>) => {
  let time = 0;
  setter((prev: any) => {
    time = prev;
    return time;
  });
  return time;
};

export const makeRandomContents = (
  setter: SetterOrUpdater<number[]>,
  length: number
) => {
  setter(Array.from({ length: length }, (_) => Math.floor(Math.random() * 5)));
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
    makeRandomContents(setContents, 12);
    makeRandomContents(setConsumerChat, 16);
    const timer = setInterval(() => {
      let roundState = getRoundState(setRoundState);
      if (roundState === "progress") {
        let prevTime = getTime(setTime);
        let newTime;
        {
          // Reach timeout
          if (prevTime === 0) {
            const [wave, round] = getRoundWaveCount(setRoundWaveCount);
            // Reach max wave
            if (wave + 1 >= RoundInformation[round].wave.length) {
              const remain = getGoal(setGoal);
              if (remain > 0) {
                setRoundState("fail");
                newTime = 0;
              } else {
                throw new Error("");
              }
            } else {
              setRoundWaveCount({ round: round, wave: wave + 1 });
              setIsEvent(false);
              makeRandomContents(setContents, 12);
            }
            newTime = RoundInformation[round].wave[wave];
          } else {
            newTime = prevTime - 1;
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
