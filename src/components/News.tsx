import NewsShiny from "../assets/img/ui/news_shiny.png";
import NewsBackground from "../assets/img/ui/news_background.png";

function News() {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        width: "700px",
        height: "150px",
      }}
    >
      <img
        alt=""
        style={{
          position: "absolute",
          right: "0px",
          height: "93%",
          objectFit: "contain",
          zIndex: 0,
        }}
        src={NewsBackground}
      ></img>
      <img
        alt=""
        style={{
          position: "absolute",
          right: "150px",
          height: "88%",
          objectFit: "contain",
          zIndex: 1,
        }}
        src={NewsShiny}
      ></img>
      <p
        style={{
          position: "absolute",
          right: "9px",
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

export default News;
