import { ComponentState, MouseEventHandler, useState } from 'react';

function TextButton(props: {
  text: string;
  navigate: MouseEventHandler;
  color: string;
  hoverColor: string;
  clickColor: string;
}) {
  // extract
  const { text, navigate, color, hoverColor, clickColor } = props;

  // states
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
      role='presentation'
      onFocus={() => {}}
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
