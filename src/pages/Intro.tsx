import React from "react";
import styled, { keyframes } from "styled-components";

const dissolve = keyframes`
  0%{opacity: 0}
  50%{opacity: 1}
  100%{opacity: 0}
`;
const AnimatedParagraph = styled.p`
  animation: ${dissolve} 2s infinite;
  color: #ffffff;
`;

function Intro() {
  return (
    <div
      className="Main"
      style={{
        position: "absolute",
        backgroundColor: "black",
        width: "100%",
        height: "100%",
      }}
    >
      <AnimatedParagraph> Logo </AnimatedParagraph>
    </div>
  );
}

export default Intro;
