import React from "react"
import Box, { BoxProps } from "@mui/system/Box"

export const ProjectImage = ({ children, ...rest }: BoxProps) => (
  <Box
    className="img-box"
    {...rest}
    style={{
      transform: `transalateZ(0)`,
    }}
  >
    {children}
  </Box>
)
