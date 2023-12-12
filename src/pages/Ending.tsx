import { EndingAnimation } from "components/Animation";
import ConsumerGroup from "components/ConsumerGroup";
import GuideWindow from "components/GuideWindow";
import { MouseEventHandler, useState } from "react";
import { useNavigate } from "react-router-dom";

function Ending() {
  // state
  /* esline-disable */
  const [afterGIF, setAfterGIF] = useState(false);

  // const
  const navigate = useNavigate();
  const navigateLobby: MouseEventHandler = () => {
    navigate("/lobby");
  };
  const turnOnPopUp = () => {
    setAfterGIF(true);
  };

  return (
    <div
      className="Main"
      style={{
        position: "absolute",
        backgroundColor: "black",
        width: "100%",
        height: "100%",
      }}
    >
      {afterGIF && (
        <>
          <div
            style={{
              position: "absolute",
              backgroundColor: "black",
              width: "100%",
              height: "100%",
              opacity: 0.6,
              zIndex: 9,
            }}
          />
          <GuideWindow
            messageList={["> TEST: Ending Script."]}
            navigate={navigateLobby}
            style={{
              display: "flex",
              position: "absolute",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "100%",
              zIndex: 10,
            }}
          />
        </>
      )}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flex: 1,
          height: "100%",
          justifyContent: "center",
        }}
      >
        <ConsumerGroup />
        <EndingAnimation
          onAnimationEnd={turnOnPopUp}
          delay="1s"
          duration="5s"
        />
      </div>
    </div>
  );
}

export default Ending;
