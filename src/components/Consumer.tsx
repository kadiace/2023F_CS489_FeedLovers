import ConsumerShiny from "../assets/img/ui/consumer_shiny.png";
import ConsumerGrid from "../assets/img/ui/consumer_grid.png";
import ConsumerBackground from "../assets/img/ui/consumer_background.png";
import ConsumerGridHover from "../assets/img/ui/consumer_grid_hover_alt2.png";
import ConsumerBackgroundHover from "../assets/img/ui/consumer_background_hover_alt2.png";
import ConsumerTorso from "../assets/img/ui/consumer_torso.png";
import { useDrop } from "react-dnd";
import ConsumerChat from "./ConsumerChat";
import { useState } from "react";
import { SetterOrUpdater, useRecoilState } from "recoil";
import { goalAtom, consumerChatAtom } from "recoils/Atom";

const getConsumerChat = (setter: SetterOrUpdater<number[]>) => {
  let consumerChat = [0];
  setter((prev) => {
    consumerChat = prev;
    return consumerChat;
  });
  return consumerChat;
};

function Consumer({ id }: { id: number }) {
  // state
  /* eslint-disable */
  const [hoverType, setHoverType] = useState(-1);
  const [goal, setGoal] = useRecoilState(goalAtom);
  const [consumerChat, setConsumerChat] = useRecoilState(consumerChatAtom);

  // function
  function updateAcceptType(type: number) {
    setConsumerChat((prev) => {
      const next = prev.slice();
      next[id] = type;
      return next;
    });
  }

  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: "CONTENT",
      hover(item: { type: number }, monitor) {
        setHoverType(item.type);
      },
      drop: (item: { type: number }, monitor) => {
        const receiveConsumerChat = getConsumerChat(setConsumerChat);
        // 하트 반응 띄우기(타이머 끝날 때까지) | dnd 못하게 막기 | 검은 반투명 화면
        console.log(item.type, receiveConsumerChat[id]);
        if (item.type === receiveConsumerChat[id]) {
          setGoal((prev) => {
            return prev - 100;
          });
          updateAcceptType(5);
          // updateAcceptType(Math.floor(Math.random() * 5));
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
    })
    // [x, y]
  );

  return (
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
      {isOver && hoverType === consumerChat[id] ? (
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
  );
}

export default Consumer;
