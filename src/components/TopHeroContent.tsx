import React from "react";
//Material UI
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useMediaQuery, useTheme } from "@mui/material";
//Context

//Hero Text and Image Component
const TopHeroContent = ({ fn }: { fn: () => any }) => {
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box>
      <Box>
        <Typography
          component='h1'
          fontWeight={600}
          sx={{
            fontSize: { xs: "48px", lg: "72px" },
            lineHeight: { xs: "56px", lg: "79px" },
            wordBreak: "break-all",
          }}
        >
          <strong className='brand-text'>Professionisti</strong> {!md && <br />}{" "}
          Non Professori
        </Typography>
      </Box>
      <Box
        sx={{
          mt: { xs: "16px", lg: "24px" },
        }}
      >
        <Typography
          color='grey.700'
          fontWeight={500}
          sx={{
            fontSize: { xs: "24px", lg: "24px" },
            maxWidth: "55ch",
            lineHeight: 1.7,
          }}
        >
          Siamo un team di giovani professionisti impegnata nel costruire una
          piattaforma
          <strong className='brand-text'>di videocorsi italiana</strong> per le
          nuove competenze digitali
        </Typography>
      </Box>
      <Box
        sx={{
          mt: { xs: "16px", lg: "24px" },
        }}
      >
        <Button
          variant='contained'
          color='primary'
          onClick={fn}
          sx={{
            height: "48px",
          }}
        >
          Scopri i corsi
        </Button>
      </Box>
    </Box>
  );
};

export default TopHeroContent;