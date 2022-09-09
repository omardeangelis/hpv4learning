import React from "react";
import { useModalContext } from "../../../components/modal/context";
import { Box, Stack } from "@mui/system";
import { StaticImage } from "gatsby-plugin-image";
import { Typography, useMediaQuery, useTheme } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import useHasMounted from "../../../hook/useHasMounted";
import { BorderBox } from "../../../components/layout";
import { calendar_v3 } from "googleapis";
import { getDataFromCalendar } from "../utils/helpers";

type NonNullableLink = NonNullable<calendar_v3.Schema$Event["hangoutLink"]>;
type NonNullableStart = NonNullable<calendar_v3.Schema$Event["start"]>;
type Props = {
  start: NonNullableStart;
  hangoutLink: NonNullableLink;
};

const SuccessModal = React.memo(({ start, hangoutLink }: Props) => {
  const dates = getDataFromCalendar(start);
  const { onClose } = useModalContext() || {};
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [copy, setCopy] = React.useState<boolean>(false);
  const hasMounted = useHasMounted();
  const handleCopy = React.useCallback(async () => {
    if (!hasMounted) return;
    if (!hangoutLink) return;
    navigator.clipboard.writeText(hangoutLink).then(() => setCopy(true));
  }, [hasMounted]);

  React.useEffect(() => {
    const timer = setTimeout(() => onClose, 7000);
    return () => clearTimeout(timer);
  }, [onClose]);

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
      <Box
        sx={{
          py: { xs: "60px", lg: "38px" },
          backgroundColor: "purple.A100",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Box maxWidth='184px'>
          <StaticImage
            src='../../../components/modal/images/success.png'
            alt='Completato con successo'
            placeholder='tracedSVG'
          />
        </Box>
      </Box>
      <Box>
        {isMobile ? (
          <Typography
            fontSize='20px'
            lineHeight='24px'
            mt='24px'
            fontWeight={600}
            textAlign='center'
          >
            Appuntamento Fissato
          </Typography>
        ) : null}
        <Box maxWidth='500px'>
          {dates ? (
            <Typography
              mt='24px'
              color='grey.600'
              textAlign='center'
              sx={{
                xs: "16px",
                lg: "18px",
              }}
            >
              {`Il tuo appuntamento è stato fissato per il giorno ${dates.day} alle ${dates.time}`}
              . <br />
              Copia il link e condividilo con i tuoi colleghi.
            </Typography>
          ) : null}
        </Box>
      </Box>
      <BorderBox
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
            {hangoutLink}
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
      <Typography
        mt='18px'
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
    </>
  );
});

export default SuccessModal;
