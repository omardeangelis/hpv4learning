import Box, { BoxProps } from "@mui/material/Box"
import React from "react"
import styled from "@emotion/styled"

const StyledBox = styled(Box)`
  border-radius: 16px;
  width: 100%;
  overflow: hidden;
  border: 1px solid;
  border-color: var(--purple-200);
  @media screen and (min-width: 768px) {
    border-radius: 24px;
  }
`

const CourseContainer = ({
  children,
  ...rest
}: { children: React.ReactChild } & BoxProps) => (
  <StyledBox
    {...rest}
    sx={{
      maxWidth: { xs: `unset`, lg: `402px` },
      px: { xs: `12px`, lg: `44px` },
      py: { xs: `16px`, lg: `44px` },
    }}
  >
    {children}
  </StyledBox>
)

export default CourseContainer
