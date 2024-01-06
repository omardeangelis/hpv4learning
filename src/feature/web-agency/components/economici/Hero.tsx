import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import {
  Body,
  Box,
  Button,
  ResponsiveContainer,
  Stack,
  Text,
  VStack,
} from "old-ui"
import { heroImgBox, heroTextAlign } from "../../style/economici/hero.css"
import { useContactForm } from "../../context/FormContext"
import { useGATracking } from "../../../../services/tracking/context/GATrackerProvider"
import { webAgencyEvents } from "../../../../services/tracking/constant/web_agency"

export const Hero = () => {
  const { open } = useContactForm()
  const { gaTracker } = useGATracking()

  const handleClickOpen = React.useCallback(() => {
    gaTracker?.sendEvent({
      eventName: webAgencyEvents.agency_econ_hero_click,
    })
    open()
  }, [gaTracker, open])

  return (
    <Box
      __minHeight="calc(100vh - 98px)"
      display={`flex`}
      alignItems={`center`}
      justifyContent={`center`}
    >
      <ResponsiveContainer variant="lg">
        <Stack
          direction={{
            mobile: `column`,
            md: `row`,
          }}
          spacing={{
            mobile: 24,
            md: 48,
          }}
          justify={`space-between`}
          align={`center`}
          sprinkles={{
            width: `full`,
          }}
        >
          <VStack
            align={{
              mobile: `center`,
              md: `flex-start`,
            }}
            spacing={24}
            sprinkles={{
              __maxWidth: `530px`,
            }}
            className={heroTextAlign}
          >
            <Text
              sprinkles={{
                color: `grey300`,
                __textAlign: `inherit`,
              }}
              as="h1"
              fontWeight={600}
              variant={{
                mobile: `2xl`,
                sm: `3xl`,
                md: `5xl`,
              }}
              style={{
                zIndex: 2,
              }}
            >
              Siti economici a partire da 100€
            </Text>
            <Body
              sprinkles={{
                color: `grey300`,
              }}
              variant="xl"
              as="p"
              style={{
                zIndex: 2,
              }}
            >
              Soluzioni per PMI, professionisti e privati che vogliono inziare a
              digitalizzare i propri servizi
            </Body>
            <Button
              variant="solid"
              colorScheme="purple"
              onClick={handleClickOpen}
              style={{
                zIndex: 2,
              }}
            >
              Prenota
            </Button>
          </VStack>
          <Box className={heroImgBox}>
            <StaticImage
              src="../../images/econimici-hero.png"
              alt="App Example"
              placeholder="blurred"
              layout="constrained"
              quality={100}
              outputPixelDensities={[1, 2]}
              style={{
                zIndex: 2,
              }}
            />
          </Box>
        </Stack>
      </ResponsiveContainer>
    </Box>
  )
}
