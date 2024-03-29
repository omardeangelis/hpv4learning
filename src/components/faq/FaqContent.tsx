import React from "react"
import styled from "@emotion/styled"
import Box, { BoxProps } from "@mui/material/Box"

const CustomStack = styled.div`
  & > *:not(:first-of-type) {
    margin-top: 24px;
  }

  @media screen and (min-width: 767px) {
    & > *:not(:first-of-type) {
      margin-top: 34px;
    }
  }
`

const FaqContent = ({ children, ...rest }: BoxProps) => (
  <Box {...rest}>
    <CustomStack>{children}</CustomStack>
  </Box>
)

export default FaqContent
