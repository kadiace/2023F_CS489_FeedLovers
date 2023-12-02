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
        <div
          style={{
            position: "relative",
            width: "50px",
            height: "50px",
          }}
        >
          <Content type={1} id={1} />
        </div>
        <div
          style={{
            position: "relative",
            width: "50px",
            height: "50px",
          }}
        >
          <Content type={2} id={2} />
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
          <Content type={3} id={3} />
        </div>
        <div
          style={{
            position: "relative",
            width: "50px",
            height: "50px",
          }}
        >
          <Content type={4} id={4} />
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
          <Content type={5} id={5} />
        </div>
        <div
          style={{
            position: "relative",
            width: "50px",
            height: "50px",
          }}
        >
          <Content type={1} id={6} />
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
          <Content type={2} id={7} />
        </div>
        <div
          style={{
            position: "relative",
            width: "50px",
            height: "50px",
          }}
        >
          <Content type={3} id={8} />
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
          <Content type={4} id={9} />
        </div>
        <div
          style={{
            position: "relative",
            width: "50px",
            height: "50px",
          }}
        >
          <Content type={5} id={10} />
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
          <Content type={1} id={11} />
        </div>
        <div
          style={{
            position: "relative",
            width: "50px",
            height: "50px",
          }}
        >
          <Content type={2} id={12} />
        </div>
      </div>
    </div>
  );
}

export default StoreContents;
