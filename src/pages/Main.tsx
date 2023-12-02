import React from "react";
import "./Main.css";
import Consumer from "components/Consumer";
import Store from "components/Store";
import Command from "components/Command";
import News from "components/News";

function Main() {
  function changeRound(n: number) {}
  const round: any = {
    A: {
      goal: 1000,
      Wave: [30, 40, 50],
    },
    // "Round B": {
    //   goal: 1000,
    //   Wave: [30, 30, 40, 40, 50],
    // },
    C: {
      goal: 2000,
      Wave: [30, 40, 50],
    },
    // "Round D": {
    //   goal: 1000,
    //   Wave: [30, 30, 40, 40, 50],
    // },
    E: {
      goal: 3000,
      Wave: [30],
    },
  };
  var goal = round["A"]["goal"];

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
          justifyContent: "space-evenly",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            justifyContent: "center",
            gap: "20px",
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
            <Consumer id={1} />
            <Consumer id={2} />
            <Consumer id={3} />
            <Consumer id={4} />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "20px",
              width: "100%",
            }}
          >
            <Consumer id={5} />
            <Consumer id={6} />
            <Consumer id={7} />
            <Consumer id={8} />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "20px",
              width: "100%",
            }}
          >
            <Consumer id={9} />
            <Consumer id={10} />
            <Consumer id={11} />
            <Consumer id={12} />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "20px",
              width: "100%",
            }}
          >
            <Consumer id={13} />
            <Consumer id={14} />
            <Consumer id={15} />
            <Consumer id={16} />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "600px",
            height: "100%",
            justifyContent: "space-evenly",
            alignItems: "flex-end",
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
            Round C - Remain $ {goal}M
          </p>
          <Store changeRound={changeRound} />
          <Command />
          <News />
        </div>
      </div>
    </div>
  );
}

export default Main;
