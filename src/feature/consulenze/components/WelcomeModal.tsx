import React from "react";
import { Box, Container, Stack } from "@mui/system";
import {
  ModalHeader,
  ModalBackButton,
  ModalCloseButton,
  ModalTitle,
  ModalBody,
  ModalElipse,
  ModalTypography,
  ModalStepper,
  ModalFooter,
} from "../../../components/modal";
import { reservationModalLabels } from "../utils/constants";
import { useResponsive } from "../../../hook/useResponsive";
import { StaticImage } from "gatsby-plugin-image";
import { Button, Typography } from "@mui/material";
import { useModalContext } from "../../../components/modal/context";

type Props = {
  onContinue: () => void;
};

const WelcomeModal = ({ onContinue }: Props) => {
  const { isMobile } = useResponsive();
  const { onClose } = useModalContext();

  return (
    <>
      <ModalHeader hasborder>
        {onClose ? <ModalBackButton onBack={onClose} /> : null}
        {!isMobile ? <ModalTitle>Prenota una videochiamata</ModalTitle> : null}
        {onClose ? <ModalCloseButton onClose={onClose} /> : null}
      </ModalHeader>
      <ModalBody width='100%'>
        <ModalElipse>
          <Stack
            direction='column'
            spacing={2}
            alignItems='center'
            alignContent='center'
          >
            <Box
              px={{ xs: "10px", lg: "70px" }}
              width={{ xs: "400px", lg: "600px" }}
            >
              <ModalStepper labels={reservationModalLabels} />
            </Box>
            <Box maxWidth='184px'>
              <StaticImage
                src='../../../components/modal/images/calendar.png'
                alt='Calendario'
                placeholder='tracedSVG'
              />
            </Box>
          </Stack>
        </ModalElipse>
        <Box px='12px' mb={{ xs: "auto", lg: "120px" }}>
          <Stack
            direction='column'
            spacing={2}
            alignItems='center'
            alignContent='center'
          >
            {isMobile ? (
              <Typography
                fontSize='20px'
                lineHeight='24px'
                fontWeight={600}
                textAlign='center'
              >
                Prenota una chiamata
              </Typography>
            ) : null}
            <ModalTypography
              color='var(--gray--500)'
              textAlign='center'
              fontSize='16px'
              fontWeight={400}
              lineHeight='24px'
              maxWidth='480px'
            >
              Il mondo va veloce e noi anche. Lasciamo da parte i convenevoli e
              la burocrazia e mettiamoci direttamente in contatto.
            </ModalTypography>
            {isMobile ? (
              <ModalTypography
                color='var(--gray--500)'
                textAlign='center'
                fontSize='16px'
                fontWeight={400}
                lineHeight='24px'
                maxWidth='480px'
              >
                Nelle prossime schermate potrai prenotare una videochiamata che
                ti verrà subito confermata scegliendo tra le date disponibili.
              </ModalTypography>
            ) : null}
          </Stack>
        </Box>
        <ModalFooter>
          <Container>
            <Button
              onClick={onContinue}
              variant='contained'
              sx={{
                width: "100%",
              }}
            >
              Avanti
            </Button>
          </Container>
        </ModalFooter>
      </ModalBody>
    </>
  );
};

export default WelcomeModal;
