import React from "react"
import Box from "@mui/material/Box"
import { BoxProps } from "@mui/material"

export const ItemImage = ({ children, ...rest }: BoxProps) => (
  <Box
    maxWidth={{ xs: `73px`, lg: `247px` }}
    width="100%"
    height={{ xs: `41px`, lg: `140px` }}
    borderRadius={{ xs: `4px`, lg: `8px 0 0 8px` }}
    overflow="hidden"
    style={{
      transform: `translateZ(0)`,
    }}
    {...rest}
  >
    {children}
  </Box>
)
