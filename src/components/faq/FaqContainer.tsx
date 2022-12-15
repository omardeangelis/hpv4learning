import React from "react"
import Box, { BoxProps } from "@mui/material/Box"

const FaqContainer = ({ children, ...rest }: BoxProps) => (
  <Box {...rest}>{children}</Box>
)

export default FaqContainer
