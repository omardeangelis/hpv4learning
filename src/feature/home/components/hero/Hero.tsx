import { Body, Box, HStack, Heading, ResponsiveContainer, VStack } from "old-ui"
import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { HeroButton } from "./HeroButton"
import { HomeHeroProvider } from "../../context/HomeHeroContext"
import { HeroCards } from "./HeroCards"
import {
  mobileHero,
  mobileHeroCard,
  mobileHeroCardOverlay,
} from "../../style/mobile-hero.css"
import { MobileHeroCards } from "./MobileHeroCards"

const DesktopHero = () => (
  <Box
    background="grey10"
    __minHeight="calc(100vh - 8rem)"
    display="flex"
    alignItems="center"
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

const MobileHero = () => (
  <Box className={mobileHero}>
    <ResponsiveContainer variant="md">
      <Box px={12} position="relative" __zIndex={4}>
        <Heading
          variant="5xl"
          as="h1"
          fontWeight={600}
          sprinkles={{
            color: `black`,
            textAlign: `center`,
          }}
        >
          Professionisti non professori
        </Heading>
      </Box>
      <Box mt={16} mr="auto" px={12} py={16} className={mobileHeroCard}>
        <VStack spacing={48} align={`flex-start`}>
          <Body
            variant="xxl"
            sprinkles={{
              color: `white`,
              textAlign: `center`,
              __zIndex: 8,
            }}
          >
            Cosa possiamo fare per te
          </Body>
          <MobileHeroCards />
          <hr
            style={{
              border: `1px solid var(--grey100-v2)`,
              width: `100%`,
              zIndex: 8,
            }}
          />
          <HeroButton />
        </VStack>
        <Box
          position="absolute"
          style={{ left: 0, bottom: 0, top: 0 }}
          className={mobileHeroCardOverlay}
        />
      </Box>
    </ResponsiveContainer>
    <Box position="absolute" style={{ left: 0, bottom: 0, top: 0 }}>
      <StaticImage
        src="../../images/mobile-hero.jpeg"
        alt="mobile-hero"
        style={{ height: `100%`, width: `100%` }}
      />
    </Box>
  </Box>
)

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
