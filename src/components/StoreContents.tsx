import Content from "./Content";

function StoreContents() {
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
        <Content type={1} id={1} />
        <Content type={2} id={2} />
      </div>
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <Content type={3} id={3} />
        <Content type={4} id={4} />
      </div>
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <Content type={5} id={5} />
        <Content type={1} id={6} />
      </div>
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <Content type={2} id={7} />
        <Content type={3} id={8} />
      </div>
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <Content type={4} id={9} />
        <Content type={5} id={10} />
      </div>
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <Content type={1} id={11} />
        <Content type={2} id={12} />
      </div>
    </div>
  );
}

export default StoreContents;
