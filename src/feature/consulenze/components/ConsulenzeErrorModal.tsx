import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";
import Container from "@mui/system/Container";
import { RoundedButton } from "../../../components/layout";
import { ModalBody, ModalFooter } from "../../../components/modal";
import ErrorModal from "../../../components/modal/ErrorModal";
import useHasMounted from "../../../hook/useHasMounted";
import { useResponsive } from "../../../hook/useResponsive";

type Props = {
  onContinue: () => unknown;
};

export const ConsulenzeErrorModal = ({ onContinue }: Props) => {
  const { isMobile } = useResponsive();
  const hasMounted = useHasMounted();
  const errorMessage = React.useMemo(() => {
    if (!hasMounted) return;
    try {
      return localStorage.getItem("consulenza-errore");
    } catch (err) {
      console.log(err);
    }
  }, [hasMounted]);
  return (
    <ErrorModal>
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
                C'è stato un errore
              </Typography>
            ) : null}

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
              {errorMessage
                ? errorMessage
                : "Qualcosa è andato storto, riprova"}
            </Typography>
          </Box>
        </Container>
      </ModalBody>

      <ModalFooter>
        <Box
          alignSelf='flex-end'
          maxWidth='500px'
          width='100%'
          mx='auto'
          mt={isMobile ? "0px" : "24px"}
        >
          <Container maxWidth={isMobile ? "sm" : "lg"}>
            <RoundedButton
              onClick={onContinue}
              size='large'
              color='primary'
              isFullWidth
              variant='contained'
            >
              Riprova
            </RoundedButton>
          </Container>
        </Box>
      </ModalFooter>
    </ErrorModal>
  );
};
