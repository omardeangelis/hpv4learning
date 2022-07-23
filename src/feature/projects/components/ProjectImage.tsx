import { Box, BoxProps } from "@mui/system";
import React from "react";

export const ProjectImage = ({ children, ...rest }: BoxProps) => {
  return (
    <Box
      className='img-box'
      {...rest}
      style={{
        transform: "transalateZ(0)",
      }}
    >
      {children}
    </Box>
  );
};
