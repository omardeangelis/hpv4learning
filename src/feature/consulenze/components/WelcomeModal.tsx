import React from "react";
import { Box, Stack } from "@mui/system";
import {
  ModalHeader,
  ModalBackButton,
  ModalCloseButton,
  ModalTitle,
  ModalBody,
  ModalElipse,
} from "../../../components/modal";
import { useResponsive } from "../../../hook/useResponsive";
import { StaticImage } from "gatsby-plugin-image";
import { Button, Typography } from "@mui/material";

type Props = {
  onBack: () => void;
  onClose: () => void;
  onContinue: () => void;
};

const WelcomeModal = ({ onBack, onClose, onContinue }: Props) => {
  const { isMobile } = useResponsive();
  return (
    <>
      <ModalHeader hasBorder>
        <ModalBackButton onBack={onBack} />
        {!isMobile ? <ModalTitle>Prenota una videochiamata</ModalTitle> : null}
        <ModalCloseButton onClose={onClose} />
      </ModalHeader>
      <ModalBody width='100%'>
        <ModalElipse>
          <Box maxWidth='184px'>
            <StaticImage
              src='../../../components/modal/images/calendar.png'
              alt='Calendario'
              placeholder='tracedSVG'
            />
          </Box>
        </ModalElipse>
        <Box px='12px' mb={{ xs: "auto", lg: "120px" }}>
          <Stack
            direction='column'
            spacing={2}
            alignItems='center'
            alignContent='center'
          >
            {isMobile ? (
              <ModalTitle>Prenota una videochiamata</ModalTitle>
            ) : null}
            <Typography
              color='var(--gray--500)'
              textAlign='center'
              fontSize='16px'
              fontWeight={400}
              lineHeight='24px'
              maxWidth='480px'
            >
              Il mondo va veloce e noi anche. Lasciamo da parte i convenevoli e
              la burocrazia e mettiamoci direttamente in contatto.
            </Typography>
            {isMobile ? (
              <Typography
                color='var(--gray--500)'
                textAlign='center'
                fontSize='16px'
                fontWeight={400}
                lineHeight='24px'
                maxWidth='480px'
              >
                Nelle prossime schermate potrai prenotare una videochiamata che
                ti verrà subito confermata scegliendo tra le date disponibili.
              </Typography>
            ) : null}
          </Stack>
        </Box>
        <Box
          px={{ xs: "12px", lg: "65px" }}
          mb='18px'
          sx={{ position: "absolute", bottom: "0", width: "100%" }}
        >
          <Button
            onClick={onContinue}
            variant='contained'
            sx={{
              width: "100%",
            }}
          >
            Avanti
          </Button>
        </Box>
      </ModalBody>
    </>
  );
};

export default WelcomeModal;
