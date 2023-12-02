import ConsumerShiny from "../assets/img/ui/consumer_shiny.png";
import ConsumerGrid from "../assets/img/ui/consumer_grid.png";
import ConsumerBackground from "../assets/img/ui/consumer_background.png";
import ConsumerTorso from "../assets/img/ui/consumer_torso.png";
import { useDrop } from "react-dnd";
import ConsumerChat from "./ConsumerChat";

function Consumer({ id }: { id: number }) {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "CONSUMER",
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

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
      {isOver ? (
        <ConsumerChat type={(id % 5) + 1} />
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
            }}
            src={ConsumerBackground}
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
