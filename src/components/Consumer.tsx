import ConsumerShiny from "../assets/img/ui/consumer_shiny.png";
import ConsumerGrid from "../assets/img/ui/consumer_grid.png";
import ConsumerBackground from "../assets/img/ui/consumer_background.png";
import ConsumerGridHover from "../assets/img/ui/consumer_grid_hover.png";
import ConsumerBackgroundHover from "../assets/img/ui/consumer_background_hover.png";
import ConsumerTorso from "../assets/img/ui/consumer_torso.png";
import { useDrop } from "react-dnd";
import ConsumerChat from "./ConsumerChat";
import { useState } from "react";
import { getGoal } from "./Timer";
import { SetterOrUpdater, useRecoilState } from "recoil";
import { goalAtom, consumerChatAtom, roundStateAtom } from "recoils/Atom";

const getConsumerChat = (setter: SetterOrUpdater<number[]>) => {
  let consumerChat = [0];
  setter((prev) => {
    consumerChat = prev;
    return consumerChat;
  });
  return consumerChat;
};

function Consumer({ id, onEvent }: { id: number; onEvent: boolean }) {
  // state
  /* eslint-disable */
  const [hoverType, setHoverType] = useState(-1);
  const [goal, setGoal] = useRecoilState(goalAtom);
  const [consumerChat, setConsumerChat] = useRecoilState(consumerChatAtom);
  const [roundState, setRoundState] = useRecoilState(roundStateAtom);

  // function
  function updateAcceptType(type: number) {
    setConsumerChat((prev) => {
      const next = prev.slice();
      next[id] = type;
      return next;
    });
    setConsumerChat((prev) => {
      const next = prev.slice();
      next[id] = type;
      return next;
    });
  }

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "CONTENT",
    hover(item: { type: number }, monitor) {
      setHoverType(item.type);
    },
    drop: (item: { type: number }, monitor) => {
      const receiveConsumerChat = getConsumerChat(setConsumerChat);
      console.log(item.type, receiveConsumerChat[id]);
      if (item.type === receiveConsumerChat[id]) {
        setGoal((prev) => {
          return prev - 100;
        });
        const remain = getGoal(setGoal);
        if (remain <= 0) {
          setRoundState("success");
        }
        updateAcceptType(5);
      }
    },
    canDrop: (item: { type: number }, monitor) => {
      const receiveConsumerChat = getConsumerChat(setConsumerChat);
      console.log(item.type, receiveConsumerChat[id]);
      return item.type === receiveConsumerChat[id];
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div>
      {consumerChat[id] === 5 ? (
        <div
          style={{
            position: "absolute",
            display: "flex",
            width: "140px",
            height: "140px",
            justifyContent: "center",
            backgroundColor: "black",
            opacity: 0.6,
            zIndex: 5,
          }}
        ></div>
      ) : (
        <></>
      )}
      <div
        ref={drop}
        style={{
          position: "relative",
          display: "flex",
          width: "140px",
          height: "140px",
          justifyContent: "center",
        }}
      >
        {onEvent || (isOver && hoverType === consumerChat[id]) ? (
          <>
            <ConsumerChat type={consumerChat[id]} />
            <img
              alt=""
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                objectFit: "contain",
                zIndex: 0,
                opacity: 0.5,
              }}
              src={ConsumerBackgroundHover}
            ></img>
            <img
              alt=""
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                objectFit: "contain",
                zIndex: 3,
              }}
              src={ConsumerGridHover}
            ></img>
          </>
        ) : (
          <>
            <ConsumerChat type={consumerChat[id]} />
            <img
              alt=""
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                objectFit: "contain",
                zIndex: 0,
                opacity: 0.5,
              }}
              src={ConsumerBackground}
            ></img>
            <img
              alt=""
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                objectFit: "contain",
                zIndex: 3,
              }}
              src={ConsumerGrid}
            ></img>
          </>
        )}
        <img
          alt=""
          style={{
            position: "absolute",
            width: "80%",
            height: "80%",
            bottom: "0px",
            objectFit: "contain",
            zIndex: 1,
          }}
          src={ConsumerTorso}
        ></img>
        <img
          alt=""
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "contain",
            zIndex: 2,
          }}
          src={ConsumerShiny}
        ></img>
        <p
          style={{
            position: "absolute",
            left: "9px",
            top: "-11px",
            zIndex: 4,
            fontFamily: "Retro Gaming",
            fontSize: "17px",
            textAlign: "center",
          }}
        >
          {id + 1}
        </p>
      </div>
    </div>
  );
}

export default Consumer;
