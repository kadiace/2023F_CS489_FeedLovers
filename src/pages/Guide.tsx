import React from "react";
import "./Guide.css";
import { useNavigate } from "react-router-dom";
import GuideWindow from "components/GuideWindow";

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
      <GuideWindow
        messageList={[
          "> Do you see me?",
          "> Oh! This works! Nice to meet you!",
          "> Hello, you are 'Feed', developed by our platform's content recommendation \nalgorithm.",
          "> No time to talk. There are so many people already waiting for you! Let’s go to \nmeet them.",
        ]}
        navigate={navigateMain}
        style={{
          display: "flex",
          position: "absolute",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
}

export default Guide;
