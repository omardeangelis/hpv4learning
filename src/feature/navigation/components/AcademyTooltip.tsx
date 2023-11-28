import { Body, Box, HStack, VStack } from "old-ui"
import React from "react"
import SeoLink from "../../../components/shared/SeoLink"
import { TooltipNavItem } from "./TooltipNavItem"

export const AcademyTooltip = React.forwardRef<HTMLDivElement, any>(
  ({ ...rest }, ref) => (
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
                  <SeoLink link="/corsi/sviluppatori-web/" isExternal={false}>
                    <TooltipNavItem>Sviluppo Web</TooltipNavItem>
                  </SeoLink>
                  <SeoLink link="/corsi/videomakers/" isExternal={false}>
                    <TooltipNavItem>Videomaking</TooltipNavItem>
                  </SeoLink>
                  <SeoLink link="/corsi/gratuiti/" isExternal={false}>
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
                  <SeoLink link="/progetti/javascript/" isExternal={false}>
                    <TooltipNavItem>Javascript</TooltipNavItem>
                  </SeoLink>
                  <SeoLink link="/progetti/react/" isExternal={false}>
                    <TooltipNavItem>React</TooltipNavItem>
                  </SeoLink>
                  <SeoLink link="/progetti/videomaker/" isExternal={false}>
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
                    link="/progetti/javascript/creare-contatore-javascript/"
                    isExternal={false}
                  >
                    <TooltipNavItem>Contatore Javascript</TooltipNavItem>
                  </SeoLink>
                  <SeoLink
                    link="/guide/imparare-react-da-zero/"
                    isExternal={false}
                  >
                    <TooltipNavItem>Guida a React</TooltipNavItem>
                  </SeoLink>
                  <SeoLink
                    link="/PremierePro-Guida-Completa-Gratuita/"
                    isExternal={false}
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
              <SeoLink link="/about/" isExternal={false}>
                <TooltipNavItem>Insegnanti</TooltipNavItem>
              </SeoLink>
              <SeoLink link="/join-us/" isExternal={false}>
                <TooltipNavItem>Unisciti</TooltipNavItem>
              </SeoLink>
            </VStack>
          </Box>
        </HStack>
      </Box>
    </Box>
  )
)
