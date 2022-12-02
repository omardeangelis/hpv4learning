import React from "react"
//Material UI
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
//Context

//Hero Text and Image Component
const TopHeroContent = ({ fn }: { fn: () => void }) => {
  return (
    <Box>
      <Box>
        <Typography
          component="h1"
          fontWeight={600}
          sx={{
            fontSize: { xs: "44px", lg: "72px" },
            lineHeight: { xs: "52px", lg: "79px" },
            wordBreak: "break-all",
          }}
        >
          <strong className="brand-text">Professionisti</strong>
          <br />
          Non Professori
        </Typography>
      </Box>
      <Box
        sx={{
          mt: { xs: "16px", lg: "24px" },
        }}
      >
        <Typography
          color="grey.700"
          fontWeight={500}
          sx={{
            fontSize: { xs: "24px", lg: "24px" },
            maxWidth: "55ch",
            lineHeight: 1.7,
          }}
        >
          La piattafroma di videocorsi italiana per videomaker e sviluppatori
          web{" "}
        </Typography>
      </Box>
      <Box
        sx={{
          mt: { xs: "16px", lg: "24px" },
        }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={fn}
          sx={{
            height: "48px",
          }}
        >
          Scopri i corsi
        </Button>
      </Box>
    </Box>
  )
}

export default TopHeroContent
