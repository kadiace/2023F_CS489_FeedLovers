import styled, { keyframes } from 'styled-components';

const dissolve = keyframes`
  0%{opacity: 0}
  50%{opacity: 1}
  100%{opacity: 0}
`;

const dissolve2 = keyframes`
0%{opacity: 0}
10%{opacity: 1}
100%{opacity: 1}
`;

const shrink = keyframes`
  0%{width: 600px}
  100%{width: 0px}
`;

export const IntroAnimation = styled.div<{
  path: string;
  delay: string;
  duration: string;
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
  animation-duration: ${(props) => props.duration};
  animation-iteration-count: 1;
  animation-fill-mode: both;
`;

export const EndingGifAnimation = styled.div<{
  path: string;
  delay: string;
  duration: string;
}>`
  width: 1360px;
  height: 765px;
  background-image: url(${(props) => props.path});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  opacity: 0;
  animation: ${dissolve2};
  animation-delay: ${(props) => props.delay};
  animation-duration: ${(props) => props.duration};
  animation-iteration-count: 1;
  animation-fill-mode: both;
`;

export const EndingAnimation = styled.div<{
  delay: string;
  duration: string;
}>`
  width: 600px;
  height: 100%;
  animation: ${shrink};
  animation-delay: ${(props) => props.delay};
  animation-duration: ${(props) => props.duration};
  animation-iteration-count: 1;
  animation-fill-mode: both;
`;
