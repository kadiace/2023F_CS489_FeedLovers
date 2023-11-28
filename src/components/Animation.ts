import styled, { keyframes } from "styled-components";

const dissolve = keyframes`
  0%{opacity: 0}
  50%{opacity: 1}
  100%{opacity: 0}
`;

export const IntroAnimation = styled.div<{
  path: string;
  delay: string;
}>`
  width: 600px;
  height: 600px;
  background-image: url(${(props) => props.path});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  opacity: 0;
  animation: ${dissolve};
  animation-delay: ${(props) => props.delay};
  animation-duration: 10s;
  animation-iteration-count: 1;
  animation-fill-mode: forward;
`;
