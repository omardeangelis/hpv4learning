import React from "react"
import { Body, Box, Button, HStack, VStack, useHasMounted } from "old-ui"
import { Formik } from "formik"
import { TextField } from "@mui/material"
import * as yup from "yup"
import { Modal } from "../../../../components/v2/modal/components/Modal"
import { ModalContent } from "../../../../components/v2/modal/components/ModalContent"
import { ModalBody } from "../../../../components/v2/modal/components/ModalBody"
import { ModalFooter } from "../../../../components/v2/modal/components/ModalFooter"
import {
  ModalHeader,
  ModalCloseButton,
  ModalHeaderTitle,
} from "../../../../components/v2/modal/components/ModalHeader"
import { useContactForm } from "../../context/FormContext"
import { modalOpenStyle } from "../../style/core/contact-form.css"
import { useSteps } from "../../../../components/v2/modal/hooks/useSteps"
import { SuccessForm } from "./SuccessForm"
import { useGATracking } from "../../../../services/tracking/context/GATrackerProvider"
import { webAgencyEvents } from "../../../../services/tracking/constant/web_agency"

const validationSchema = yup.object({
  name: yup.string().required(`Il nome è obbligatorio`),
  cognome: yup.string().required(`Il cognome è obbligatorio`),
  email: yup
    .string()
    .email(`Inserisci un indirizzo email valido`)
    .matches(
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      `Inserisci un indirizzo email valido`
    )
    .required(`L'email è obbligatoria`),
  message: yup.string().max(500, `Massimo 500 caratteri`).optional(),
})

const initialValues = {
  name: ``,
  cognome: ``,
  email: ``,
  message: ``,
}

export type ContactFormValues = typeof initialValues

const ContactFormModal = () => {
  const { close } = useContactForm()
  const { gaTracker } = useGATracking()
  const sendModalOpenEvent = React.useCallback(() => {
    gaTracker?.sendEvent({
      eventName: webAgencyEvents.agency_modal_open,
    })
  }, [gaTracker])

  const [customError, setCustomError] = React.useState<string | null>(null)
  const { step, stepIndex, nextStep } = useSteps([
    `contact` as const,
    `success` as const,
  ])

  const handleFormSubmit = React.useCallback(
    async (values: ContactFormValues) => {
      setCustomError(null)
      try {
        const response = await fetch(`/api/web-agency/contact-us`, {
          method: `POST`,
          body: JSON.stringify(values),
        })

        const data: { success: boolean } = await response.json()
        if (!data.success) return setCustomError(`Errore durante l'invio`)
        return nextStep()
      } catch (error) {
        return setCustomError(`Errore durante l'invio`)
      }
    },
    [nextStep]
  )

  React.useEffect(() => {
    sendModalOpenEvent()
  }, [sendModalOpenEvent])

  return (
    <Modal onClose={close} stepIndex={stepIndex}>
      {step === `success` ? (
        <SuccessForm />
      ) : (
        <Formik
          initialValues={initialValues}
          onSubmit={handleFormSubmit}
          validationSchema={validationSchema}
          validateOnMount
        >
          {({
            values,
            handleSubmit,
            handleChange,
            isSubmitting,
            handleBlur,
            touched,
            isValid,
            errors,
          }) => (
            <ModalContent>
              <ModalHeader>
                <ModalHeaderTitle>Contattaci</ModalHeaderTitle>
                <ModalCloseButton />
              </ModalHeader>
              <ModalBody>
                <Box
                  width="full"
                  pt={{
                    mobile: 12,
                    md: 16,
                  }}
                >
                  <VStack
                    spacing={16}
                    align={`center`}
                    justify={`center`}
                    sprinkles={{
                      height: `full`,
                      width: `full`,
                    }}
                  >
                    <Body
                      variant="lg"
                      sprinkles={{
                        color: `grey300`,
                      }}
                    >
                      Compila il form per ricevere un preventivo gratuito
                    </Body>
                    <HStack
                      spacing={4}
                      justify={`space-between`}
                      align={`center`}
                      sprinkles={{
                        width: `full`,
                      }}
                    >
                      <TextField
                        label="nome"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="inserisci nome"
                        autoComplete="name"
                        style={{
                          width: `100%`,
                        }}
                      />
                      <TextField
                        label="cognome"
                        value={values.cognome}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        autoComplete="family-name"
                        name="cognome"
                        placeholder="inserisci nome"
                        style={{
                          width: `100%`,
                        }}
                      />
                    </HStack>
                    <TextField
                      label="email"
                      type="email"
                      value={values.email}
                      onChange={handleChange}
                      name="email"
                      onBlur={handleBlur}
                      autoComplete="email"
                      placeholder="inserisci email"
                      style={{
                        width: `100%`,
                      }}
                    />
                    <TextField
                      label="messaggio"
                      value={values.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="message"
                      placeholder="inserisci messaggio"
                      multiline
                      rows={4}
                      style={{
                        width: `100%`,
                      }}
                    />
                  </VStack>
                </Box>
              </ModalBody>
              <ModalFooter
                style={{
                  paddingBottom: `4px`,
                }}
              >
                <VStack
                  spacing={8}
                  sprinkles={{
                    width: `full`,
                  }}
                >
                  <Button
                    role="button"
                    isFullWidth
                    variant={!isValid || isSubmitting ? `disabled` : `purple`}
                    size="md"
                    onClick={() => handleSubmit()}
                  >
                    {isSubmitting ? `Invio in corso...` : `Invia`}
                  </Button>
                  <Box
                    height={12}
                    width="full"
                    display="flex"
                    alignItems="flex-end"
                    justifyContent="flex-end"
                  >
                    {Object.keys(touched).length > 0 || customError ? (
                      <Body
                        variant="xxs"
                        sprinkles={{
                          color: `red200`,
                        }}
                      >
                        {customError ||
                          errors.name ||
                          errors.cognome ||
                          errors.email ||
                          errors.message}
                      </Body>
                    ) : null}
                  </Box>
                </VStack>
              </ModalFooter>
            </ModalContent>
          )}
        </Formik>
      )}
    </Modal>
  )
}

export const ContactForm = () => {
  const { isOpened } = useContactForm()
  const isMounted = useHasMounted()

  React.useEffect(() => {
    if (isMounted) {
      if (isOpened) {
        document.body.classList.add(modalOpenStyle)
      } else {
        document.body.classList.remove(modalOpenStyle)
      }
    }
  }, [isMounted, isOpened])
  return isOpened ? <ContactFormModal /> : null
}
