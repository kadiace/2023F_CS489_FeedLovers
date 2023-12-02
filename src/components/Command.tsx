import CommandShiny from "../assets/img/ui/command_shiny.png";
import CommandGrid from "../assets/img/ui/command_grid.png";
import CommandBackground from "../assets/img/ui/command_background.png";

function Command() {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        width: "700px",
        height: "150px",
        left: "105px",
        justifyContent: "center",
      }}
    >
      <img
        alt=""
        style={{
          position: "absolute",
          left: "0px",
          top: "5px",
          width: "100%",
          objectFit: "contain",
          zIndex: 0,
        }}
        src={CommandBackground}
      ></img>
      <img
        alt=""
        style={{
          position: "absolute",
          left: "10px",
          top: "5px",
          width: "100%",
          height: "95%",
          objectFit: "contain",
          zIndex: 1,
        }}
        src={CommandShiny}
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
        src={CommandGrid}
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
        1
      </p>
    </div>
  );
}

export default Command;
