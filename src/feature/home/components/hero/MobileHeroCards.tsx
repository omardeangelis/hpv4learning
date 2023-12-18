import { StaticImage } from "gatsby-plugin-image"
import { Box, HStack, Text, VStack } from "old-ui"
import React from "react"

const MobileHeroCard = ({
  children,
  text,
}: {
  children: React.ReactNode
  text: string
}) => (
  <VStack
    spacing={8}
    sprinkles={{
      width: `full`,
      __zIndex: 8,
    }}
  >
    <Box
      overflow="hidden"
      borderRadius={16}
      width="full"
      position="relative"
      __minHeight={100}
      __maxWidth={100}
    >
      <Box
        position="absolute"
        width="full"
        style={{
          top: 0,
          left: 0,
          bottom: 0,
        }}
      >
        {children}
      </Box>
    </Box>
    <Text
      variant="sm"
      fontWeight={600}
      sprinkles={{
        textAlign: `center`,
        color: `white`,
        __zIndex: 8,
      }}
    >
      {text}
    </Text>
  </VStack>
)

export const MobileHeroCards = () => (
  <HStack
    justify="space-between"
    align="center"
    spacing={8}
    sprinkles={{
      width: `full`,
    }}
  >
    <MobileHeroCard text="Academy">
      <StaticImage
        src="../../images/mobile-academy.png"
        alt="Sviluppo Web"
        style={{
          width: `100%`,
        }}
      />
    </MobileHeroCard>
    <MobileHeroCard text="Sviluppo Web">
      <StaticImage
        src="../../images/mobile-web-agancy.png"
        alt="Sviluppo Web"
        style={{
          height: `100%`,
          width: `100%`,
        }}
      />
    </MobileHeroCard>
    <MobileHeroCard text="Formazione">
      <StaticImage
        src="../../images/mobile-edu.png"
        alt="Sviluppo Web"
        style={{
          height: `100%`,
          width: `100%`,
        }}
      />
    </MobileHeroCard>
  </HStack>
)
