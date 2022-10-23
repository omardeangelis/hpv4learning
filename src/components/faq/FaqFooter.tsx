import React from "react";
import styled from "@emotion/styled";
import Box, { BoxProps } from "@mui/material/Box";

const StyledBox = styled(Box)`
  a {
    text-decoration: none;
    color: var(--green-300);
    &:hover {
      color: var(--green-hover);
    }
  }
`;

const FaqFooter = ({ children, ...rest }: BoxProps) => {
  return <StyledBox {...rest}>{children}</StyledBox>;
};

export default FaqFooter;
