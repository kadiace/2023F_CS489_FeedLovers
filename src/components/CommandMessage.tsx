import { TypeAnimation } from "react-type-animation";

function CommandMessage() {
  return (
    <div
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
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed once, initially
          "We produce food for Mice",
          1000,
          "We produce food for Hamsters",
          1000,
          "We produce food for Guinea Pigs",
          1000,
          "We produce food for Chinchillas",
          1000,
        ]}
        speed={50}
        style={{ fontSize: "2em" }}
        repeat={Infinity}
      />
    </div>
  );
}

export default CommandMessage;
