import { Body, Box, HStack, VStack } from "old-ui"
import React from "react"
import SeoLink from "../../../components/shared/SeoLink"
import { TooltipNavItem } from "./TooltipNavItem"

export const AgencyTooltip = React.forwardRef<HTMLDivElement, any>(
  ({ ...rest }, ref) => (
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
                  <SeoLink link="/web-agency/" isExternal={false}>
                    <TooltipNavItem>Vedi tutti</TooltipNavItem>
                  </SeoLink>
                  <SeoLink
                    link="/web-agency/siti-economici/"
                    isExternal={false}
                  >
                    <TooltipNavItem>Siti Economici</TooltipNavItem>
                  </SeoLink>
                  <SeoLink link="https://www.ariannatdesign.com/" isExternal>
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
                  <SeoLink link="/formazione/" isExternal={false}>
                    <TooltipNavItem>Formazione Aziendale</TooltipNavItem>
                  </SeoLink>
                  <SeoLink link="/formazione/" isExternal={false}>
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
              <SeoLink link="/formazione/prenota" isExternal={false}>
                <TooltipNavItem>Contattaci</TooltipNavItem>
              </SeoLink>
            </VStack>
          </Box>
        </HStack>
      </Box>
    </Box>
  )
)
