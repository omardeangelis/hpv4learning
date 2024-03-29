import React from "react"
import Box from "@mui/system/Box"
import Container from "@mui/system/Container"
import Stack from "@mui/system/Stack"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import Typography from "@mui/material/Typography"
import { Formik, Form } from "formik"
import { useDispatch, useSelector } from "react-redux"
import * as Yup from "yup"
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
} from "../../../components/modal"
import { useResponsive } from "../../../hook/useResponsive"
import { useModalContext } from "../../../components/modal/context"
import { reservationModalLabels } from "../utils/constants"
import { ProviderModalProvider } from "../context/providerModalContext"
import { RootState } from "../../../store"
import { changeProvider } from "../../../store/reducers/consulenze"
import {
  mailValidationRegex,
  gmailEmailValidation,
} from "../../../server/constants"

const creareValidationSchema = (provider: "manual" | "gmail") =>
  Yup.object().shape({
    email: Yup.string()
      .matches(
        provider === `gmail`
          ? mailValidationRegex && gmailEmailValidation
          : mailValidationRegex,
        {
          excludeEmptyString: true,
          message: `"Email non valida ${
            provider === `gmail` ? `deve essere @gmail` : ``
          }`,
        }
      )
      .min(5, `Inseirisci almeno 5 caratteri`)
      .max(100, `massimo 10 caratteri`)
      .email(),
    nome: Yup.string()
      .min(2, `Inserisci almeno 2 lettere`)
      .max(100, `Non ha 100 lettere nel nome`)
      .notRequired(),
    cognome: Yup.string()
      .min(2, `Inserisci almeno 2 lettere`)
      .max(200, `Non ha 200 lettere nel nome`)
      .notRequired(),
  })

type initialValueProps = {
  email: string
  nome?: string
  cognome?: string
}

const initialValue: initialValueProps = {
  email: ``,
  nome: ``,
  cognome: ``,
}

type Props = {
  onBack: () => void
  onContinue: (param: initialValueProps) => void
}

const ProviderModal = ({ onBack, onContinue }: Props) => {
  const { provider } = useSelector((store: RootState) => store.consulenza)
  const dispatch = useDispatch()
  const { isMobile } = useResponsive()
  const { onClose } = useModalContext() || {}

  const validationSchema = React.useMemo(
    () => creareValidationSchema(provider),
    [provider]
  )

  const handleOnClick = React.useCallback(() => {
    dispatch(changeProvider())
  }, [dispatch])

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
        <ModalElipse pb={{ xs: `24px`, lg: `38px` }}>
          <Stack direction="column" spacing={2}>
            <Box
              px={{ xs: `10px`, lg: `70px` }}
              width={{ xs: `400px`, lg: `600px` }}
            >
              <ModalStepper labels={reservationModalLabels} />
            </Box>
            <Stack
              direction="row"
              justifyContent="center"
              spacing={4}
              pb={isMobile ? `35px` : `20px`}
            >
              <ModalTab isgmail onClick={handleOnClick} />
              <ModalTab isgmail={false} onClick={handleOnClick} />
            </Stack>
          </Stack>
        </ModalElipse>
        <Box px="12px" mb={{ xs: `auto`, lg: `120px` }}>
          <Stack
            width="100%"
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
                Scegli come prenotare la chiamata
              </Typography>
            ) : null}
            {!isMobile || (isMobile && provider === `gmail`) ? (
              <ModalTypography maxWidth="480px">
                Scegli se usare Google Calendar o ricevere una mail
              </ModalTypography>
            ) : null}
          </Stack>
          <Formik
            initialValues={initialValue}
            onSubmit={onContinue}
            validationSchema={validationSchema}
            validateOnMount
          >
            {({ handleChange, errors, touched }) => (
              <Form id="provider-form">
                <Box mt={{ xs: `32px`, lg: `40px` }}>
                  <Stack spacing={2}>
                    {provider === `manual` ? (
                      <Stack
                        direction={{ xs: `column`, lg: `row` }}
                        spacing={2}
                      >
                        <Box width="100%">
                          <TextField
                            name="nome"
                            id="outlined-basic"
                            label="Nome"
                            style={{
                              width: `100%`,
                            }}
                            size={isMobile ? `small` : `medium`}
                            onChange={handleChange}
                          />
                          <Typography variant="caption" color="red.400">
                            {errors.nome && touched.nome && (
                              <p>{errors.nome}</p>
                            )}
                          </Typography>
                        </Box>
                        <Box width="100%">
                          <TextField
                            name="cognome"
                            id="outlined-basic"
                            label="Cognome"
                            style={{
                              width: `100%`,
                            }}
                            size={isMobile ? `small` : `medium`}
                            onChange={handleChange}
                          />
                          <Typography variant="caption" color="red.400">
                            {errors.cognome && touched.cognome && (
                              <p>{errors.cognome}</p>
                            )}
                          </Typography>
                        </Box>
                      </Stack>
                    ) : null}
                    <Box width="100%">
                      <TextField
                        name="email"
                        id="outlined-basic"
                        label="Mail"
                        size={isMobile ? `small` : `medium`}
                        style={{
                          width: `100%`,
                        }}
                        required
                        onChange={handleChange}
                      />
                      <Typography variant="caption" color="red.400">
                        {errors.email && touched.email && <p>{errors.email}</p>}
                      </Typography>
                    </Box>
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
            form="provider-form"
            type="submit"
            variant="contained"
            sx={{
              width: `100%`,
            }}
          >
            Avanti
          </Button>
        </Container>
      </ModalFooter>
    </ProviderModalProvider>
  )
}

export default ProviderModal
