import React from "react";
import LogoBeforeEnding from "assets/img/logo/doguri-removebg-preview.png";
import CoinseLogo from "assets/img/logo/coinse.png";

function Lobby() {
  return (
    <div
      className="Lobby"
      style={{
        position: "absolute",
        backgroundColor: "black",
        width: "100%",
        height: "100%",
        display: "flex",
      }}
    >
      <div
        className="Logo-Layout"
        style={{
          flex: 3,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          className="Logo-Image"
          style={{
            width: "600px",
            height: "600px",
            backgroundImage: `url(${LogoBeforeEnding})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          }}
        ></div>
      </div>
      <div
        className="Button-Layout"
        style={{
          flex: 2,
          backgroundColor: "#0000ff",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          className="button"
          style={{
            backgroundColor: "#807299",
            width: "match-parent",
            height: "fit-content",
          }}
        >
          <p> test1</p>
        </div>
        <div
          className="button"
          style={{
            backgroundColor: "#00ff32",
            width: "match-parent",
            height: "fit-content",
          }}
        >
          <p> test2</p>
        </div>
        <div
          className="button"
          style={{
            backgroundColor: "#70ffe2",
            width: "match-parent",
            height: "fit-content",
          }}
        >
          <p> test3</p>
        </div>
      </div>
    </div>
  );
}

export default Lobby;
