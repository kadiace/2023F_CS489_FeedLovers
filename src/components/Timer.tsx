import { useEffect, useState } from "react";
import { SetterOrUpdater, useRecoilState } from "recoil";
import {
  contentsAtom,
  goalAtom,
  roundWaveCountAtom,
  successRoundAtom,
  consumerChatAtom,
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

const getRoundWaveCount = (
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

const getGoal = (setter: SetterOrUpdater<number>) => {
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

function Timer() {
  // state
  /* eslint-disable */
  const [time, setTime] = useState(RoundInformation[0].wave[0]); // 남은 시간 (단위: 초)
  const [roundWaveCount, setRoundWaveCount] =
    useRecoilState(roundWaveCountAtom);
  const [goal, setGoal] = useRecoilState(goalAtom);
  const [successRound, setSuccessRound] = useRecoilState(successRoundAtom);
  const [contents, setContents] = useRecoilState(contentsAtom);
  const [consumerChat, setConsumerChat] = useRecoilState(consumerChatAtom);

  // function
  function makeRandomContents() {
    setContents(
      Array.from({ length: 12 }, (_) => Math.floor(Math.random() * 5))
    );
  }

  /* eslint-disable */
  useEffect(() => {
    setRoundWaveCount({ round: 0, wave: 0 });
    setGoal(RoundInformation[0].goal);
    setSuccessRound(true);
    makeRandomContents();
    const timer = setInterval(() => {
      setTime((prevTime) => {
        // Reach timeout
        if (prevTime === 0) {
          const [wave, round] = getRoundWaveCount(setRoundWaveCount);
          // Reach max wave
          if (wave + 1 >= RoundInformation[round].wave.length) {
            const remain = getGoal(setGoal);
            if (remain > 0) {
              setSuccessRound(false);
            }
            // For debugging
            const nextRound =
              round + 1 >= RoundInformation.length ? 0 : round + 1;
            setRoundWaveCount({
              round: nextRound,
              wave: 0,
            });
            setGoal(RoundInformation[nextRound].goal);
            setConsumerChat(
              Array.from({ length: 16 }, (_) => Math.floor(Math.random() * 5))
            );
            makeRandomContents();
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
      <p>{displayTime(time)}</p>
    </div>
  );
}

export default Timer;
