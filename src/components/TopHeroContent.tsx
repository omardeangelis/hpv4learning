import React from "react"
// Material UI
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import styled from "@emotion/styled"

// Context

const CustomButton = styled(Button)({
  maxWidth: `260px`,
  height: `60px`,
  width: `100%`,
  borderRadius: `100px 10px 125px 100px`,
  fontSize: `18px`,
  textTransform: `uppercase`,
})

// Hero Text and Image Component
const TopHeroContent = ({ fn }: { fn: () => void }) => (
  <Box>
    <Box
      maxWidth="862px"
      width="100%"
      sx={{
        mx: `auto`,
      }}
    >
      <Typography
        component="h1"
        fontWeight={700}
        sx={{
          fontSize: { xs: `44px`, lg: `72px` },
          lineHeight: { xs: `52px`, lg: `79px` },
          textAlign: `center`,
        }}
      >
        <strong className="brand-text">Professionisti</strong>
        <br />
        Non Professori
      </Typography>
    </Box>
    <Box
      maxWidth="562px"
      sx={{
        mt: { xs: `24px`, lg: `34px` },
        mx: `auto`,
      }}
    >
      <Typography
        color="grey.700"
        textAlign="center"
        fontWeight={500}
        sx={{
          fontSize: { xs: `24px`, lg: `24px` },
          maxWidth: `55ch`,
          lineHeight: 1.7,
        }}
      >
        La piattaforma di videocorsi italiana per videomaker e sviluppatori web
        {` `}
      </Typography>
    </Box>
    <Box
      sx={{
        mt: { xs: `24px`, lg: `34px` },
        display: `flex`,
        justifyContent: `center`,
      }}
    >
      <CustomButton
        variant="contained"
        color="primary"
        onClick={fn}
        sx={{
          textTransform: `capitalize`,
        }}
      >
        Scopri i corsi
      </CustomButton>
    </Box>
  </Box>
)

export default TopHeroContent
