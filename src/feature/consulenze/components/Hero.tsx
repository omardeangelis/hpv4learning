import React from "react";
import { navigate } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Box, Container } from "@mui/system";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { RoundedButton } from "../../../components/layout";

const StyledBox = styled(Box)({
  backgroundImage:
    "linear-gradient(246.66deg, #E7A7FF 0%, #8769FE 51.56%, #341268 95.31%)",
  position: "relative",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const Hero = () => {
  const openModal = React.useCallback(
    () => navigate("/consulenze/prenota/"),
    [],
  );

  return (
    <StyledBox>
      <Box
        position='absolute'
        top='0px'
        bottom='0px'
        left='0px'
        right='0px'
        width='100%'
        sx={{
          display: { xs: "none", lg: "block" },
        }}
      >
        <StaticImage
          src='../images/desktop-hero-layer.png'
          alt='Scegli il sito su misura per te'
        />
      </Box>

      <Box
        position='absolute'
        top='0px'
        bottom='0px'
        left='0px'
        right='0px'
        width='100%'
        sx={{
          display: { xs: "block", lg: "none" },
        }}
      >
        <StaticImage
          src='../images/small-overlay.png'
          alt='Scegli il sito su misura per te'
        />
      </Box>
      <Box
        position='absolute'
        left='0px'
        right='0px'
        width='100%'
        sx={{
          bottom: { xs: "0px", md: "-50px" },
        }}
      >
        <StaticImage
          src='../images/bottom-hero.png'
          alt='Guadagna Grazie ad un Sito performante'
        />
      </Box>

      <Box
        position='absolute'
        top='50%'
        right='27px'
        maxWidth='321px'
        sx={{
          display: { xs: "none", xl: "block" },
          transform: "translateY(-50%)",
        }}
      >
        <StaticImage
          src='../images/mongolfiera.png'
          alt='Ottieni clienti grazie ad un sito web'
        />
      </Box>
      <Box display='flex' alignItems='center' justifyContent='center'>
        <Container>
          <Box maxWidth='756px'>
            <Typography
              sx={{
                fontSize: { xs: "44px", lg: "64px" },
                lineHeight: { xs: "49px", lg: "64px" },
                fontWeight: 600,
                color: "white",
              }}
              component='h1'
              textAlign='center'
            >
              Realizza il tuo sito web
            </Typography>
            <Box
              sx={{
                mt: { xs: "16px", lg: "24px" },
              }}
            >
              <Typography
                textAlign='center'
                sx={{
                  fontSize: { xs: "18px", lg: "24px" },
                  lineHeight: { xs: "27px", lg: "36px" },
                  fontWeight: 400,
                  color: "white",
                }}
                component='p'
              >
                Fissa una chiamata per studiare con noi la miglior soluzione e
                sviluppare un preventivo misurato sulle tue esigenze{" "}
              </Typography>
            </Box>
            <Box
              sx={{
                mt: { xs: "24px", lg: "34px" },
              }}
              display='flex'
              justifyContent='center'
            >
              <RoundedButton
                variant='contained'
                size='large'
                color='secondary'
                onClick={openModal}
                sx={{
                  background: "#fff",
                  color: "purple.400",
                  height: {
                    xs: "56px",
                    lg: "64px",
                  },
                }}
              >
                Fissa una chiamata
              </RoundedButton>
            </Box>
          </Box>
        </Container>
      </Box>
    </StyledBox>
  );
};
