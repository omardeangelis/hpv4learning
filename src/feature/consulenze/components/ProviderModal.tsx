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
  ModalElipse,
  ModalTab,
} from "../../../components/modal";
import { useResponsive } from "../../../hook/useResponsive";
import { Button, TextField, Typography } from "@mui/material";
import { useModalContext } from "../../../components/modal/context";
import { reservationModalLabels } from "../utils/constants";
import { ProviderModalProvider } from "../context/providerModalContext";

type Props = {
  onBack: () => void;
  onContinue: () => void;
};

type Provider = "gmail" | "manual";

const ProviderModal = ({ onBack, onContinue }: Props) => {
  const [provider, setProvider] = React.useState<Provider>("gmail");
  const { isMobile } = useResponsive();
  const { onClose } = useModalContext() || {};

  const handleOnClick = React.useCallback(
    (value: Provider) => {
      setProvider(value);
    },
    [setProvider]
  );

  return (
    <ProviderModalProvider
      value={{
        provider,
      }}
    >
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
              <ModalTab isGMail={true} onClick={() => handleOnClick("gmail")} />
              <ModalTab
                isGMail={false}
                onClick={() => handleOnClick("manual")}
              />
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

                <ModalTypography maxWidth='480px'>
                  Usa un account Google per creare un promemoria sul tuo
                  calendario o ricevi una mail dopo aver compilato il form.
                </ModalTypography>
              </>
            ) : null}
            {!isMobile ? (
              <ModalTypography maxWidth='480px'>
                Scegli se usare Google Calendar o ricevere una mail
              </ModalTypography>
            ) : null}
          </Stack>
          <Box mt={{ xs: "32px", lg: "40px" }}>
            <Stack spacing={2}>
              {provider === "manual" ? (
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
    </ProviderModalProvider>
  );
};

export default ProviderModal;
