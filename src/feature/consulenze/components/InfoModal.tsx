import React from "react";
import { Box, Stack } from "@mui/system";
import {
  ModalHeader,
  ModalBackButton,
  ModalCloseButton,
  ModalTitle,
  ModalBody,
  ModalTypography,
  ModalStepper,
} from "../../../components/modal";
import { useResponsive } from "../../../hook/useResponsive";
import { Button, TextField, Typography } from "@mui/material";
import { useModalContext } from "../../../components/modal/context";
import { reservationModalLabels } from "../utils/constants";

type Props = {
  onBack: () => void;
  onContinue: () => void;
};

const InfoModal = ({ onBack, onContinue }: Props) => {
  const { isMobile } = useResponsive();
  const { onClose } = useModalContext() || {};
  return (
    <>
      <ModalHeader hasBorder>
        <ModalBackButton onBack={onBack} />
        {!isMobile ? <ModalTitle>Informazioni Aggiuntive</ModalTitle> : null}
        {onClose ? <ModalCloseButton onClose={onClose} /> : null}
      </ModalHeader>
      <ModalBody>
        <Box px='12px' mb={{ xs: "auto", lg: "100px" }}>
          <Box px={{ xs: "10px", lg: "50px" }} py='28px'>
            <ModalStepper labels={reservationModalLabels} />
          </Box>
          <Stack
            direction='column'
            spacing={2}
            alignItems='center'
            alignContent='center'
          >
            {isMobile ? (
              <>
                <Typography
                  fontSize='20px'
                  lineHeight='24px'
                  fontWeight={600}
                  textAlign='center'
                >
                  Dicci di più
                </Typography>
              </>
            ) : null}
            <ModalTypography maxWidth='480px'>
              Aggiungi link e informazioni che possano aiutarci a preparare la
              soluzione più adatta alla tua richiesta.
            </ModalTypography>
            <ModalTypography maxWidth='480px'>
              Questi campi sono facoltativi, nessuna informazione da voi
              lasciata sarà usata a scopi pubblicitari o per spammare promozioni
            </ModalTypography>
          </Stack>
          <Box mt={isMobile ? "38px" : "74px"}>
            <Stack direction='column' spacing={2}>
              <TextField
                id='outlined-basic'
                label='Professione'
                size={isMobile ? "small" : "medium"}
              />
              <TextField
                id='outlined-basic'
                label='Link ed ulteriori informazioni'
                sx={{
                  "& .MuiInputBase-root": {
                    height: 100,
                  },
                }}
              />
            </Stack>
          </Box>
        </Box>

        <Box
          px={{ xs: "12px", lg: "65px" }}
          mb={{ xs: "18px", lg: "22px" }}
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

export default InfoModal;
