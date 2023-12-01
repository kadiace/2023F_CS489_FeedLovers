import { ComponentState, MouseEventHandler, useState } from "react";

function TextButton({
  text,
  navigate,
  color,
  hoverColor,
  clickColor,
}: {
  text: string;
  navigate: MouseEventHandler;
  color: string;
  hoverColor: string;
  clickColor: string;
}) {
  const [fontColor, setFontColor]: ComponentState = useState(color);
  const changeColorMouseOver = () => {
    setFontColor(hoverColor);
  };
  const changeColorMouseLeave = () => {
    setFontColor(color);
  };
  const changeColorClick = () => {
    setFontColor(clickColor);
  };
  return (
    <p
      onMouseOver={changeColorMouseOver}
      onMouseLeave={changeColorMouseLeave}
      onMouseUp={navigate}
      onMouseDown={changeColorClick}
      style={{ color: fontColor }}
    >
      {text}
    </p>
  );
}

export default TextButton;
