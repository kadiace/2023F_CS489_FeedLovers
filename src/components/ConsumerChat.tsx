import ChatGrid from "../assets/img/ui/chat_grid.png";
import ChatBan from "../assets/img/ui/chat_ban.png";
import Content from "./Content";

function ConsumerChat({ type }: { type: number }) {
  return (
    <>
      <img
        alt=""
        style={{
          position: "absolute",
          width: "57px",
          height: "66px",
          top: "-40px",
          objectFit: "contain",
          zIndex: 5,
        }}
        src={ChatGrid}
      ></img>
      <div
        style={{
          position: "absolute",
          width: "40px",
          height: "40px",
          top: "-32px",
          objectFit: "contain",
          zIndex: 6,
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "contain",
            zIndex: 6,
          }}
        >
          <Content type={type} id={-1} event={false} />
        </div>

        {/* <img
          alt=""
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "contain",
            zIndex: 7,
          }}
          src={ChatBan}
        /> */}
      </div>
    </>
  );
}

export default ConsumerChat;
