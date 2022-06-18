import { Box, BoxProps } from "@mui/system";
import React from "react";

const ProjectImage = ({ children, ...rest }: BoxProps) => {
  return (
    <Box className='img-box' {...rest}>
      {children}
    </Box>
  );
};

export default ProjectImage;
