import { Body, Box, HStack, VStack } from "old-ui"
import React from "react"
import SeoLink from "../../../components/shared/SeoLink"
import { TooltipNavItem } from "./TooltipNavItem"
import { useGATracking } from "../../../services/tracking/context/GATrackerProvider"
import { navigationEvents } from "../../../services/tracking/constant/navigation"

export const AgencyTooltip = React.forwardRef<HTMLDivElement, any>(
  ({ ...rest }, ref) => {
    const { gaTracker } = useGATracking() || {}
    const handleLinkClick = React.useCallback(
      (content: string) => {
        gaTracker?.sendEvent({
          eventName: navigationEvents.navigation_agency_click,
          payload: {
            content,
          },
        })
      },
      [gaTracker]
    )
    return (
      <Box {...rest} ref={ref} __zIndex={9999} __width={`60%`}>
        <Box
          background={`white`}
          borderColor="grey50"
          borderRadius={8}
          width="full"
          px={32}
          py={16}
          style={{
            borderWidth: 1,
            borderStyle: `solid`,
          }}
        >
          <HStack
            spacing={64}
            align={`stretch`}
            sprinkles={{
              width: `full`,
              height: `full`,
            }}
          >
            <Box py={12} width="full">
              <VStack
                spacing={16}
                align={`flex-start`}
                sprinkles={{
                  width: `full`,
                }}
              >
                <Body variant="xl" fontWeight={700}>
                  Servizi per privati e aziende
                </Body>
                <HStack
                  spacing={64}
                  justify={`space-between`}
                  align={`flex-start`}
                  sprinkles={{
                    width: `full`,
                  }}
                >
                  <VStack
                    spacing={8}
                    align="flex-start"
                    sprinkles={{
                      width: `full`,
                    }}
                  >
                    <Body variant="lg" fontWeight={600}>
                      Servizi
                    </Body>
                    <SeoLink
                      link="/web-agency/"
                      isExternal={false}
                      className="link-gtm"
                      onClick={() => handleLinkClick(`/web-agency/`)}
                    >
                      <TooltipNavItem>Vedi tutti</TooltipNavItem>
                    </SeoLink>
                    <SeoLink
                      className="link-gtm"
                      link="/web-agency/siti-economici/"
                      isExternal={false}
                      onClick={() =>
                        handleLinkClick(`/web-agency/siti-economici/`)
                      }
                    >
                      <TooltipNavItem>Siti Economici</TooltipNavItem>
                    </SeoLink>
                    <SeoLink
                      className="link-gtm"
                      link="https://www.ariannatdesign.com/"
                      isExternal
                      onClick={() =>
                        handleLinkClick(`https://www.ariannatdesign.com/`)
                      }
                    >
                      <TooltipNavItem>Design</TooltipNavItem>
                    </SeoLink>
                  </VStack>
                  <VStack
                    spacing={8}
                    align="flex-start"
                    sprinkles={{
                      width: `full`,
                    }}
                  >
                    <Body variant="lg" fontWeight={600}>
                      Formazione
                    </Body>
                    <SeoLink
                      className="link-gtm"
                      link="/formazione/"
                      isExternal={false}
                      onClick={() => handleLinkClick(`/formazione/`)}
                    >
                      <TooltipNavItem>Formazione Aziendale</TooltipNavItem>
                    </SeoLink>
                    <SeoLink
                      className="link-gtm"
                      link="/formazione/"
                      isExternal={false}
                      onClick={() => handleLinkClick(`/formazione/`)}
                    >
                      <TooltipNavItem>Creazione Videocorsi</TooltipNavItem>
                    </SeoLink>
                  </VStack>
                </HStack>
              </VStack>
            </Box>
            <Box p={16} background={`grey10`}>
              <VStack
                spacing={16}
                align="flex-start"
                sprinkles={{
                  __width: `max-content`,
                }}
              >
                <Body variant="xl" fontWeight={700}>
                  Hai un'idea ?
                </Body>
                <SeoLink
                  className="link-gtm"
                  link="/formazione/prenota"
                  onClick={() => handleLinkClick(`/formazione/prenota`)}
                  isExternal={false}
                >
                  <TooltipNavItem>Contattaci</TooltipNavItem>
                </SeoLink>
              </VStack>
            </Box>
          </HStack>
        </Box>
      </Box>
    )
  }
)
