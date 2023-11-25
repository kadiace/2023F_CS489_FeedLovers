import React from "react";
import Command from "components/Command";
import CommandMessage from "components/CommandMessage";

function Guide() {
  return (
    <div
      className="Guide"
      style={{
        position: "absolute",
        backgroundColor: "black",
        width: "100%",
        height: "100%",
        zIndex: 0,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          zIndex: 1,
        }}
      >
        <Command />
      </div>

      <div
        style={{
          display: "flex",
          position: "absolute",
          fontFamily: "Bahnschrift",
          fontSize: "23px",
          textAlign: "right",
          color: "white",
          zIndex: 2,
        }}
      >
        <CommandMessage />
      </div>
    </div>
  );
}

export default Guide;
