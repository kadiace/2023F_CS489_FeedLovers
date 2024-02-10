import { preferenceInitializer } from 'components/Consumer';
import { RoundInformation } from 'components/Round';

import { useEffect } from 'react';
import { SetterOrUpdater, useRecoilState } from 'recoil';
import {
  consumerChatAtom,
  contentsAtom,
  goalAtom,
  isEventAtom,
  preferenceAtom,
  roundStateAtom,
  roundWaveCountAtom,
  timeAtom,
  totalAtom,
} from 'recoils/Atom';

const displayTime = (time: number) => {
  const minutes = `0${Math.floor(time / 60)}`;
  const seconds = `0${Number(time % 60)}`;
  return `${minutes.substring(minutes.length - 2)}:${seconds.substring(
    seconds.length - 2,
  )}`;
};

export const getRecoilValue = <T,>(setter: SetterOrUpdater<T>) => {
  let value: T;
  setter((prev: T) => {
    value = prev;
    return value;
  });
  // eslint-disable-next-line
  return value!;
};

const randomContent = (preference: number[][]) => {
  const sumPreference = preference.reduce((a, b) => a + b[1], 0);
  if (preference[0][1] < 60) {
    let r = Math.random() * (sumPreference - preference[0][1]);
    let i;
    for (i = 1; i < 6; i += 1) {
      r -= preference[i][1];
      if (r <= 0) {
        break;
      }
    }
    return preference[i][0];
  }
  let r = Math.random() * sumPreference;
  let i;
  for (i = 0; i < 6; i += 1) {
    const v = preference[i];
    r -= v[1];
    if (r <= 0) {
      break;
    }
  }
  return preference[i][0];
};

export const newConsumerChat = (
  reset: boolean,
  eventContent: number,
  prev: number[],
  preferences: number[][][],
) =>
  prev.map((n: number, id: number) => {
    if (reset) {
      return randomContent(preferences[id]);
    }
    // if killed
    if (n === -2) {
      return n;
    }
    // if in event
    if (eventContent >= 0) {
      return eventContent;
    }
    return randomContent(preferences[id]);
  });

export const newContents = (eventContent: number) =>
  Array.from({ length: 12 }, () => {
    // if in event
    if (eventContent >= 0) {
      return eventContent;
    }
    return Math.floor(Math.random() * 5);
  });

const blamersKiller =
  (n: number, preferences: number[][][]) => (prev: number[]) => {
    const contents = prev.slice();
    const blamers = Array.from({ length: 16 }, (v, i) => i).filter(
      (idx) => contents[idx] === 6,
    );
    blamers.sort((a, b) => preferences[b][1][1] - preferences[a][1][1]); // (자신의 최애 장르에) 제일 과몰입한 사람
    for (let i = 0; i < Math.min(n, blamers.length); i += 1) {
      contents[blamers[i]] = -2;
    }
    return contents;
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
  const [preference, setPreference] = useRecoilState(preferenceAtom);

  /* eslint-disable */
  useEffect(() => {
    setRoundWaveCount({ round: 0, wave: 0 });
    setGoal(RoundInformation[0].goal);
    setTotal(0);
    setTime(RoundInformation[0].wave[0]);
    setRoundState('progress');
    for (let id = 0; id < 16; id++) {
      setPreference(preferenceInitializer(id));
    }
    setIsEvent(false);
    setContents(newContents(-1));
    setConsumerChat(
      newConsumerChat(
        true,
        -1,
        getRecoilValue(setConsumerChat),
        getRecoilValue(setPreference),
      ),
    );
    const timer = setInterval(() => {
      let roundState = getRecoilValue(setRoundState);
      if (roundState === 'progress' || roundState === 'pending') {
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
                setRoundState('fail');
                newTime = 0;
              } else {
                throw new Error('');
              }
            } else {
              // Go to next wave
              setRoundWaveCount({ round: round, wave: wave + 1 });
              if (getRecoilValue(setIsEvent)) {
                setIsEvent(false);
                setConsumerChat(
                  blamersKiller(1, getRecoilValue(setPreference)),
                );
              }
              setContents(newContents(-1));
              setConsumerChat(
                newConsumerChat(
                  false,
                  -1,
                  getRecoilValue(setConsumerChat),
                  getRecoilValue(setPreference),
                ),
              );
            }
            newTime = RoundInformation[round].wave[wave + 1];
          } else {
            if (roundState === 'progress' || prevTime > 1) {
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
