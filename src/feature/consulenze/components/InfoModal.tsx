import React from "react";
import { Box, Container, Stack } from "@mui/system";
import {
  ModalHeader,
  ModalBackButton,
  ModalCloseButton,
  ModalTitle,
  ModalBody,
  ModalTypography,
  ModalStepper,
  ModalFooter,
} from "../../../components/modal";
import { useResponsive } from "../../../hook/useResponsive";
import { Button, TextField, Typography } from "@mui/material";
import { useModalContext } from "../../../components/modal/context";
import { reservationModalLabels } from "../utils/constants";
import { Form, Formik } from "formik";

type Props = {
  onBack: () => void;
  onContinue: (params: { professione: string; description: string }) => void;
};

const initialState = {
  professione: "",
  description: "",
};

const InfoModal = ({ onBack, onContinue }: Props) => {
  const { isMobile } = useResponsive();
  const { onClose } = useModalContext() || {};

  return (
    <>
      <ModalHeader hasborder>
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
          <Formik onSubmit={onContinue} initialValues={initialState}>
            {({ handleChange }) => {
              return (
                <Form id='info-form'>
                  <Box mt={isMobile ? "38px" : "74px"}>
                    <Stack direction='column' spacing={2}>
                      <TextField
                        name='professione'
                        id='outlined-basic'
                        label='Professione'
                        onChange={handleChange}
                        size={isMobile ? "small" : "medium"}
                      />
                      <TextField
                        name='description'
                        id='outlined-basic'
                        label='Descrizione'
                        onChange={handleChange}
                        sx={{
                          "& .MuiInputBase-root": {
                            height: 100,
                          },
                        }}
                      />
                    </Stack>
                  </Box>
                </Form>
              );
            }}
          </Formik>
        </Box>
      </ModalBody>
      <ModalFooter>
        <Container>
          <Button
            form='info-form'
            type='submit'
            variant='contained'
            sx={{
              width: "100%",
            }}
          >
            Avanti
          </Button>
        </Container>
      </ModalFooter>
    </>
  );
};

export default InfoModal;
