import UserShiny from "../assets/img/ui/user_shiny.png";
import UserGrid from "../assets/img/ui/user_grid.png";

function Consumer({ number }: { number: string }) {
  return (
    <div
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
          objectFit: "cover",
          zIndex: 0,
        }}
        src="../src/assets/img/"
      ></img>
      <img
        alt=""
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
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
          objectFit: "cover",
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
