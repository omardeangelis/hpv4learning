import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Body, Box, Button, VStack } from "old-ui"
import { ModalContent } from "../../../../components/v2/modal/components/ModalContent"
import { ModalBody } from "../../../../components/v2/modal/components/ModalBody"
import { ModalFooter } from "../../../../components/v2/modal/components/ModalFooter"
import {
  ModalHeader,
  ModalCloseButton,
} from "../../../../components/v2/modal/components/ModalHeader"
import { useModalContext } from "../../../../components/v2/modal/context/ModalProvider"
import { useGATracking } from "../../../../services/tracking/context/GATrackerProvider"
import { webAgencyEvents } from "../../../../services/tracking/constant/web_agency"

export const SuccessForm = () => {
  const { onClose } = useModalContext() || {}
  const { gaTracker } = useGATracking() || {}

  const dispatchContactSuccessEvent = React.useCallback(() => {
    gaTracker?.sendEvent({
      eventName: webAgencyEvents.agency_modal_contact,
    })
  }, [gaTracker])

  React.useEffect(() => {
    dispatchContactSuccessEvent()
  }, [dispatchContactSuccessEvent])
  return (
    <ModalContent>
      <ModalHeader>
        <ModalCloseButton />
      </ModalHeader>
      <ModalBody>
        <VStack
          spacing={12}
          align={`center`}
          sprinkles={{
            width: `full`,
          }}
        >
          <Box __maxWidth="144px">
            <StaticImage
              src="../../../../components/modal/images/success.png"
              alt="Completato con successo"
              placeholder="blurred"
            />
          </Box>
          <Body
            variant="lg"
            sprinkles={{
              textAlign: `center`,
            }}
          >
            Mail inviata con successo, controlla la tua casella di posta
          </Body>
          <Body
            variant="md"
            sprinkles={{ textAlign: `center`, color: `grey300` }}
          >
            Ricordati di controllare anhce la cartella spam
          </Body>
          <Body
            variant="md"
            sprinkles={{ textAlign: `center`, color: `grey300` }}
          >
            Per qualsiasi problema rivolgersi alla mail <br />
            <a
              className="brand-text"
              href="mailto:omardeangelis.business@gmail.com"
              title="Mail per il supporto"
              rel="nofollow"
            >
              omardeangelis.business@gmail.com
            </a>
          </Body>
        </VStack>
      </ModalBody>
      <ModalFooter>
        <Button isFullWidth variant="purple" size="md" onClick={onClose}>
          Chiudi
        </Button>
      </ModalFooter>
    </ModalContent>
  )
}
