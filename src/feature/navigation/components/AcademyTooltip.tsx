import { Body, Box, HStack, VStack } from "old-ui"
import React from "react"
import SeoLink from "../../../components/shared/SeoLink"
import { TooltipNavItem } from "./TooltipNavItem"
import { useGATracking } from "../../../services/tracking/context/GATrackerProvider"
import { navigationEvents } from "../../../services/tracking/constant/navigation"

export const AcademyTooltip = React.forwardRef<HTMLDivElement, any>(
  ({ ...rest }, ref) => {
    const { gaTracker } = useGATracking() || {}
    const handleLinkClick = React.useCallback(
      (content: string) => {
        gaTracker?.sendEvent({
          eventName: navigationEvents.navigation_academy_click,
          payload: {
            content,
          },
        })
      },
      [gaTracker]
    )
    return (
      <Box {...rest} ref={ref} __zIndex={9999} __width={`80%`}>
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
                  La nostra offerta formativa
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
                      Corsi
                    </Body>
                    <SeoLink
                      link="/academy/corsi/sviluppatori-web/"
                      isExternal={false}
                      onClick={() =>
                        handleLinkClick(`/academy/corsi/sviluppatori-web/`)
                      }
                    >
                      <TooltipNavItem>Sviluppo Web</TooltipNavItem>
                    </SeoLink>
                    <SeoLink
                      link="/academy/corsi/videomakers/"
                      isExternal={false}
                      onClick={() =>
                        handleLinkClick(`/academy/corsi/videomakers/`)
                      }
                    >
                      <TooltipNavItem>Videomaking</TooltipNavItem>
                    </SeoLink>
                    <SeoLink
                      link="/academy/corsi/gratuiti/"
                      isExternal={false}
                      onClick={() =>
                        handleLinkClick(`/academy/corsi/gratuiti/`)
                      }
                    >
                      <TooltipNavItem>Gratuiti</TooltipNavItem>
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
                      Progetti Pratici
                    </Body>
                    <SeoLink
                      link="/academy/progetti/javascript/"
                      className="link-gtm"
                      isExternal={false}
                      onClick={() =>
                        handleLinkClick(`/academy/progetti/javascript/`)
                      }
                    >
                      <TooltipNavItem>Javascript</TooltipNavItem>
                    </SeoLink>
                    <SeoLink
                      link="/academy/progetti/react/"
                      className="link-gtm"
                      isExternal={false}
                      onClick={() =>
                        handleLinkClick(`/academy/progetti/react/`)
                      }
                    >
                      <TooltipNavItem>React</TooltipNavItem>
                    </SeoLink>
                    <SeoLink
                      className="link-gtm"
                      link="/academy/progetti/videomaker/"
                      isExternal={false}
                      onClick={() =>
                        handleLinkClick(`/academy/progetti/videomaker/`)
                      }
                    >
                      <TooltipNavItem>Videomaking</TooltipNavItem>
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
                      Inizia da qui
                    </Body>
                    <SeoLink
                      className="link-gtm"
                      link="/academy/progetti/javascript/creare-contatore-javascript/"
                      isExternal={false}
                      onClick={() =>
                        handleLinkClick(
                          `/academy/progetti/javascript/creare-contatore-javascript/`
                        )
                      }
                    >
                      <TooltipNavItem>Contatore Javascript</TooltipNavItem>
                    </SeoLink>
                    <SeoLink
                      className="link-gtm"
                      link="/academy/guide/imparare-react-da-zero/"
                      isExternal={false}
                      onClick={() =>
                        handleLinkClick(`/academy/guide/imparare-react/`)
                      }
                    >
                      <TooltipNavItem>Guida a React</TooltipNavItem>
                    </SeoLink>
                    <SeoLink
                      className="link-gtm"
                      link="/academy/corsi/PremierePro-Guida-Completa-Gratuita/"
                      isExternal={false}
                      onClick={() =>
                        handleLinkClick(
                          `/academy/corsi/PremierePro-Guida-Completa-Gratuita/`
                        )
                      }
                    >
                      <TooltipNavItem>Montaggio Video</TooltipNavItem>
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
                  Chi Siamo
                </Body>
                <SeoLink
                  link="/about/"
                  className="link-gtm"
                  isExternal={false}
                  onClick={() => handleLinkClick(`/about/`)}
                >
                  <TooltipNavItem>Insegnanti</TooltipNavItem>
                </SeoLink>
                <SeoLink
                  link="/join-us/"
                  className="link-gtm"
                  onClick={() => handleLinkClick(`/join-us/`)}
                  isExternal={false}
                >
                  <TooltipNavItem>Unisciti</TooltipNavItem>
                </SeoLink>
              </VStack>
            </Box>
          </HStack>
        </Box>
      </Box>
    )
  }
)
