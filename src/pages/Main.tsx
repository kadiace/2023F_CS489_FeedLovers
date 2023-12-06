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
} from "recoils/Atom";
import { RoundInformation } from "components/Round";
import { useNavigate } from "react-router-dom";
import GuideWindow from "components/GuideWindow";
import { MouseEventHandler } from "react";
import { getRecoilValue, updateContents } from "components/Timer";
import ConsumerGroup from "components/ConsumerGroup";
import EmphasizeText from "components/EmphasizeText";

function Main() {
  // const
  const round1CommandMessage = [
    "You can drag these contents and drop to consumers!",
    "Well done! Before the timer goes off, distribute these properly!",
    "I’m sure that you can make it!",
    "Great!",
    "Let’s make money until we exceed the goal!",
  ];
  const normalCommandMessage = [
    "You’re doing great..!",
    "Brilliant..!",
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

  // navigate
  const navigate = useNavigate();
  const navigateLobby: MouseEventHandler = () => {
    navigate("/lobby");
  };
  const nextRound: MouseEventHandler = () => {
    const { wave, round } = getRecoilValue(setRoundWaveCount);
    const nextRound = round + 1 >= RoundInformation.length ? 0 : round + 1;
    setRoundWaveCount({
      round: nextRound,
      wave: 0,
    });
    setGoal(RoundInformation[nextRound].goal);
    setTime(RoundInformation[round].wave[0]);
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
      setConsumerChat(Array.from({ length: 16 }, (_) => 4));
    } else if (RoundInformation[nextRound].alias === "E") {
      setContents((prev) => {
        let arr = [...prev];
        arr[0] = 3;
        return arr;
      });
      setConsumerChat(Array.from({ length: 16 }, (_) => 3));
    } else {
      updateContents(setContents, true, false);
      updateContents(setConsumerChat, true, true);
    }
  };

  // state
  /* eslint-disable */
  const [roundWaveCount, setRoundWaveCount] =
    useRecoilState(roundWaveCountAtom);
  const [goal, setGoal] = useRecoilState(goalAtom);
  const [roundState, setRoundState] = useRecoilState(roundStateAtom);
  const [isEvent, setIsEvent] = useRecoilState(isEventAtom);
  const [contents, setContents] = useRecoilState(contentsAtom);
  const [consumerChat, setConsumerChat] = useRecoilState(consumerChatAtom);
  const [time, setTime] = useRecoilState(timeAtom);

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
            - Remain $<EmphasizeText message={goal.toString()} />M
          </p>
          <Store />
          <Command
            message={
              isEvent && time < 10
                ? RoundInformation[roundWaveCount.round].commandMessage
                : roundWaveCount.round == 0
                ? round1CommandMessage[roundWaveCount.wave]
                : normalCommandMessage[roundWaveCount.wave]
            }
          />
          <News
            message={
              isEvent ? (
                RoundInformation[roundWaveCount.round].newsMessage
              ) : (
                <p>...</p>
              )
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Main;
