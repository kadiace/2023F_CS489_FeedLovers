import ConsumerShiny from "../assets/img/ui/consumer_shiny.png";
import ConsumerGrid from "../assets/img/ui/consumer_grid.png";
import ConsumerBackground from "../assets/img/ui/consumer_background.png";
import ConsumerGridHover from "../assets/img/ui/consumer_grid_hover.png";
import ConsumerBackgroundHover from "../assets/img/ui/consumer_background_hover.png";
import ConsumerTorso from "../assets/img/ui/consumer_torso.png";
import ConsumerBan from "../assets/img/ui/consumer_ban.png";
import { useDrop } from "react-dnd";
import ConsumerChat from "./ConsumerChat";
import { useState } from "react";
import { SetterOrUpdater, useRecoilState } from "recoil";
import {
  goalAtom,
  consumerChatAtom,
  roundStateAtom,
  totalAtom,
} from "recoils/Atom";
import { getRecoilValue } from "./Timer";

export const getConsumerChat = (setter: SetterOrUpdater<number[]>) => {
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
  const [total, setTotal] = useRecoilState(totalAtom);
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

  const [{ isOver, canDrop }, drop] = useDrop(() => ({
    accept: "CONTENT",
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
        setRoundState("success");
      }
      updateAcceptType(5);
    },
    canDrop: (item: { type: number }, monitor) => {
      const receiveConsumerChat = getConsumerChat(setConsumerChat);
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
            position: "absolute",
            display: "flex",
            width: "140px",
            height: "140px",
            justifyContent: "center",
            zIndex: 5,
            alignItems: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              display: "flex",
              width: "100%",
              height: "100%",
              justifyContent: "center",
              backgroundColor: "black",
              opacity: 0.6,
              zIndex: 5,
            }}
          />
          {consumerChat[id] === -2 ? (
            <img
              style={{
                position: "absolute",
                display: "flex",
                width: "100px",
                height: "100px",
                justifyContent: "center",
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
          position: "relative",
          display: "flex",
          width: "100%",
          height: "100%",
          justifyContent: "center",
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
            position: "relative",
            display: "flex",
            width: "140px",
            height: "140px",
            justifyContent: "center",
          }}
        >
          {(onEvent || (isOver && canDrop)) && consumerChat[id] !== -2 ? (
            <>
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
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              position: "absolute",
              width: "80%",
              height: "80%",
              bottom: "0px",
              // objectFit: "contain",
              zIndex: 1,
              WebkitMaskImage: `url(${ConsumerTorso})`,
              WebkitMaskSize: "contain",
            }}
          >
            <div
              style={{
                display: "flex",
                flex: 8,
                flexDirection: "column",
                position: "relative",
                zIndex: 1,
                background: "white",
              }}
            ></div>
            <div
              style={{
                display: "flex",
                flex: 3,
                flexDirection: "column",
                position: "relative",
                zIndex: 1,
                background: "pink",
              }}
            ></div>
            <div
              style={{
                display: "flex",
                flex: 0.5,
                flexDirection: "column",
                position: "relative",
                zIndex: 1,
                background: "blue",
              }}
            ></div>
            <div
              style={{
                display: "flex",
                flex: 1,
                flexDirection: "column",
                position: "relative",
                zIndex: 1,
                background: "green",
              }}
            ></div>
          </div>
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
    </div>
  );
}

export default Consumer;
