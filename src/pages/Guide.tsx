import React from "react";
import "./Guide.css";
import GuideCommand from "components/GuideCommand";
import GuideCommandMessage from "components/GuideCommandMessage";

function Guide() {
  return (
    <div
      className="Guide"
      style={{
        display: "flex",
        position: "absolute",
        backgroundColor: "black",
        width: "100%",
        height: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          position: "absolute",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <GuideCommand />
      </div>

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

      <div
        style={{
          display: "flex",
          position: "absolute",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          zIndex: 2,
        }}
      >
        <GuideCommandMessage counter={0} />
      </div>
    </div>
  );
}

export default Guide;
