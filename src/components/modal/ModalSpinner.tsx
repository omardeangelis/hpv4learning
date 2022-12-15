import React from "react"
import { keyframes } from "@emotion/react"
import styled from "@emotion/styled"

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`

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
`

const Wrapper = styled.div`
  width: 100px;
  height: 100px;
  color: var(--purple-400);
  animation: ${rotate} 1s linear infinite;
`

const StyledSpinner = styled.svg`
  width: 100%;
  height: 100%;
  & .path {
    stroke: currentColor;
    stroke-linecap: round;
    animation: ${dash} 1.5s ease-in-out infinite;
  }
`

export const Spinner: React.FC = ({ ...rest }) => (
  <Wrapper {...rest}>
    <StyledSpinner viewBox="0 0 50 50">
      <circle
        className="path"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth="2"
      />
    </StyledSpinner>
  </Wrapper>
)
