import celeb from "../assets/img/contents/celeb.png";
import info_knowledge from "../assets/img/contents/info_knowledge.png";
import money from "../assets/img/contents/money.png";
import politics from "../assets/img/contents/politics.png";
import sports_game from "../assets/img/contents/sports_game.png";
import { useDrag } from "react-dnd";
import { useRecoilState } from "recoil";
import { contentsAtom } from "recoils/Atom";

function Content({ type, id }: { type: number; id: number }) {
  // state
  /* eslint-disable */
  const [contents, setContents] = useRecoilState(contentsAtom);

  function typeToImage(type: number) {
    switch (type) {
      case 0:
        return celeb;
      case 1:
        return info_knowledge;
      case 2:
        return money;
      case 3:
        return politics;
      case 4:
        return sports_game;
      default:
        break;
    }
  }

  const [{ isDragging }, drag, dragPreview] = useDrag({
    type: "CONTENT",
    item: { type },
    end(item, monitor) {
      if (monitor.didDrop()) {
        setContents((prev) => {
          const next = prev.slice();
          next[id] = -1;
          return next;
        });
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return isDragging ? (
    <div ref={dragPreview} />
  ) : contents[id] === -1 ? (
    <></>
  ) : (
    <div
      ref={drag}
      style={{
        position: "relative",
        display: "flex",
        width: "100%",
        height: "100%",
        objectFit: "contain",
      }}
    >
      <img
        alt=""
        style={{
          position: "relative",
          display: "flex",
          width: "100%",
          height: "100%",
          objectFit: "contain",
        }}
        src={typeToImage(id === -1 ? type : contents[id])}
      ></img>
    </div>
  );
}

export default Content;
