import React from "react"
// Material Ui
import Box from "@mui/material/Box"
// Gatsby
import styled from "@emotion/styled"
import { StaticImage } from "gatsby-plugin-image"
import Container from "@mui/system/Container"
import { Keyframes, keyframes } from "@emotion/react"

const fadeInFromBottom = keyframes`
  0% {
    opacity: 0;
    transform: translateY(150px);
  }
   50% {
    opacity: 1;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`

const fadeInFromTop = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-150px);
  }
   50% {
    opacity: 1;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`

const fadeInFromLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-150px);
  }
   50% {
    opacity: 1;
    transform: translateX(20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
`

const fadeInFromRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(150px);
  }
  50% {
    opacity: 1;
    transform: translateX(-20px);
  }
  100%{
    opacity: 1;
    transform: translateX(0px);
  }
`

const ImageBox = styled(Box)<{ anim?: Keyframes }>(
  ({ anim = fadeInFromBottom }) => ({
    // display: "none",
    position: `absolute`,
    animation: `${anim}`,
    animationDuration: `2s`,
    opacity: 0,
    // animationDirection: "alternate",
    animationFillMode: `forwards`,
    // animationIterationCount: "infinite",
    borderRadius: `50%`,
    "@media screen and (min-width: 992px)": {
      display: `block`,
    },
  })
)

const Hero = ({ children }: { children: React.ReactChild }) => (
  <Box
    position="relative"
    display="flex"
    justifyContent="center"
    alignItems="center"
    height={`calc(100vh - 72px)`}
  >
    <ImageBox
      anim={fadeInFromLeft}
      sx={{
        width: { xs: `135px`, sm: `160px`, xl: `220px` },
        height: { xs: `135px`, sm: `160px`, xl: `220px` },
        left: `9.86%`,
        top: { xs: `4%`, lg: `10%` },
        animationDelay: `0.3s`,
      }}
    >
      <StaticImage
        src="../../feature/home/images/css_round.png"
        alt="Ragazza che studia sviluppo web"
        placeholder="blurred"
      />
    </ImageBox>

    <ImageBox
      anim={fadeInFromBottom}
      sx={{
        width: { xs: `110px`, sm: `175px`, xl: `250px` },
        height: { xs: `110px`, sm: `175px`, xl: `250px` },
        left: { xs: `4%`, lg: `10.5%` },
        bottom: { xs: `7%`, lg: `10%` },
        animationDelay: `0.5s`,
      }}
    >
      <StaticImage
        src="../../feature/home/images/react_round.png"
        alt="Ragazza che studia Frontend"
        placeholder="blurred"
      />
    </ImageBox>

    <ImageBox
      anim={fadeInFromTop}
      sx={{
        width: { xs: `110px`, sm: `180px`, xl: `250px` },
        height: { xs: `110px`, sm: `180px`, xl: `250px` },
        right: `8%`,
        top: `10%`,
        animationDelay: `0.4s`,
      }}
    >
      <StaticImage
        src="../../feature/home/images/html_round.png"
        alt="Ragazza che studia sviluppo web"
        placeholder="blurred"
      />
    </ImageBox>

    <ImageBox
      anim={fadeInFromRight}
      sx={{
        width: { xs: `110px`, sm: `195px`, xl: `245px` },
        height: { xs: `110px`, sm: `195px`, xl: `245px` },
        right: `12%`,
        bottom: { xs: `3%`, lg: `12%` },
        animationDelay: `0.7s`,
      }}
    >
      <StaticImage
        src="../../feature/home/images/premier_round.png"
        alt="Ragazza che studia sviluppo web"
        placeholder="blurred"
      />
    </ImageBox>
    <Box width="100%">
      <Container maxWidth="lg">{children}</Container>
    </Box>
  </Box>
)

export default Hero
