import { useState } from "react";
import Typist from "react-typist";

function GuideCommandMessage(props: { counter: number }) {
  const messageList = [
    "> Do you see me?",
    "> Oh! This works! Nice to meet you!",
    "> Hello, you are 'Feed', developed by our platform's content recommendation \nalgorithm.",
    "> No time to talk. There are so many people already waiting for you! Let’s go to \nmeet them.",
  ];

  const [counter, setCounter] = useState(props.counter);

  const increment = () => {
    if (counter < 3) setCounter(counter + 1);
  };

  return (
    <div>
      <div
        style={{
          position: "relative",
          display: "flex",
          whiteSpace: "pre-line",
          width: "780px",
          height: "110px",
          color: "#71FF2F",
          fontFamily: "SairaCondensed",
          fontSize: "26px",
          fontStyle: "normal",
          lineHeight: "110%" /* 39.6px */,
          letterSpacing: "0.25px",
        }}
      >
        <Typist avgTypingDelay={30} key={counter}>
          {messageList[counter]}
        </Typist>
      </div>

      <div
        style={{
          position: "relative",
          display: "flex",
          top: "30px",
          whiteSpace: "pre-line",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button
          style={{
            width: "100px",
            height: "45px",
            color: "#341948",
            backgroundColor: "#71FF2F",
            fontFamily: "SairaCondensed",
            fontSize: "26px",
            fontStyle: "normal",
            lineHeight: "110%" /* 39.6px */,
            letterSpacing: "0.25px",
          }}
          onClick={increment}
        >
          OK
        </button>
      </div>
    </div>
  );
}

export default GuideCommandMessage;
