import React from "react"
import styled from "@emotion/styled"
import Typography from "@mui/material/Typography"
import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"

type Props = {
  title: string | null
  description: string | null
}

const StyledBox = styled(Box)`
  width: 12px;
  height: 7px;
  animation: bounce2 2s ease infinite;
  @keyframes bounce2 {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-30px);
    }
    60% {
      transform: translateY(-15px);
    }
  }
  margin-top: 20px;
  @media screen and (min-width: 1024px) {
    width: 23px;
    height: 13px;
  }
`

export const Hero = ({ title, description }: Props) => (
  <Stack
    width="100%"
    height="100vh"
    justifyContent="center"
    alignItems="center"
    sx={{ backgroundColor: `#000` }}
  >
    <Stack
      maxWidth={{ xs: `397px`, lg: `883px` }}
      width="100%"
      height={{ xs: `194px`, lg: `432px` }}
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        background: `radial-gradient(50% 50% at 50% 50%, rgba(255, 204, 204, 0.54) 0%, rgba(255, 56, 56, 0.24) 59.38%, rgba(255, 52, 52, 0) 100%)`,
      }}
    >
      <Typography
        component="h1"
        fontSize={{ xs: `39px`, lg: `72px` }}
        lineHeight={{ xs: `44px`, lg: `72px` }}
        fontWeight={700}
        color="#fff"
        textAlign="center"
        maxWidth="80%"
        mb="24px"
      >
        {title && title}
      </Typography>
      <Typography
        component="h2"
        fontSize={{ xs: `18px`, lg: `24px` }}
        lineHeight={{ xs: `21px`, lg: `36px` }}
        fontWeight={500}
        color="#fff"
        textAlign="center"
        maxWidth="80%"
        mb="24px"
      >
        {description}
      </Typography>
      <StyledBox>
        <KeyboardArrowDownIcon style={{ color: `white` }} />
      </StyledBox>
    </Stack>
  </Stack>
)
