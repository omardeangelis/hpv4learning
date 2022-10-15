import React from "react";
import { useModalContext } from "../../../components/modal/context";
import { Box, Container, Stack } from "@mui/system";
import { StaticImage } from "gatsby-plugin-image";
import { Typography } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import useHasMounted from "../../../hook/useHasMounted";
import { BorderBox } from "../../../components/layout";
import { getDataFromCalendar } from "../utils/helpers";
import {
  ModalBackButton,
  ModalBody,
  ModalCloseButton,
  ModalElipse,
  ModalHeader,
  ModalTitle,
} from "../../../components/modal";
import { useResponsive } from "../../../hook/useResponsive";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

const SuccessModal = React.memo(() => {
  const { successMessage } = useSelector(
    (store: RootState) => store.consulenza,
  );
  const dates = React.useMemo(() => {
    if (successMessage?.date) return getDataFromCalendar(successMessage.date);
  }, [successMessage?.date]);
  const { onClose } = useModalContext() || {};
  const { isMobile } = useResponsive();
  const [copy, setCopy] = React.useState<boolean>(false);
  const hasMounted = useHasMounted();
  const handleCopy = React.useCallback(async () => {
    if (!hasMounted) return;
    if (!successMessage?.hangoutLink) return;
    navigator.clipboard
      .writeText(successMessage?.hangoutLink)
      .then(() => setCopy(true));
  }, [hasMounted, successMessage?.hangoutLink]);

  React.useEffect(() => {
    if (copy) {
      const timer = setTimeout(() => {
        setCopy(false);
        return () => clearTimeout(timer);
      }, 3000);
    }
  }, [copy]);
  return (
    <>
      <ModalHeader hasborder>
        <ModalBackButton onBack={() => null} />
        {!isMobile ? <ModalTitle>Appuntamento Fissato</ModalTitle> : null}
        {onClose ? <ModalCloseButton onClose={onClose} /> : null}
      </ModalHeader>
      <ModalElipse>
        <Box maxWidth='184px' mb='38px'>
          <StaticImage
            src='../../../components/modal/images/success.png'
            alt='Completato con successo'
            placeholder='tracedSVG'
          />
        </Box>
      </ModalElipse>
      <ModalBody>
        <Container maxWidth={isMobile ? "sm" : "lg"}>
          <Box mx='auto'>
            {isMobile ? (
              <Typography
                fontSize='20px'
                lineHeight='24px'
                fontWeight={600}
                textAlign='center'
              >
                Appuntamento Fissato
              </Typography>
            ) : null}
            <Box maxWidth='500px' mx='auto'>
              {dates ? (
                <Typography
                  mt={isMobile ? "24px" : "0px"}
                  color='grey.600'
                  textAlign='center'
                  sx={{
                    fontSize: {
                      xs: "16px",
                      lg: "18px",
                    },
                    lineHeight: {
                      xs: "24px",
                      lg: "27px",
                    },
                  }}
                >
                  {`Il tuo appuntamento è stato fissato per il giorno ${dates.day} alle ${dates.time}`}
                  . <br />
                  Copia il link e condividilo con i tuoi colleghi.
                </Typography>
              ) : null}
            </Box>
          </Box>
          {successMessage?.hangoutLink ? (
            <>
              <BorderBox
                mx='auto'
                mt='24px'
                maxWidth='360px'
                width='100%'
                onClick={handleCopy}
                sx={{
                  cursor: "pointer",
                  borderRadius: "8px",
                  background: "var(--gray-200)",
                  px: "8px",
                  ":hover": {
                    ".icon-box": {
                      color: "var(--gray-700)",
                    },
                  },
                }}
              >
                <Stack
                  flexDirection='row'
                  alignItems='center'
                  height='72px'
                  justifyContent='space-between'
                >
                  <Typography fontSize='14px' color='gray.600'>
                    {successMessage.hangoutLink}
                  </Typography>
                  <ContentCopyIcon
                    className='icon-box'
                    sx={{
                      color: "gray.500",
                    }}
                  />
                </Stack>
              </BorderBox>
              {copy ? (
                <Box height='12px'>
                  <Typography fontSize='12px'>Copiato negli appunti</Typography>
                </Box>
              ) : (
                <Box height='12px' width='100%' />
              )}
            </>
          ) : null}
        </Container>

        <Container>
          <Typography
            mt='18px'
            mb='8px'
            fontSize='12px'
            sx={{
              alignSelf: "flex-start",
            }}
          >
            Per qualsiasi problema rivolgersi alla mail <br />
            <a
              className='brand-text'
              href='mailto:hpv4learning@hpvfilm.it'
              title='Mail per il supporto'
              rel='nofollow'
            >
              hpv4learning@hpvfilm.it
            </a>
          </Typography>
        </Container>
      </ModalBody>
    </>
  );
});

export default SuccessModal;
