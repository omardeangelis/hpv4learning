// import { Box, Stack, StackProps } from "@mui/system";
import Stack from "@mui/material/Stack/"
import Box from "@mui/system/Box"
import { StackProps } from "@mui/material/Stack/"
import React from "react"

type Props = {
  variant: "circular" | "square" | "rounded"
  children: React.ReactChild
  img: React.ReactElement
}

const CardHeader = ({ img, children, ...rest }: Props & StackProps) => (
  <Stack direction="row" justifyItems="flex-start" {...rest}>
    {img}
    <Box>{children}</Box>
  </Stack>
)

export default CardHeader
