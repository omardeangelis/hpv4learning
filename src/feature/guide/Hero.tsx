import React from "react"
import styled from "@emotion/styled"
import Typography from "@mui/material/Typography"
import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import { StaticImage } from "gatsby-plugin-image"

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
    height={[`508px`, `718px`]}
    justifyContent="center"
    alignItems="center"
    sx={{ backgroundColor: `#000` }}
  >
    <Stack
      width={[`397px`, `883px`]}
      height={[`194px`, `432px`]}
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap="24px"
      sx={{
        background: `radial-gradient(50% 50% at 50% 50%, rgba(255, 204, 204, 0.54) 0%, rgba(255, 56, 56, 0.24) 59.38%, rgba(255, 52, 52, 0) 100%)`,
      }}
    >
      <Typography
        fontSize={[`39px`, `72px`]}
        lineHeight={[`44px`, `72px`]}
        fontWeight={700}
        color="#fff"
      >
        {title && title}
      </Typography>
      <Typography
        fontSize={[`18px`, `24px`]}
        lineHeight={[`21px`, `36px`]}
        fontWeight={500}
        color="#fff"
        textAlign="center"
        maxWidth="80%"
      >
        {description}
      </Typography>
      <StyledBox>
        <StaticImage
          src="./images/arrow-back.png"
          alt="arrow-back"
          placeholder="tracedSVG"
        />
      </StyledBox>
    </Stack>
  </Stack>
)
