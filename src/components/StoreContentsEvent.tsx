import { useRecoilState } from "recoil";
import Content from "./Content";
import { contentsAtom } from "recoils/Atom";

function StoreContentsEvent() {
  // state
  /* eslint-disable */
  const [contents, setContents] = useRecoilState(contentsAtom);
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        flexGrow: 1,
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100px",
          height: "100px",
        }}
      >
        <Content type={contents[0]} id={0} event={true} />
      </div>
    </div>
  );
}

export default StoreContentsEvent;
