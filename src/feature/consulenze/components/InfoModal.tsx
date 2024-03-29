import React from "react"
import Box from "@mui/system/Box"
import Container from "@mui/system/Container"
import Stack from "@mui/system/Stack"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import Typography from "@mui/material/Typography"
import CircularProgress from "@mui/material/CircularProgress"
import { Form, Formik } from "formik"
import * as Yup from "yup"
import {
  ModalHeader,
  ModalBackButton,
  ModalCloseButton,
  ModalTitle,
  ModalBody,
  ModalTypography,
  ModalStepper,
  ModalFooter,
} from "../../../components/modal"
import { useResponsive } from "../../../hook/useResponsive"
import { useModalContext } from "../../../components/modal/context"
import { reservationModalLabels } from "../utils/constants"

type Props = {
  onBack: () => void
  onContinue: (params: { professione: string; description: string }) => void
}

const initialState = {
  professione: ``,
  description: ``,
}

const validationSchema = Yup.object().shape({
  professione: Yup.string().max(100, `E'troppo lunga`),
  description: Yup.string().max(300, `Ti prego...`),
})

const InfoModal = ({ onBack, onContinue }: Props) => {
  const { isMobile } = useResponsive()
  const { onClose } = useModalContext() || {}

  return (
    <Formik
      onSubmit={onContinue}
      initialValues={initialState}
      validationSchema={validationSchema}
      validateOnMount
    >
      {({ handleChange, errors, touched, isSubmitting }) => (
        <>
          <ModalHeader hasborder>
            <ModalBackButton onBack={onBack} />
            {!isMobile ? (
              <ModalTitle>Informazioni Aggiuntive</ModalTitle>
            ) : null}
            {onClose ? <ModalCloseButton onClose={onClose} /> : null}
          </ModalHeader>
          <ModalBody>
            <Box px="12px" mb={{ xs: `auto`, lg: `50px` }}>
              <Box
                px={{ xs: `10px`, lg: `50px` }}
                width={{ xs: `400px`, lg: `600px` }}
                py="28px"
              >
                <ModalStepper labels={reservationModalLabels} />
              </Box>
              <Stack
                direction="column"
                spacing={2}
                alignItems="center"
                alignContent="center"
              >
                {isMobile ? (
                  <Typography
                    fontSize="20px"
                    lineHeight="24px"
                    fontWeight={600}
                    textAlign="center"
                  >
                    Dicci di più
                  </Typography>
                ) : null}
                <ModalTypography maxWidth="480px">
                  Aggiungi link e informazioni che possano aiutarci a preparare
                  la soluzione più adatta alla tua richiesta.
                </ModalTypography>
                <ModalTypography maxWidth="480px">
                  Questi campi sono facoltativi, nessuna informazione da voi
                  lasciata sarà usata a scopi pubblicitari o per spammare
                  promozioni
                </ModalTypography>
              </Stack>

              <Form id="info-form">
                <Box mt={isMobile ? `38px` : `74px`}>
                  <Stack
                    direction="column"
                    spacing={2}
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Stack
                      width="100%"
                      direction="column"
                      alignItems="flex-start"
                      justifyContent="center"
                      maxWidth="480px"
                    >
                      <TextField
                        name="professione"
                        id="outlined-basic"
                        label="Professione"
                        onChange={handleChange}
                        style={{
                          width: `100%`,
                        }}
                        size={isMobile ? `small` : `medium`}
                      />
                      <Typography variant="caption" color="red.400">
                        {errors.professione && touched.professione && (
                          <p>{errors.professione}</p>
                        )}
                      </Typography>
                    </Stack>
                    <Stack
                      width="100%"
                      direction="column"
                      alignItems="flex-start"
                      justifyContent="center"
                      maxWidth="480px"
                    >
                      <TextField
                        name="description"
                        id="outlined-basic"
                        label="Descrizione"
                        onChange={handleChange}
                        style={{
                          width: `100%`,
                        }}
                        sx={{
                          "& .MuiInputBase-root": {
                            height: 100,
                          },
                        }}
                      />
                      <Typography variant="caption" color="red.400">
                        {errors.description && touched.description && (
                          <p>{errors.description}</p>
                        )}
                      </Typography>
                    </Stack>
                  </Stack>
                </Box>
              </Form>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Container>
              <Button
                form="info-form"
                type="submit"
                variant="contained"
                sx={{
                  width: `100%`,
                }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <Box display="flex">
                    <CircularProgress size={25} />
                  </Box>
                ) : (
                  `Prenota`
                )}
              </Button>
            </Container>
          </ModalFooter>
        </>
      )}
    </Formik>
  )
}

export default InfoModal
