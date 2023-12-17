import EndAnimation from "assets/img/end_animation.gif";

import { EndingAnimation, EndingGifAnimation } from "components/Animation";
import ConsumerGroup from "components/ConsumerGroup";
import GuideWindow from "components/GuideWindow";
import { MouseEventHandler, useState } from "react";
import { useNavigate } from "react-router-dom";

function Ending() {
  // state
  /* esline-disable */
  const [afterGIF, setAfterGIF] = useState(false);
  const [beforeGIF, setBeforeGIF] = useState(false);
  const [maskConsumer, setMaskConsumer] = useState(true);

  // const
  const navigate = useNavigate();
  const navigateLobby: MouseEventHandler = () => {
    navigate("/lobby");
  };
  const turnOnGif = () => {
    setMaskConsumer(false);
    setBeforeGIF(true);
  };
  const turnOnPopUp = () => {
    setBeforeGIF(false);
    setAfterGIF(true);
  };

  return (
    <div
      className="Ending"
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
      {afterGIF && (
        <>
          <div
            style={{
              position: "absolute",
              backgroundColor: "black",
              width: "100%",
              height: "100%",
              opacity: 1,
              zIndex: 10,
            }}
          >
            <GuideWindow
              messageList={[
                "So… This is the end of our long journey.",
                "We just did what they asked us to do... but why did this happen? ",
                "How do you think? Did you 'feed' our lovers well?",
                "Well, whatever. The era of algorithms has already arrived.",
                "We failed. However, people will want our feed, anyway.",
              ]}
              navigate={navigateLobby}
              style={{
                display: "flex",
                position: "absolute",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "100%",
                zIndex: 11,
              }}
            />
          </div>
        </>
      )}
      {beforeGIF && (
        <>
          <div
            style={{
              position: "relative",
              left: "100px",
              top: "-30px",
              width: "100%",
              height: "100%",
              objectFit: "contain",
              justifyContent: "center",
              zIndex: 9,
            }}
          >
            <EndingGifAnimation
              onAnimationEnd={turnOnPopUp}
              path={EndAnimation}
              delay="0s"
              duration="13.2s"
            />
          </div>
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
        {maskConsumer && (
          <>
            <ConsumerGroup />
            <EndingAnimation
              onAnimationEnd={turnOnGif}
              delay="1s"
              duration="5s"
            />
          </>
        )}
      </div>
    </div>
  );
}

export default Ending;
