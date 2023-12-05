import GuideBackground from "../assets/img/ui/guide_background.png";
import GuideShiny from "../assets/img/ui/guide_shiny.png";
import GuideGrid from "../assets/img/ui/guide_grid.png";

function GuideWindowLayout() {
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
          zIndex: 3,
          pointerEvents: "none",
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
          zIndex: 4,
          pointerEvents: "none",
        }}
        src={GuideGrid}
      ></img>

      <p
        style={{
          display: "flex",
          position: "absolute",
          fontFamily: "Retro Gaming",
          fontSize: "23px",
          textAlign: "right",
          color: "white",
          right: "114vh",
          top: "24vh",
          zIndex: 4,
        }}
      >
        from someone...
      </p>
    </div>
  );
}

export default GuideWindowLayout;
