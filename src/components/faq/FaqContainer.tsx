import React from "react";
import { Box, BoxProps } from "@mui/material";

const FaqContainer = ({ children, ...rest }: BoxProps) => {
  return <Box {...rest}>{children}</Box>;
};

export default FaqContainer;
