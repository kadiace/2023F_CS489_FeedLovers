import "./Main.css";
import Store from "components/Store";
import Command from "components/Command";
import News from "components/News";
import { useRecoilState } from "recoil";
import {
  goalAtom,
  isEventAtom,
  roundWaveCountAtom,
  roundStateAtom,
  contentsAtom,
  consumerChatAtom,
  timeAtom,
  totalAtom,
} from "recoils/Atom";
import { RoundInformation } from "components/Round";
import { useNavigate } from "react-router-dom";
import GuideWindow from "components/GuideWindow";
import { MouseEventHandler, ReactNode, useEffect, useState } from "react";
import { getRecoilValue, updateContentsId } from "components/Timer";
import ConsumerGroup from "components/ConsumerGroup";
import EmphasizeText from "components/EmphasizeText";

function Main() {
  // const
  const round1CommandMessage: ReactNode[] = [
    "You can drag these contents and drop to consumers!",
    "Well done! Before the timer goes off, distribute these properly!",
    "I’m sure that you can make it!",
    "Great!",
    "Let’s make money until we exceed the goal!",
  ];
  const normalCommandMessage: ReactNode[] = [
    "You’re doing great..!",
    "Someone is out, but nevermind. You still have loyal consumers a lot. :)",
    "Keep it like this!",
    "Feed, you can make it!",
    "Keep this pace!",
    "You are the best algorithm, ever!",
    "You are setting a new standard!",
    "Outstanding work, “Feed”!",
    "Remarkable job!",
    "Impressive!",
    "Exceptional performance!",
    "Fantastic job, “Feed”!",
    "You're nailing it!",
    "Hats off to your skills, “Feed”!",
  ];

  // const
  const navigate = useNavigate();
  const navigateLobby: MouseEventHandler = () => {
    navigate("/lobby");
  };
  const nextRound: MouseEventHandler = () => {
    const contents = getRecoilValue(setContents);
    const consumerChat = getRecoilValue(setConsumerChat);
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
      setRoundState("pending");
    } else {
      setRoundState("progress");
    }
    if (RoundInformation[nextRound].alias === "C") {
      setContents((prev) => {
        let arr = [...prev];
        arr[0] = 4;
        return arr;
      });
      setConsumerChat(updateContentsId(false, false, 4, consumerChat));
      // setConsumerChat(
      //   Array.from({ length: 16 }, (v, n) => (n === -2 ? -2 : 4))
      // );
    } else if (RoundInformation[nextRound].alias === "E") {
      setContents((prev) => {
        let arr = [...prev];
        arr[0] = 3;
        return arr;
      });
      setConsumerChat(updateContentsId(false, false, 3, consumerChat));
      // setConsumerChat(
      //   Array.from({ length: 16 }, (v, n) => (n === -2 ? -2 : 3))
      // );
    } else {
      setContents(updateContentsId(true, false, -1, contents));
      setConsumerChat(updateContentsId(true, true, -1, consumerChat));
    }
  };

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
  const [commandMessage, setCommandMessage] = useState<ReactNode>(
    <span>"..."</span>
  );
  const [newsMessage, setNewsMessage] = useState<ReactNode>(<span>"..."</span>);

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
      if (roundState === "pending") {
        commandMessage =
          eventMessages[
            Math.floor((1 - time / maxTime) * eventMessages.length)
          ];
      } else {
        commandMessage = roundInfo.eventMessage;
      }
      newsMessage = roundInfo.newsMessage;
    } else {
      commandMessage =
        round === 0 ? round1CommandMessage[wave] : normalCommandMessage[wave];
      newsMessage = <span>"..."</span>;
    }

    // Set message.
    setCommandMessage(commandMessage);
    setNewsMessage(newsMessage!);
  }, [roundWaveCount, isEvent, time, roundState]);

  return (
    <div
      className="Main"
      style={{
        position: "absolute",
        backgroundColor: "black",
        width: "100%",
        height: "100%",
        msOverflowStyle: "none",
        scrollbarWidth: "none",
        overflow: "hidden",
      }}
    >
      {roundState === "fail" ? (
        <>
          <div
            style={{
              position: "absolute",
              backgroundColor: "black",
              width: "100%",
              height: "100%",
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
              display: "flex",
              position: "absolute",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "100%",
              zIndex: 10,
            }}
          />
        </>
      ) : roundState === "success" ? (
        <>
          <div
            style={{
              position: "absolute",
              backgroundColor: "black",
              width: "100%",
              height: "100%",
              opacity: 0.6,
              zIndex: 9,
            }}
          />
          <GuideWindow
            messageList={[
              "> Congratulations! You completed to repay all investments.",
              "> Now, let's move on to the next round.",
            ]}
            navigate={nextRound}
            style={{
              display: "flex",
              position: "absolute",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "100%",
              zIndex: 10,
            }}
          />
        </>
      ) : (
        <></>
      )}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flex: 1,
          height: "100%",
          justifyContent: "space-evenly",
        }}
      >
        <ConsumerGroup />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "600px",
            height: "100%",
            justifyContent: "space-evenly",
            alignItems: "flex-end",
          }}
        >
          <p
            style={{
              position: "relative",
              zIndex: 3,
              fontFamily: "Retro Gaming",
              fontSize: "23px",
              textAlign: "right",
              color: "white",
              margin: "0px",
            }}
          >
            Round{" "}
            <EmphasizeText
              message={RoundInformation[roundWaveCount.round].alias}
            />{" "}
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
