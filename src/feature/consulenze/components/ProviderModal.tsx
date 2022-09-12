import React from "react";
import { Box, Stack } from "@mui/system";
import {
  ModalHeader,
  ModalBackButton,
  ModalCloseButton,
  ModalTitle,
  ModalBody,
  // ModalTypography,
  ModalStepper,
  ModalElipse,
  ModalTab,
} from "../../../components/modal";
import { useResponsive } from "../../../hook/useResponsive";
import { Button, TextField, Typography } from "@mui/material";
import { useModalContext } from "../../../components/modal/context";
import { reservationModalLabels } from "../utils/constants";

type Props = {
  onBack: () => void;
  onContinue: () => void;
};

const ProviderModal = ({ onBack, onContinue }: Props) => {
  const [isGMail, setIsGMail] = React.useState<boolean>(true);
  const { isMobile } = useResponsive();
  const { onClose } = useModalContext() || {};
  return (
    <>
      <ModalHeader hasBorder>
        <ModalBackButton onBack={onBack} />
        {!isMobile ? (
          <ModalTitle>Scegli come prenotare la chiamata</ModalTitle>
        ) : null}
        {onClose ? <ModalCloseButton onClose={onClose} /> : null}
      </ModalHeader>
      <ModalBody>
        <ModalElipse>
          <Stack direction='column' spacing={2}>
            <ModalStepper labels={reservationModalLabels} />
            <Stack
              direction='row'
              justifyContent='center'
              spacing={4}
              pb={isMobile ? "35px" : "20px"}
            >
              <ModalTab isGMail={true} onClick={() => setIsGMail(true)} />
              <ModalTab isGMail={false} onClick={() => setIsGMail(false)} />
            </Stack>
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
              <>
                <Typography
                  fontSize='20px'
                  lineHeight='24px'
                  fontWeight={600}
                  textAlign='center'
                >
                  Scegli come prenotare la chiamata
                </Typography>

                <Typography
                  color='var(--gray--500)'
                  textAlign='center'
                  fontSize='16px'
                  fontWeight={400}
                  lineHeight='24px'
                  maxWidth='480px'
                >
                  Usa un account Google per creare un promemoria sul tuo
                  calendario o ricevi una mail dopo aver compilato il form.
                </Typography>
              </>
            ) : null}
            {!isMobile ? (
              <Typography
                color='var(--gray--500)'
                textAlign='center'
                fontSize='18px'
                fontWeight={400}
                lineHeight='27px'
                maxWidth='480px'
              >
                Scegli se usare Google Calendar o ricevere una mail
              </Typography>
            ) : null}
          </Stack>
          <Box mt={{ xs: "32px", lg: "40px" }}>
            <Stack spacing={2}>
              {!isGMail ? (
                // <form>
                <Stack direction={{ xs: "column", lg: "row" }} spacing={2}>
                  <TextField id='outlined-basic' label='Nome' required />
                  <TextField id='outlined-basic' label='Cognome' required />
                </Stack>
              ) : // </form>
              null}
              <TextField id='outlined-basic' label='Mail' required />
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

export default ProviderModal;
