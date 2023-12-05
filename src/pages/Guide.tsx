import React from "react";
import "./Guide.css";
import GuideCommand from "components/GuideCommand";
import GuideCommandMessage from "components/GuideCommandMessage";
import { useNavigate } from "react-router-dom";

function Guide() {
  // navigate
  const navigate = useNavigate();
  function navigateMain() {
    navigate("/main");
  }
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
        <GuideCommandMessage
          counter={0}
          maxCount={3}
          messageList={[
            "> Do you see me?",
            "> Oh! This works! Nice to meet you!",
            "> Hello, you are 'Feed', developed by our platform's content recommendation \nalgorithm.",
            "> No time to talk. There are so many people already waiting for you! Let’s go to \nmeet them.",
          ]}
          navigate={navigateMain}
        />
      </div>
    </div>
  );
}

export default Guide;
