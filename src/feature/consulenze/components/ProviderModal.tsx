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
  ModalElipse,
  ModalTab,
  ModalFooter,
} from "../../../components/modal";
import { useResponsive } from "../../../hook/useResponsive";
import { Button, TextField, Typography } from "@mui/material";
import { useModalContext } from "../../../components/modal/context";
import { reservationModalLabels } from "../utils/constants";
import { ProviderModalProvider } from "../context/providerModalContext";
import { Formik, Form } from "formik";
import { RootState } from "../../../store";
import { useDispatch, useSelector } from "react-redux";
import { changeProvider } from "../../../store/reducers/consulenze";

type initialValueProps = {
  email: string;
  nome?: string;
  cognome?: string;
};

const initialValue: initialValueProps = {
  email: "",
  nome: "",
  cognome: "",
};

type Props = {
  onBack: () => void;
  onContinue: (param: initialValueProps) => void;
};

const ProviderModal = ({ onBack, onContinue }: Props) => {
  const { provider } = useSelector((store: RootState) => store.consulenza);
  const dispatch = useDispatch();
  const { isMobile } = useResponsive();
  const { onClose } = useModalContext() || {};

  const handleOnClick = React.useCallback(() => {
    dispatch(changeProvider());
  }, [dispatch]);

  return (
    <ProviderModalProvider
      value={{
        provider,
      }}
    >
      <ModalHeader hasborder>
        <ModalBackButton onBack={onBack} />
        {!isMobile ? (
          <ModalTitle>Scegli come prenotare la chiamata</ModalTitle>
        ) : null}
        {onClose ? <ModalCloseButton onClose={onClose} /> : null}
      </ModalHeader>
      <ModalBody>
        <ModalElipse pb={{ xs: "24px", lg: "38px" }}>
          <Stack direction='column' spacing={2}>
            <Box
              px={{ xs: "10px", lg: "70px" }}
              width={{ xs: "400px", lg: "600px" }}
            >
              <ModalStepper labels={reservationModalLabels} />
            </Box>
            <Stack
              direction='row'
              justifyContent='center'
              spacing={4}
              pb={isMobile ? "35px" : "20px"}
            >
              <ModalTab isgmail={true} onClick={handleOnClick} />
              <ModalTab isgmail={false} onClick={handleOnClick} />
            </Stack>
          </Stack>
        </ModalElipse>
        <Box px='12px' mb={{ xs: "auto", lg: "120px" }}>
          <Stack
            width='100%'
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
                Scegli come prenotare la chiamata
              </Typography>
            ) : null}
            {!isMobile || (isMobile && provider === "gmail") ? (
              <ModalTypography maxWidth='480px'>
                Scegli se usare Google Calendar o ricevere una mail
              </ModalTypography>
            ) : null}
          </Stack>
          <Formik initialValues={initialValue} onSubmit={onContinue}>
            {({ handleChange }) => (
              <Form id='provider-form'>
                <Box mt={{ xs: "32px", lg: "40px" }}>
                  <Stack spacing={2}>
                    {provider === "manual" ? (
                      <Stack
                        direction={{ xs: "column", lg: "row" }}
                        spacing={2}
                      >
                        <TextField
                          name='nome'
                          id='outlined-basic'
                          label='Nome'
                          size={isMobile ? "small" : "medium"}
                          onChange={handleChange}
                        />
                        <TextField
                          name='cognome'
                          id='outlined-basic'
                          label='Cognome'
                          size={isMobile ? "small" : "medium"}
                          onChange={handleChange}
                        />
                      </Stack>
                    ) : null}
                    <TextField
                      name='email'
                      id='outlined-basic'
                      label='Mail'
                      size={isMobile ? "small" : "medium"}
                      required
                      onChange={handleChange}
                    />
                  </Stack>
                </Box>
              </Form>
            )}
          </Formik>
        </Box>
      </ModalBody>

      <ModalFooter>
        <Container>
          <Button
            form='provider-form'
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
    </ProviderModalProvider>
  );
};

export default ProviderModal;
