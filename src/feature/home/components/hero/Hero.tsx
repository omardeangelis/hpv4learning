import { Box, HStack, Heading, ResponsiveContainer, VStack } from "old-ui"
import React from "react"
import { HeroButton } from "./HeroButton"
import { HomeHeroProvider } from "../../context/HomeHeroContext"
import { HeroCards } from "./HeroCards"

const DesktopHero = () => (
  <Box
    background="grey10"
    paddingTop={{
      mobile: 16,
      md: 24,
    }}
  >
    <ResponsiveContainer variant="xl">
      <HStack
        justify="flex-start"
        align="center"
        spacing={16}
        sprinkles={{
          width: `full`,
          height: `full`,
        }}
      >
        <VStack
          justify="space-between"
          spacing={48}
          sprinkles={{
            height: `full`,
          }}
        >
          <Heading variant="3xl" as="h1" fontWeight={600}>
            Professionisti
            <br />
            non professori
          </Heading>
          <HeroButton />
        </VStack>
        <HeroCards />
      </HStack>
    </ResponsiveContainer>
  </Box>
)

const MobileHero = () => <div>MobileHero</div>

export const Hero = () => (
  <HomeHeroProvider>
    <Box display={{ mobile: `none`, lg: `block` }}>
      <DesktopHero />
    </Box>
    <Box display={{ mobile: `block`, lg: `none` }}>
      <MobileHero />
    </Box>
  </HomeHeroProvider>
)
