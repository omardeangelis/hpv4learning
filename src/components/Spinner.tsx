import React from "react";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

interface Props {
  color?: string;
  width?: string;
  height?: string;
}

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const dash = keyframes`
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
`;

const Wrapper = styled.div<{ color?: string; width?: string; height?: string }>`
  width: ${(props) => (props.width ? props.width : "60px")};
  height: ${(props) => (props.height ? props.height : "60px")};
  color: ${(props) => (props.color ? props.color : "var(--gray-500)")};
  animation: ${rotate} 1s linear infinite;
`;

const StyledSpinner = styled.svg`
  width: 100%;
  height: 100%;
  & .path {
    stroke: currentColor;
    stroke-linecap: round;
    animation: ${dash} 1.5s ease-in-out infinite;
  }
`;

export const Spinner: React.FC<Props> = ({ color, width, height, ...rest }) => {
  return (
    <Wrapper color={color} width={width} height={height} {...rest}>
      <StyledSpinner viewBox='0 0 50 50'>
        <circle
          className='path'
          cx='25'
          cy='25'
          r='20'
          fill='none'
          strokeWidth='2'
        />
      </StyledSpinner>
    </Wrapper>
  );
};
