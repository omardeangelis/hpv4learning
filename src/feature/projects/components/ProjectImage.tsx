import React from "react";
import Box, { BoxProps } from "@mui/system/Box";

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
