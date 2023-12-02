import "./Main.css";
import Consumer from "components/Consumer";
import Store from "components/Store";
import Command from "components/Command";
import News from "components/News";
import { useRecoilState } from "recoil";
import { roundWaveCountAtom } from "recoils";
import { RoundInformation } from "components/Round";

function Main() {
  // States.
  const [roundWaveCount, setRoundWaveCount] =
    useRecoilState(roundWaveCountAtom);

  return (
    <div
      className="Main"
      style={{
        position: "absolute",
        backgroundColor: "black",
        width: "100%",
        height: "100%",
        msOverflowStyle: "none",
        scrollbarWidth: "none",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flex: 1,
          height: "100%",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            justifyContent: "space-evenly",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "20px",
              width: "100%",
            }}
          >
            <Consumer number="1" />
            <Consumer number="2" />
            <Consumer number="3" />
            <Consumer number="4" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "20px",
              width: "100%",
            }}
          >
            <Consumer number="5" />
            <Consumer number="6" />
            <Consumer number="7" />
            <Consumer number="8" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "20px",
              width: "100%",
            }}
          >
            <Consumer number="9" />
            <Consumer number="10" />
            <Consumer number="11" />
            <Consumer number="12" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "20px",
              width: "100%",
            }}
          >
            <Consumer number="13" />
            <Consumer number="14" />
            <Consumer number="15" />
            <Consumer number="16" />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            justifyContent: "space-evenly",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              justifyContent: "right",
            }}
          >
            <p
              style={{
                position: "relative",
                zIndex: 3,
                fontFamily: "Retro Gaming",
                fontSize: "23px",
                textAlign: "right",
                color: "white",
                margin: "0px",
              }}
            >
              Round {RoundInformation[roundWaveCount["round"]].alias} - Remain $
              {RoundInformation[roundWaveCount["round"]].goal}M
            </p>
          </div>
          <div
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "right",
            }}
          >
            <Store />
          </div>
          <div
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "right",
              height: "150px",
            }}
          >
            <div
              style={{
                position: "absolute",
                flexDirection: "row",
                width: "100%",
                justifyContent: "right",
              }}
            >
              <Command />
            </div>
          </div>
          <div
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "right",
            }}
          >
            <News />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
