import { Box, BoxProps } from "@mui/material";
import React from "react";
import styled from "@emotion/styled";

const CustomStack = styled.div`
  & > *:not(:first-of-type) {
    margin-top: 24px;
  }

  @media screen and (min-width: 767px) {
    & > *:not(:first-of-type) {
      margin-top: 34px;
    }
  }
`;

const FaqContent = ({ children, ...rest }: BoxProps) => {
  return (
    <Box {...rest}>
      <CustomStack>{children}</CustomStack>
    </Box>
  );
};

export default FaqContent;
