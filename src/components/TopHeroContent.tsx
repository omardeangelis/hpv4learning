import React from "react";
//Material UI
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
//Context

//Hero Text and Image Component
const TopHeroContent = ({ fn }: { fn: () => any }) => {
  return (
    <Box>
      <Box>
        <Typography
          component='h1'
          fontWeight={600}
          sx={{
            fontSize: { xs: "34px", lg: "64px" },
            lineHeight: { xs: "39px", lg: "69px" },
          }}
        >
          <strong className='brand-text'>Professionisti</strong>
          <br />
          Non
          <br />
          Professori
        </Typography>
      </Box>
      <Box
        sx={{
          mt: { xs: "16px", lg: "24px" },
        }}
      >
        <Typography
          variant='h6'
          color='textSecondary'
          fontWeight={500}
          sx={{
            maxWidth: "55ch",
            lineHeight: 1.7,
          }}
        >
          Hpv 4 Learning è una piattaforma che seleziona i migliori corsi tenuti
          direttamente da{" "}
          <strong className='brand-text'>esperti e professionisti</strong> del
          settore, per rilanciare la tua carriera digitale.
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
