import { IntroAnimation } from "components/Animation";
import ReactLogo from "assets/img/logo/react.png";
import CoinseLogo from "assets/img/logo/coinse.png";

function Intro() {
  return (
    <div
      className="Main"
      style={{
        position: "absolute",
        backgroundColor: "black",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <IntroAnimation
        path={ReactLogo}
        delay="1s"
        style={{
          zIndex: 1,
        }}
      />
      <IntroAnimation
        path={CoinseLogo}
        delay="11s"
        style={{
          position: "absolute",
          zIndex: 2,
        }}
      />
    </div>
  );
}

export default Intro;
