import ConsumerBackground from 'assets/img/ui/consumer_background.png';
import ConsumerBackgroundHover from 'assets/img/ui/consumer_background_hover.png';
import ConsumerBan from 'assets/img/ui/consumer_ban.png';
import ConsumerGrid from 'assets/img/ui/consumer_grid.png';
import ConsumerGridHover from 'assets/img/ui/consumer_grid_hover.png';
import ConsumerShiny from 'assets/img/ui/consumer_shiny.png';
import ConsumerTorso from 'assets/img/ui/consumer_torso.png';

import ConsumerChat from 'components/ConsumerChat';
import { getRecoilValue } from 'components/Timer';

import { useState } from 'react';
import { useDrop } from 'react-dnd';
import { useRecoilState } from 'recoil';
import {
  consumerChatAtom,
  goalAtom,
  preferenceAtom,
  roundStateAtom,
  totalAtom,
} from 'recoils/Atom';

export const preferenceInitializer = (id: number) => (pref: number[][][]) => {
  const sumPreference = Math.random() * 100;
  const preferenceRatio = Array.from({ length: 5 }, () => 100 ** Math.random());
  const sumPreferenceRatio = preferenceRatio.reduce((a, b) => a + b, 0);
  const preferences = Array.from({ length: 6 }, (v, i) => [
    i - 1,
    i === 0
      ? 100 - sumPreference
      : sumPreference * (preferenceRatio[i - 1] / sumPreferenceRatio),
  ]);
  preferences.sort((a, b) =>
    a[0] === -1 ? -1 : b[0] === -1 ? 1 : b[1] - a[1],
  );
  const newPref = pref.slice();
  newPref[id] = preferences;
  return newPref;
};

const preferenceBooster =
  (id: number, type: number) => (pref: number[][][]) => {
    const newPref = pref.slice();
    const empty = newPref[id][0][1];
    if (empty >= 20) {
      newPref[id] = newPref[id].map((v) => {
        return [v[0], v[1] + (v[0] === -1 ? -20 : v[0] === type ? 20 : 0)];
      });
    } else {
      const boostValue = newPref[id].filter((v) => v[0] === type)[0][1];
      if (boostValue > 80) {
        newPref[id] = newPref[id].map((v) => {
          return [v[0], v[0] === type ? 100 : 0];
        });
      } else {
        newPref[id] = newPref[id].map((v) => {
          return [
            v[0],
            v[0] === -1
              ? 0
              : v[0] === type
              ? boostValue + 20
              : (v[1] * (80 - boostValue)) / (100 - empty - boostValue),
          ];
        });
      }
    }
    newPref[id].sort((a, b) =>
      a[0] === -1 ? -1 : b[0] === -1 ? 1 : b[1] - a[1],
    );
    return newPref;
  };

export const preferenceNerfer =
  (type: number, consumerChat: number[]) => (pref: number[][][]) => {
    let newPref = pref.slice();
    for (let id = 0; id < 16; id += 1) {
      if (consumerChat[id] === 5) {
        newPref = preferenceBooster(id, type)(newPref);
      } else {
        const nerfValue = newPref[id].filter((v) => v[0] === type)[0][1];
        newPref[id] = newPref[id].map((v) => {
          return [
            v[0],
            v[1] +
              (v[0] === -1 ? nerfValue / 2 : v[0] === type ? -v[1] / 2 : 0),
          ];
        });
        newPref[id].sort((a, b) =>
          a[0] === -1 ? -1 : b[0] === -1 ? 1 : b[1] - a[1],
        );
      }
    }
    return newPref;
  };

const contentColor = [
  'white',
  '#FF83AB',
  '#1F75EF',
  '#299C5A',
  '#8999B2',
  '#3A4467',
];

function Consumer({ id, onEvent }: { id: number; onEvent: boolean }) {
  // state
  /* eslint-disable */
  const [hoverType, setHoverType] = useState(-1);
  const [goal, setGoal] = useRecoilState(goalAtom);
  const [total, setTotal] = useRecoilState(totalAtom);
  const [consumerChat, setConsumerChat] = useRecoilState(consumerChatAtom);
  const [roundState, setRoundState] = useRecoilState(roundStateAtom);
  const [preference, setPreference] = useRecoilState(preferenceAtom);

  // function
  const updateAcceptType = (type: number) => {
    setConsumerChat((prev) => {
      const next = prev.slice();
      next[id] = type;
      return next;
    });
  };

  const [{ isOver, canDrop }, drop] = useDrop(() => ({
    accept: 'CONTENT',
    hover(item: { type: number }, monitor) {
      setHoverType(item.type);
    },
    drop: (item: { type: number }, monitor) => {
      setGoal((prev) => {
        return prev - 100 < 0 ? 0 : prev - 100;
      });
      setTotal((prev) => prev + 100);
      const remain = getRecoilValue(setGoal);
      if (remain <= 0) {
        setRoundState('success');
      }
      setPreference(preferenceBooster(id, item.type));
      updateAcceptType(5);
    },
    canDrop: (item: { type: number }, monitor) => {
      const receiveConsumerChat = getRecoilValue(setConsumerChat);
      return receiveConsumerChat[id] === -1
        ? true
        : item.type === receiveConsumerChat[id];
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  }));

  return (
    <div>
      {consumerChat[id] === 5 || consumerChat[id] === -2 ? (
        <div
          style={{
            position: 'absolute',
            display: 'flex',
            width: '140px',
            height: '140px',
            justifyContent: 'center',
            zIndex: 5,
            alignItems: 'center',
          }}
        >
          <div
            style={{
              position: 'absolute',
              display: 'flex',
              width: '100%',
              height: '100%',
              justifyContent: 'center',
              backgroundColor: 'black',
              opacity: 0.6,
              zIndex: 5,
            }}
          />
          {consumerChat[id] === -2 ? (
            <img
              style={{
                position: 'absolute',
                display: 'flex',
                width: '100px',
                height: '100px',
                justifyContent: 'center',
                zIndex: 6,
              }}
              src={ConsumerBan}
            ></img>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <></>
      )}
      <div
        style={{
          position: 'relative',
          display: 'flex',
          width: '100%',
          height: '100%',
          justifyContent: 'center',
        }}
      >
        {consumerChat[id] < 0 ? (
          <></>
        ) : (
          <ConsumerChat type={consumerChat[id]} />
        )}

        <div
          ref={drop}
          style={{
            position: 'relative',
            display: 'flex',
            width: '140px',
            height: '140px',
            justifyContent: 'center',
          }}
        >
          {(onEvent || (isOver && canDrop)) && consumerChat[id] !== -2 ? (
            <>
              <img
                alt=''
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  zIndex: 0,
                  opacity: 0.5,
                }}
                src={ConsumerBackgroundHover}
              ></img>
              <img
                alt=''
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  zIndex: 3,
                }}
                src={ConsumerGridHover}
              ></img>
            </>
          ) : (
            <>
              <img
                alt=''
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  zIndex: 0,
                  opacity: 0.5,
                }}
                src={ConsumerBackground}
              ></img>
              <img
                alt=''
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  zIndex: 3,
                }}
                src={ConsumerGrid}
              ></img>
            </>
          )}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              position: 'absolute',
              width: '80%',
              height: '80%',
              bottom: '0px',
              // objectFit: "contain",
              zIndex: 1,
              WebkitMaskImage: `url(${ConsumerTorso})`,
              WebkitMaskSize: 'contain',
            }}
          >
            <div
              style={{
                display: 'flex',
                // flex: 1,
                flex: preference[id][0][1],
                flexDirection: 'column',
                position: 'relative',
                zIndex: 1,
                background: contentColor[preference[id][0][0] + 1],
              }}
            ></div>
            <div
              style={{
                display: 'flex',
                flex: preference[id][1][1],
                flexDirection: 'column',
                position: 'relative',
                zIndex: 1,
                background: contentColor[preference[id][1][0] + 1],
              }}
            ></div>
            <div
              style={{
                display: 'flex',
                flex: preference[id][2][1],
                flexDirection: 'column',
                position: 'relative',
                zIndex: 1,
                background: contentColor[preference[id][2][0] + 1],
              }}
            ></div>
            <div
              style={{
                display: 'flex',
                flex: preference[id][3][1],
                flexDirection: 'column',
                position: 'relative',
                zIndex: 1,
                background: contentColor[preference[id][3][0] + 1],
              }}
            ></div>
            <div
              style={{
                display: 'flex',
                flex: preference[id][4][1],
                flexDirection: 'column',
                position: 'relative',
                zIndex: 1,
                background: contentColor[preference[id][4][0] + 1],
              }}
            ></div>
            <div
              style={{
                display: 'flex',
                flex: preference[id][5][1],
                flexDirection: 'column',
                position: 'relative',
                zIndex: 1,
                background: contentColor[preference[id][5][0] + 1],
              }}
            ></div>
          </div>
          <img
            alt=''
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              zIndex: 2,
            }}
            src={ConsumerShiny}
          ></img>
          <p
            style={{
              position: 'absolute',
              left: '9px',
              top: '-11px',
              zIndex: 4,
              fontFamily: 'Retro Gaming',
              fontSize: '17px',
              textAlign: 'center',
            }}
          >
            {id + 1}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Consumer;
