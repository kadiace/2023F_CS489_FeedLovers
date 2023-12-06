import { useDrop } from "react-dnd";
import Consumer from "./Consumer";
import { useRecoilState } from "recoil";
import { consumerChatAtom, roundStateAtom, timeAtom } from "recoils/Atom";

function ConsumerGroup() {
  const [consumerChat, setConsumerChat] = useRecoilState(consumerChatAtom);
  const [time, setTime] = useRecoilState(timeAtom);
  const [roundState, setRoundState] = useRecoilState(roundStateAtom);
  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: "CONTENT_EVENT",
      hover(item: { type: number }, monitor) {},
      drop: (item: { type: number }, monitor) => {
        // 하트 반응 띄우기(타이머 끝날 때까지) | dnd 못하게 막기 | 검은 반투명 화면

        setConsumerChat((prev) => {
          let next = Array.from({ length: 16 }, (_) => 6);
          next = next.slice();
          next[Math.floor(Math.random() * 16)] = 5;
          return next;
        });
        setRoundState("progress");
        setTime(1);
      },
      canDrop: (item: { type: number }, monitor) => {
        return true;
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    })
    // [x, y]
  );
  return (
    <div
      ref={drop}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "fit-content",
        gap: "20px",
        alignSelf: "center",
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
        <Consumer id={0} onEvent={isOver} />
        <Consumer id={1} onEvent={isOver} />
        <Consumer id={2} onEvent={isOver} />
        <Consumer id={3} onEvent={isOver} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "20px",
          width: "100%",
        }}
      >
        <Consumer id={4} onEvent={isOver} />
        <Consumer id={5} onEvent={isOver} />
        <Consumer id={6} onEvent={isOver} />
        <Consumer id={7} onEvent={isOver} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "20px",
          width: "100%",
        }}
      >
        <Consumer id={8} onEvent={isOver} />
        <Consumer id={9} onEvent={isOver} />
        <Consumer id={10} onEvent={isOver} />
        <Consumer id={11} onEvent={isOver} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "20px",
          width: "100%",
        }}
      >
        <Consumer id={12} onEvent={isOver} />
        <Consumer id={13} onEvent={isOver} />
        <Consumer id={14} onEvent={isOver} />
        <Consumer id={15} onEvent={isOver} />
      </div>
    </div>
  );
}

export default ConsumerGroup;
