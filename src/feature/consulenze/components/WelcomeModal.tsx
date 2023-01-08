import React from "react"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Stack from "@mui/material/Stack"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import { StaticImage } from "gatsby-plugin-image"
import {
  ModalHeader,
  ModalBackButton,
  ModalCloseButton,
  ModalTitle,
  ModalBody,
  ModalElipse,
  ModalTypography,
  ModalStepper,
  ModalFooter,
} from "../../../components/modal"
import { reservationModalLabels } from "../utils/constants"
import { useResponsive } from "../../../hook/useResponsive"
import { useModalContext } from "../../../components/modal/context"
import { triggerGACustomEvent } from "../../../utils/tracking"

type Props = {
  onContinue: () => void
}

const WelcomeModal = ({ onContinue }: Props) => {
  const { isMobile } = useResponsive()
  const { onClose } = useModalContext()
  const handleCustomContinue = React.useCallback(() => {
    triggerGACustomEvent({
      event: `start_consulenza`,
    })()
    onContinue()
  }, [onContinue])
  return (
    <>
      <ModalHeader hasborder>
        {onClose ? <ModalBackButton onBack={onClose} /> : null}
        {!isMobile ? <ModalTitle>Prenota una videochiamata</ModalTitle> : null}
        {onClose ? <ModalCloseButton onClose={onClose} /> : null}
      </ModalHeader>
      <ModalBody width="100%">
        <ModalElipse>
          <Stack
            direction="column"
            spacing={2}
            alignItems="center"
            alignContent="center"
          >
            <Box
              px={{ xs: `10px`, lg: `70px` }}
              width={{ xs: `400px`, lg: `600px` }}
            >
              <ModalStepper labels={reservationModalLabels} />
            </Box>
            <Box maxWidth="184px">
              <StaticImage
                src="../../../components/modal/images/calendar.png"
                alt="Calendario"
                placeholder="blurred"
              />
            </Box>
          </Stack>
        </ModalElipse>
        <Box px="12px" mb={{ xs: `auto`, lg: `120px` }}>
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
                Prenota una chiamata
              </Typography>
            ) : null}

            <ModalTypography
              color="var(--gray--500)"
              textAlign="center"
              fontSize="16px"
              fontWeight={400}
              lineHeight="24px"
              maxWidth="480px"
            >
              Nelle prossime schermate potrai prenotare una videochiamata che ti
              verrà subito confermata scegliendo tra le date disponibili.
            </ModalTypography>
          </Stack>
        </Box>
      </ModalBody>
      <ModalFooter>
        <Container>
          <Button
            onClick={handleCustomContinue}
            variant="contained"
            sx={{
              width: `100%`,
            }}
          >
            Avanti
          </Button>
        </Container>
      </ModalFooter>
    </>
  )
}

export default WelcomeModal
