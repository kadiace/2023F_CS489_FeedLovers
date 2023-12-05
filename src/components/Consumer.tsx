import ConsumerShiny from "../assets/img/ui/consumer_shiny.png";
import ConsumerGrid from "../assets/img/ui/consumer_grid.png";
import ConsumerBackground from "../assets/img/ui/consumer_background.png";
import ConsumerGridHover from "../assets/img/ui/consumer_grid_hover_alt2.png";
import ConsumerBackgroundHover from "../assets/img/ui/consumer_background_hover_alt2_opaque.png";
import ConsumerTorso from "../assets/img/ui/consumer_torso.png";
import { useDrop } from "react-dnd";
import ConsumerChat from "./ConsumerChat";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { goalAtom, roundStateAtom } from "recoils/Atom";
import { getGoal } from "./Timer";

function Consumer({ id }: { id: number }) {
  // variable
  let acceptTypeVar = Math.floor(Math.random() * 5);

  // state
  /* eslint-disable */
  const [acceptType, setAcceptType] = useState(acceptTypeVar);
  const [hoverType, setHoverType] = useState(-1);
  const [goal, setGoal] = useRecoilState(goalAtom);
  const [roundState, setRoundState] = useRecoilState(roundStateAtom);

  // function
  function updateAcceptType(type: number) {
    acceptTypeVar = type;
    setAcceptType(acceptTypeVar);
  }

  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: "CONTENT",
      hover(item: { type: number }, monitor) {
        setHoverType(item.type);
      },
      drop: (item: { type: number }, monitor) => {
        if (item.type === acceptTypeVar) {
          setGoal((prev) => {
            return prev - 100;
          });
          const remain = getGoal(setGoal);
          if (remain <= 0) {
            setRoundState("success");
          }
          updateAcceptType(Math.floor(Math.random() * 5));
        }
      },
      canDrop: (item: { type: number }, monitor) => {
        return item.type === acceptTypeVar;
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
      {isOver && hoverType === acceptType ? (
        <>
          <ConsumerChat type={acceptType} />
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
          <ConsumerChat type={acceptType} />
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
        {id}
      </p>
    </div>
  );
}

export default Consumer;
