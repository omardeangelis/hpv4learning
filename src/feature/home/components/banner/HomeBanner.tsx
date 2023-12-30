import { StaticImage } from "gatsby-plugin-image"
import { Body, Box, Button, Heading, ResponsiveContainer, VStack } from "old-ui"
import React from "react"
import {
  homeBannerContainer,
  homeBannerImage,
} from "../../style/home-banner.css"
import SeoLink from "../../../../components/shared/SeoLink"

export const HomeBanner = () => (
  <ResponsiveContainer variant="xl">
    <Box className={homeBannerContainer}>
      <VStack spacing={24} align={`center`} justify="center">
        <Body
          variant="sm"
          fontWeight={600}
          sprinkles={{
            color: `purple10`,
            __zIndex: 2,
          }}
          style={{
            textTransform: `uppercase`,
          }}
        >
          Per professionisti e Agenzie
        </Body>
        <Heading
          variant="5xl"
          fontWeight={600}
          sprinkles={{
            textAlign: `center`,
            color: `white`,
            __maxWidth: 1000,
            __zIndex: 2,
          }}
          style={{
            userSelect: `none`,
          }}
        >
          Unisciti a noi e aiutaci
          <br /> a crescere
        </Heading>
        <SeoLink
          style={{
            zIndex: 2,
          }}
          isExternal={false}
          link="/join-us/"
        >
          <Button colorScheme="purple">Scopri di più</Button>
        </SeoLink>
      </VStack>
      <StaticImage
        className={homeBannerImage}
        src="../../images/home-banner-bg.png"
        alt="Home Banner"
      />
    </Box>
  </ResponsiveContainer>
)
