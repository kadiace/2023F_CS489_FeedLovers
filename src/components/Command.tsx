import GuideBackground from "../assets/img/ui/guide_background.png";
import GuideShiny from "../assets/img/ui/guide_shiny.png";
import GuideGrid from "../assets/img/ui/guide_grid.png";

function Command() {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        width: "860px",
        height: "320px",
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
        src={GuideBackground}
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
        src={GuideShiny}
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
        src={GuideGrid}
      ></img>
    </div>
  );
}

export default Command;
