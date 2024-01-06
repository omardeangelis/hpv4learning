import {
  Body,
  Box,
  ResponsiveContainer,
  Stack,
  VStack,
  Text,
  Button,
  Icon,
  HStack,
  Heading,
} from "old-ui"
import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import {
  CategoryCourseCard,
  CategoryCourseFooter,
  CategoryCourseHeader,
  CategoryCourseImage,
} from "./AcademyCategoryCourse"
import SeoLink from "../../../../components/shared/SeoLink"
import { useGATracking } from "../../../../services/tracking/context/GATrackerProvider"
import { homePageEvents } from "../../../../services/tracking/constant/homepage"
import { webAgencyBigCard } from "../../style/services.css"
import { hideFromMd, hideUpToMd } from "../../../../styles/general.css"

export const WebAgencyService = () => {
  const { gaTracker } = useGATracking()
  return (
    <Box
      background="orange10"
      __minHeight="100vh"
      __width="100vw"
      py={{
        mobile: 48,
        md: 96,
      }}
      className={webAgencyBigCard}
      display="flex"
      alignItems="center"
      style={{
        flex: `0 0 auto`,
      }}
    >
      <ResponsiveContainer variant="xl">
        <VStack
          spacing={96}
          justify="flex-start"
          align="center"
          sprinkles={{
            width: `full`,
          }}
        >
          <Stack
            direction={{
              mobile: `column`,
              lg: `row`,
            }}
            spacing={{
              mobile: 32,
              lg: 24,
            }}
            align="center"
            justify="space-between"
            sprinkles={{
              width: `full`,
            }}
          >
            <Text
              variant={{
                mobile: `2xl`,
                md: `6xl`,
              }}
              as="h2"
              fontWeight={600}
            >
              Realizza
              <br className={hideUpToMd} />
              <span className={hideFromMd}> </span>
              il tuo sito
            </Text>
            <Box __maxWidth={393} overflow="hidden" width="full">
              <StaticImage
                src="../../images/agancy-card-circles.png"
                alt="Cerchi con dentro scritto adatto ad ogni business"
                placeholder="blurred"
              />
            </Box>
            <VStack
              spacing={16}
              align="flex-start"
              sprinkles={{
                __maxWidth: 346,
              }}
            >
              <Body variant="xl">
                Nessun template. Disegnamo e sviluppiamo il tuo sito per darti
                il miglior prodotto.
              </Body>
              <SeoLink
                link={`/web-agency`}
                isExternal={false}
                onClick={() =>
                  gaTracker?.sendEvent({
                    eventName: homePageEvents[`home_explore_web-agency`],
                  })
                }
              >
                <Button
                  colorScheme="theme"
                  rightIcon={<Icon icon="arrowRightOutline" />}
                >
                  Scopri di più
                </Button>
              </SeoLink>
            </VStack>
          </Stack>
          <Stack
            spacing={16}
            sprinkles={{
              width: `full`,
            }}
            direction={{
              mobile: `column-reverse`,
              lg: `row`,
            }}
            align={{
              mobile: `center`,
              lg: `flex-end`,
            }}
            justify="space-between"
          >
            <CategoryCourseCard background="red50">
              <CategoryCourseHeader>
                <Body variant="xl" as="h3" fontWeight={600}>
                  Inizia con un sito economico
                </Body>
                <Body
                  variant="md"
                  sprinkles={{
                    __maxWidth: `70%`,
                  }}
                >
                  Non lasciare che il costo sia un ostacolo. Con le nostre
                  opzioni economiche, iniziare la tua avventura online
                </Body>
              </CategoryCourseHeader>
              <CategoryCourseImage
                style={{
                  maxWidth: 120,
                  maxHeight: 120,
                }}
              >
                <StaticImage
                  src="../../images/agency-card-img.png"
                  alt="logo html javascript e css"
                />
              </CategoryCourseImage>
              <CategoryCourseFooter>
                <SeoLink
                  link={`/web-agency/siti-economici`}
                  isExternal={false}
                  onClick={() =>
                    gaTracker?.sendEvent({
                      eventName: homePageEvents.home_explore_econ,
                    })
                  }
                >
                  <Button colorScheme="theme">Scopri di più</Button>
                </SeoLink>
              </CategoryCourseFooter>
            </CategoryCourseCard>
            <HStack spacing="unset" align="flex-end" justify="end">
              <Heading
                variant="5xl"
                fontWeight={600}
                sprinkles={{
                  textAlign: `center`,
                }}
              >
                ll tuo sito,
                <br className={hideUpToMd} />
                <span className={hideFromMd}> </span>
                il tuo budget
              </Heading>
            </HStack>
          </Stack>
        </VStack>
      </ResponsiveContainer>
    </Box>
  )
}

// export const AcademyService = AcademyBox
