import celeb from "../assets/img/contents/celeb.png";
import info_knowledge from "../assets/img/contents/info_knowledge.png";
import money from "../assets/img/contents/money.png";
import politics from "../assets/img/contents/politics.png";
import sports_game from "../assets/img/contents/sports_game.png";
import { useDrag } from "react-dnd";

function Content({ type, id }: { type: number; id: number }) {
  var src;
  switch (type) {
    case 1:
      src = celeb;
      break;
    case 2:
      src = info_knowledge;
      break;
    case 3:
      src = money;
      break;
    case 4:
      src = politics;
      break;
    case 5:
      src = sports_game;
      break;
    default:
      break;
  }

  const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
    type: "CONSUMER",
    item: { id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return isDragging ? (
    <div ref={dragPreview} />
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
        src={src}
      ></img>
    </div>
  );
}

export default Content;
