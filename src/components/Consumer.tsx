import UserShiny from "../assets/img/ui/user_shiny.png";
import UserGrid from "../assets/img/ui/user_grid.png";
import UserBackground from "../assets/img/ui/user_background.png";
import { useDrop } from "react-dnd";

function Consumer({ number }: { number: string }) {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "CONSUMER",
    // drop: () => moveKnight(x, y),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return isOver ? (
    <div
      ref={drop}
      style={{
        position: "relative",
        display: "flex",
        width: "150px",
        height: "150px",
        justifyContent: "center",
      }}
    >
      {/* <img
        alt=""
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "contain",
          zIndex: 0,
        }}
        src={UserBackground}
      ></img> */}
      <img
        alt=""
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "contain",
          zIndex: 1,
        }}
        src={UserShiny}
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
        src={UserGrid}
      ></img>
      <p
        style={{
          position: "absolute",
          left: "9px",
          top: "-11px",
          zIndex: 3,
          fontFamily: "Retro Gaming",
          fontSize: "18px",
          textAlign: "center",
        }}
      >
        {number}
      </p>
    </div>
  ) : (
    <div
      ref={drop}
      style={{
        position: "relative",
        display: "flex",
        width: "150px",
        height: "150px",
        justifyContent: "center",
      }}
    >
      <img
        alt=""
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "contain",
          zIndex: 0,
        }}
        src={UserBackground}
      ></img>
      <img
        alt=""
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "contain",
          zIndex: 1,
        }}
        src={UserShiny}
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
        src={UserGrid}
      ></img>
      <p
        style={{
          position: "absolute",
          left: "9px",
          top: "-11px",
          zIndex: 3,
          fontFamily: "Retro Gaming",
          fontSize: "18px",
          textAlign: "center",
        }}
      >
        {number}
      </p>
    </div>
  );
}

export default Consumer;
