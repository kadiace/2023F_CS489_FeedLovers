import Command from 'components/Command';
import ConsumerGroup from 'components/ConsumerGroup';
import EmphasizeText from 'components/EmphasizeText';
import GuideWindow from 'components/GuideWindow';
import News from 'components/News';
import { RoundInformation } from 'components/Round';
import Store from 'components/Store';
import { getRecoilValue, newConsumerChat, newContents } from 'components/Timer';

import { MouseEventHandler, ReactNode, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
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

function Main() {
  // state
  /* eslint-disable */
  const [roundWaveCount, setRoundWaveCount] =
    useRecoilState(roundWaveCountAtom);
  const [goal, setGoal] = useRecoilState(goalAtom);
  const [total, setTotal] = useRecoilState(totalAtom);
  const [roundState, setRoundState] = useRecoilState(roundStateAtom);
  const [isEvent, setIsEvent] = useRecoilState(isEventAtom);
  const [contents, setContents] = useRecoilState(contentsAtom);
  const [consumerChat, setConsumerChat] = useRecoilState(consumerChatAtom);
  const [time, setTime] = useRecoilState(timeAtom);
  const [preference, setPreference] = useRecoilState(preferenceAtom);
  const [commandMessage, setCommandMessage] = useState<ReactNode>(
    <span>"..."</span>,
  );
  const [newsMessage, setNewsMessage] = useState<ReactNode>(<span>"..."</span>);

  // const
  const round1CommandMessage: ReactNode[] = [
    'You can drag these contents and drop to consumers!',
    'Well done! Before the timer goes off, distribute these properly!',
    'Let’s make money until we exceed the goal!',
    'Great!',
    'I’m sure that you can make it!',
  ];
  const normalCommandMessage: ReactNode[] = [
    'You’re doing great..!',
    'Keep it like this!',
    'Feed, you can make it!',
    'Keep this pace!',
    'You are the best algorithm, ever!',
    'You are setting a new standard!',
    'Outstanding work, “Feed”!',
    'Remarkable job!',
    'Impressive!',
    'Exceptional performance!',
    'Fantastic job, “Feed”!',
    "You're nailing it!",
    'Hats off to your skills, “Feed”!',
  ];
  const navigate = useNavigate();
  const navigateLobby: MouseEventHandler = () => {
    navigate('/lobby');
  };
  const nextRound: MouseEventHandler = () => {
    const contents = getRecoilValue(setContents);
    const consumerChat = getRecoilValue(setConsumerChat);
    const preference = getRecoilValue(setPreference);
    const { round } = getRecoilValue(setRoundWaveCount);
    const nextRound = round + 1 >= RoundInformation.length ? 0 : round + 1;
    setRoundWaveCount({
      round: nextRound,
      wave: 0,
    });
    setGoal(RoundInformation[nextRound].goal);
    setTime(RoundInformation[nextRound].wave[0]);
    setIsEvent(RoundInformation[nextRound].hasEvent);
    if (RoundInformation[nextRound].hasEvent) {
      setRoundState('pending');
    } else {
      setRoundState('progress');
    }
    if (RoundInformation[nextRound].alias === 'C') {
      setContents(newContents(4));
      setConsumerChat(newConsumerChat(false, 4, consumerChat, preference));
    } else if (RoundInformation[nextRound].alias === 'E') {
      setContents(newContents(3));
      setConsumerChat(newConsumerChat(false, 3, consumerChat, preference));
    } else {
      setContents(newContents(-1));
      setConsumerChat(newConsumerChat(false, -1, consumerChat, preference));
    }
  };

  // message setting for event.
  useEffect(() => {
    // Get recoil value.
    const { round, wave } = getRecoilValue(setRoundWaveCount);
    const isEvent = getRecoilValue(setIsEvent);
    const time = getRecoilValue(setTime);
    const roundState = getRecoilValue(setRoundState);

    // Get value.
    const roundInfo = RoundInformation[round];
    const maxTime = roundInfo.wave[wave];
    const eventMessages = roundInfo.commandMessage;

    // Get message list.
    let commandMessage: ReactNode;
    let newsMessage: ReactNode;

    if (isEvent) {
      if (roundState === 'pending') {
        commandMessage =
          eventMessages[
            Math.floor((1 - time / maxTime) * eventMessages.length)
          ];
      } else {
        commandMessage = roundInfo.eventMessage;
      }
      newsMessage = roundInfo.newsMessage;

      // Set message.
      setCommandMessage(commandMessage);
      setNewsMessage(newsMessage!);
    }
  }, [roundWaveCount, isEvent, time, roundState]);

  // message setting for non event.
  useEffect(() => {
    // Get recoil value.
    const { round, wave } = getRecoilValue(setRoundWaveCount);
    const isEvent = getRecoilValue(setIsEvent);

    // Get message list.
    let commandMessage: ReactNode;
    let newsMessage: ReactNode;

    if (!isEvent) {
      commandMessage =
        round === 0
          ? round1CommandMessage[wave]
          : normalCommandMessage[
              Math.floor(Math.random() * normalCommandMessage.length)
            ];
      if (round === 2 && wave === 1) {
        commandMessage =
          'Someone is out, but nevermind. You still have loyal consumers a lot. :)';
      }
      newsMessage = <span>"..."</span>;
      // Set message.
      setCommandMessage(commandMessage);
      setNewsMessage(newsMessage!);
    }
  }, [roundWaveCount, isEvent]);

  return (
    <div
      className='Main'
      style={{
        position: 'absolute',
        backgroundColor: 'black',
        width: '100%',
        height: '100%',
        msOverflowStyle: 'none',
        scrollbarWidth: 'none',
        overflow: 'hidden',
      }}
    >
      {roundState === 'fail' ? (
        <>
          <div
            style={{
              position: 'absolute',
              backgroundColor: 'black',
              width: '100%',
              height: '100%',
              opacity: 0.6,
              zIndex: 9,
            }}
          />
          <GuideWindow
            messageList={[
              "> Nah... We failed to repay all investments... Let's try again.",
            ]}
            navigate={navigateLobby}
            style={{
              display: 'flex',
              position: 'absolute',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              height: '100%',
              zIndex: 10,
            }}
          />
        </>
      ) : roundState === 'success' ? (
        <>
          <div
            style={{
              position: 'absolute',
              backgroundColor: 'black',
              width: '100%',
              height: '100%',
              opacity: 0.6,
              zIndex: 9,
            }}
          />
          <GuideWindow
            messageList={[
              '> Congratulations! You completed to repay all investments.',
              "> Now, let's move on to the next round.",
            ]}
            navigate={nextRound}
            style={{
              display: 'flex',
              position: 'absolute',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              height: '100%',
              zIndex: 10,
            }}
          />
        </>
      ) : (
        <></>
      )}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flex: 1,
          height: '100%',
          justifyContent: 'space-evenly',
        }}
      >
        <ConsumerGroup />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '600px',
            height: '100%',
            justifyContent: 'space-evenly',
            alignItems: 'flex-end',
          }}
        >
          <p
            style={{
              position: 'relative',
              zIndex: 3,
              fontFamily: 'Retro Gaming',
              fontSize: '23px',
              textAlign: 'right',
              color: 'white',
              margin: '0px',
            }}
          >
            Round{' '}
            <EmphasizeText
              message={RoundInformation[roundWaveCount.round].alias}
            />{' '}
            - Remain $<EmphasizeText message={goal.toString()} />M / Total $
            <EmphasizeText message={total.toString()} />M
          </p>
          <Store />
          <Command message={commandMessage} />
          <News message={newsMessage} />
        </div>
      </div>
    </div>
  );
}

export default Main;
