import StoreShiny from "../assets/img/ui/store_shiny.png";
import StoreGrid from "../assets/img/ui/store_grid.png";
import StoreBackground from "../assets/img/ui/store_background.png";
import StoreContents from "./StoreContents";
import Timer from "./Timer";
import { useRecoilState } from "recoil";
import { roundWaveCountAtom } from "recoils";
import { RoundInformation } from "./Round";

function Store() {
  // States.
  const [roundWaveCount, setRoundWaveCount] =
    useRecoilState(roundWaveCountAtom);

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        width: "100%",
        height: "223px",
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
          inset: "10px",
          zIndex: 1,
          flexDirection: "column",
        }}
      >
        <div
          style={{
            position: "relative",
            display: "flex",
            height: "60px",
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
              color: "#95d7d0",
              gap: "50px",
            }}
          >
            <p style={{}}>
              Wave {roundWaveCount["wave"] + 1}/
              {RoundInformation[roundWaveCount["round"]].wave.length}
            </p>
            <Timer />
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
    </div>
  );
}

export default Store;
