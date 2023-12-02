import NewsShiny from "../assets/img/ui/news_shiny.png";
import NewsBackground from "../assets/img/ui/news_background.png";

function News() {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        width: "100%",
        height: "150px",
      }}
    >
      <img
        alt=""
        style={{
          position: "absolute",
          right: "0px",
          width: "100%",
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

      <div
        style={{
          position: "absolute",
          display: "flex",
          left: "30px",
          right: "140px",
          top: "10px",
          bottom: "25px",
          zIndex: 4,
          fontFamily: "Retro Gaming",
          fontSize: "21px",
          alignItems: "center",
          flex: 1,
          color: "black",
          // background: "red",
        }}
      >
        Mass shooting left 80 victims...
      </div>
    </div>
  );
}

export default News;
