import StoreShiny from "../assets/img/ui/store_shiny.png";
import StoreGrid from "../assets/img/ui/store_grid.png";
import StoreBackground from "../assets/img/ui/store_background.png";
import StoreContents from "./StoreContents";
import Timer from "./Timer";

function Store(changeRound: any) {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        height: "220px",
      }}
    >
      <img
        alt=""
        style={{
          position: "absolute",
          right: "0px",
          top: "5px",
          height: "97%",
          objectFit: "contain",
          zIndex: 0,
          pointerEvents: "none",
        }}
        src={StoreBackground}
      ></img>
      <div
        style={{
          position: "absolute",
          display: "flex",
          left: "117px",
          right: "10px",
          top: "10px",
          bottom: "10px",
          zIndex: 1,
          flexDirection: "column",
        }}
      >
        <div
          style={{
            position: "relative",
            display: "flex",
            height: "70px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              justifyContent: "center",
              position: "relative",
              zIndex: 3,
              fontFamily: "Retro Gaming",
              fontSize: "23px",
              color: "cyan",
              gap: "50px",
            }}
          >
            <p style={{}}>Wave 3/10</p>
            <Timer changeRound={changeRound} />
          </div>
        </div>
        <div
          style={{
            position: "relative",
            display: "flex",
            flexGrow: 1,
            // background: "yellow",
          }}
        >
          <StoreContents />
        </div>
      </div>
      <img
        alt=""
        style={{
          position: "absolute",
          right: "100px",
          top: "5px",
          height: "95%",
          objectFit: "contain",
          zIndex: 2,
          pointerEvents: "none",
        }}
        src={StoreShiny}
      ></img>
      <img
        alt=""
        style={{
          position: "absolute",
          right: "0px",
          height: "100%",
          objectFit: "contain",
          zIndex: 3,
          pointerEvents: "none",
        }}
        src={StoreGrid}
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

export default Store;
