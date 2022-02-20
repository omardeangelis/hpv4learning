import React from "react";
//Material UI
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
//Context
import styled from "@emotion/styled";

const CustomBox = styled(Box)`
  strong {
    color: var(--primary-main);
  }
`;

//Hero Text and Image Component
const TopHeroContent = ({ fn }: { fn: () => any }) => {
  return (
    <Box>
      <CustomBox>
        <Typography
          component='h1'
          fontWeight={600}
          sx={{
            fontSize: { xs: "34px", lg: "64px" },
            lineHeight: { xs: "39px", lg: "69px" },
          }}
        >
          <strong>Professionisti</strong>
          <br />
          Non
          <br />
          Professori
        </Typography>
      </CustomBox>
      <CustomBox
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
          direttamente da <strong>esperti e professionisti</strong> del settore,
          per rilanciare la tua carriera digitale.
        </Typography>
      </CustomBox>
      <CustomBox
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
      </CustomBox>
    </Box>
  );
};

export default TopHeroContent;
