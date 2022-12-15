import React from "react"
import Box, { BoxProps } from "@mui/material/Box"
import Typography from "@mui/material/Typography"

const FaqTitle = ({ text, ...rest }: BoxProps & { text: string }) => (
  <Box {...rest}>
    <Typography
      fontWeight={600}
      sx={{
        lineHeight: { xs: `29px`, lg: `56px` },
        fontSize: { xs: `24px`, lg: `48px` },
      }}
    >
      {text}
    </Typography>
  </Box>
)

export default FaqTitle
