import React, { useEffect } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Box, Container } from "@mui/system";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { RoundedButton } from "../../../components/layout";
import { useConsulenzeContext } from "../context";
import useHasMounted from "../../../hook/useHasMounted";
import VideoCallIcon from "@mui/icons-material/VideoCall";

const StyledBox = styled(Box)({
  backgroundImage:
    "linear-gradient(246.66deg, #E7A7FF 0%, #8769FE 51.56%, #341268 95.31%)",
  position: "relative",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  ".float-icon": {
    display: "none",
  },
  "#placeholder-cta-btn": {
    display: "none",
  },
  ".start-float": {
    position: "fixed",
    zIndex: 3,
    bottom: "20px",
    right: "20px",
    ".float-icon": {
      display: "block !important",
    },
    ".float-text": {
      display: "none",
    },
  },
});

export const Hero = () => {
  const { openModal } = useConsulenzeContext() || {};
  const ref = React.useRef<HTMLDivElement>();
  const hasMounted = useHasMounted();
  const buttonElement = React.useMemo(() => {
    if (hasMounted) {
      return document.querySelector("#main-cta-btn");
    }
  }, [hasMounted]);
  const placeholderBtn = React.useMemo(() => {
    if (hasMounted) {
      return document.querySelector(
        "#placeholder-cta-btn",
      ) as HTMLButtonElement;
    }
  }, [hasMounted]);
  const [animationCompleted, setAnimationCompleted] = React.useState(false);

  const handleButtonAnimation = React.useCallback(() => {
    if (!hasMounted) return;
    const windowY = window.innerHeight;
    const { top, bottom } = ref.current?.getBoundingClientRect() || {};
    if (!buttonElement || !placeholderBtn) return;

    if (!animationCompleted) {
      if (top && top <= windowY - window.screen.height) {
        buttonElement.classList.remove("unfloat-animation");
        buttonElement.classList.add("start-float");
        buttonElement.classList.add("float-animation");
        placeholderBtn.style.display = "block";
        setTimeout(() => setAnimationCompleted(true), 750);
      }
    } else {
      if (bottom && top && bottom > windowY - window.screen.height) {
        placeholderBtn.style.display = "none";

        buttonElement.classList.remove("start-float");
        buttonElement.classList.remove("float-animation");
        buttonElement.classList.add("unfloat-animation");

        setTimeout(() => setAnimationCompleted(false), 750);
      }
    }
  }, [
    hasMounted,
    buttonElement,
    placeholderBtn,
    buttonElement?.classList,
    animationCompleted,
    ref.current?.getBoundingClientRect(),
    ref,
  ]);

  useEffect(() => {
    if (hasMounted) {
      window.addEventListener("scroll", handleButtonAnimation);
      return () => window.removeEventListener("scroll", handleButtonAnimation);
    }
  }, [hasMounted, handleButtonAnimation]);

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
          placeholder='tracedSVG'
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
          placeholder='tracedSVG'
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
          placeholder='tracedSVG'
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
          placeholder='tracedSVG'
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
              ref={ref}
              sx={{
                mt: { xs: "24px", lg: "34px" },
              }}
              display='flex'
              justifyContent='center'
            >
              <RoundedButton
                id='placeholder-cta-btn'
                sx={{
                  background: "#fff",
                  color: "purple.400",
                  transition: "background 200ms ease",
                  height: {
                    xs: "56px",
                    lg: "64px",
                    opacity: "0",
                  },
                }}
              >
                Fissa una chiamata
              </RoundedButton>
              <RoundedButton
                id='main-cta-btn'
                variant='contained'
                size='large'
                color='secondary'
                onClick={openModal}
                sx={{
                  background: "#fff",
                  color: "purple.400",
                  transition: "background 200ms ease",
                  height: {
                    xs: "56px",
                    lg: "64px",
                  },
                }}
              >
                <span className='float-text'>Fissa una chiamata</span>
                <VideoCallIcon
                  className='float-icon'
                  sx={{
                    fontSize: { xs: "24px", lg: "36px" },
                    fill: "#fff",
                  }}
                />
              </RoundedButton>
            </Box>
          </Box>
        </Container>
      </Box>
    </StyledBox>
  );
};
