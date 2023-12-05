import { useRecoilState } from "recoil";
import Content from "./Content";
import { contentsAtom } from "recoils";

function StoreContents() {
  // state
  /* eslint-disable */
  const [contents, setContents] = useRecoilState(contentsAtom);
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        height: "100%",
        flexGrow: 1,
      }}
    >
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "50px",
            height: "50px",
          }}
        >
          <Content type={contents[0]} id={0} />
        </div>
        <div
          style={{
            position: "relative",
            width: "50px",
            height: "50px",
          }}
        >
          <Content type={contents[1]} id={1} />
        </div>
      </div>
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "50px",
            height: "50px",
          }}
        >
          <Content type={contents[2]} id={2} />
        </div>
        <div
          style={{
            position: "relative",
            width: "50px",
            height: "50px",
          }}
        >
          <Content type={contents[3]} id={3} />
        </div>
      </div>
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "50px",
            height: "50px",
          }}
        >
          <Content type={contents[4]} id={4} />
        </div>
        <div
          style={{
            position: "relative",
            width: "50px",
            height: "50px",
          }}
        >
          <Content type={contents[5]} id={5} />
        </div>
      </div>
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "50px",
            height: "50px",
          }}
        >
          <Content type={contents[6]} id={6} />
        </div>
        <div
          style={{
            position: "relative",
            width: "50px",
            height: "50px",
          }}
        >
          <Content type={contents[7]} id={7} />
        </div>
      </div>
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "50px",
            height: "50px",
          }}
        >
          <Content type={contents[8]} id={8} />
        </div>
        <div
          style={{
            position: "relative",
            width: "50px",
            height: "50px",
          }}
        >
          <Content type={contents[9]} id={9} />
        </div>
      </div>
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "50px",
            height: "50px",
          }}
        >
          <Content type={contents[10]} id={10} />
        </div>
        <div
          style={{
            position: "relative",
            width: "50px",
            height: "50px",
          }}
        >
          <Content type={contents[11]} id={11} />
        </div>
      </div>
    </div>
  );
}

export default StoreContents;
