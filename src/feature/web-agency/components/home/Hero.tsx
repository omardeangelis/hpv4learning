import React from "react"
import { Body, Box, Button, HStack, Heading, VStack } from "old-ui"
import { StaticImage } from "gatsby-plugin-image"
import { CardHeroContainer } from "../../../../components/v2/cards/hero/CardHero"
import {
  awarenessTexts,
  cardBlock,
  heroCard,
  heroLayout,
  heroTexts,
  imageBox,
  topCardImage,
} from "../../style/home/hero.css"
import {
  Card,
  CardImage,
  CardContent,
} from "../../../../components/v2/cards/base"
import { useContactForm } from "../../context/FormContext"

export const Hero = () => {
  const { open } = useContactForm()

  return (
    <CardHeroContainer className={heroCard}>
      <Box className={heroLayout}>
        <Box className={heroTexts}>
          <VStack spacing={24} align="flex-start">
            <Heading as="h1" fontWeight={700} variant="5xl">
              Siti web per aziende e professionisti
            </Heading>
          </VStack>

          <VStack
            spacing={16}
            align="flex-start"
            justify={`flex-end`}
            className={awarenessTexts}
          >
            <Body
              fontWeight={500}
              variant="lg"
              sprinkles={{
                color: `grey300`,
              }}
            >
              Siamo un’agenzia creativa che realizza siti web su misura e
              personalizzati per ogni azienda.
            </Body>
            <HStack spacing={16}>
              <Box
                borderColor={`grey20`}
                style={{
                  borderWidth: `1px`,
                  borderStyle: `solid`,
                }}
                className={imageBox}
              >
                <StaticImage
                  placeholder="none"
                  src="../../images/hpvfilm-png.png"
                  alt="Hpv Film Logo"
                />
              </Box>
              <Box
                borderColor={`grey20`}
                style={{
                  borderWidth: `1px`,
                  borderStyle: `solid`,
                }}
                className={imageBox}
              >
                <StaticImage
                  placeholder="none"
                  src="../../images/udemy-png.webp"
                  alt="Udemy Logo"
                />
              </Box>
            </HStack>
          </VStack>
        </Box>
        <Box className={cardBlock}>
          <Card
            disableHover
            __background={`linear-gradient(180deg, #7951BC 0%, #002032 100%)`}
          >
            <CardContent
              direction={`column`}
              spacing={{ mobile: 24, lg: `unset` }}
              justify="space-between"
              sprinkles={{
                height: `full`,
              }}
            >
              <Body
                variant="xxl"
                fontWeight={700}
                sprinkles={{
                  color: `white`,
                }}
              >
                Ad ogni sito il suo designer
              </Body>
              <Body
                variant="lg"
                sprinkles={{
                  color: `white`,
                  __zIndex: 1,
                  maxWidth: `calc(100% - 48px)`,
                }}
              >
                Non usiamo template. Ogni sito ha un design unico.
              </Body>
              <CardImage isAbsolute className={topCardImage}>
                <StaticImage
                  placeholder="none"
                  src="../../images/geometric cube.png"
                  alt="A 3d geometric cube"
                  style={{
                    height: `100%`,
                  }}
                />
              </CardImage>
            </CardContent>
          </Card>
          <HStack
            align="stretch"
            spacing={{
              mobile: 16,
              md: 24,
            }}
          >
            <Card
              disableHover
              style={{
                flex: 1,
              }}
            >
              <CardContent
                direction={`column`}
                spacing={{ mobile: 24, lg: `unset` }}
                justify="space-between"
                sprinkles={{
                  height: `full`,
                }}
              >
                <Button
                  onClick={open}
                  variant="purple"
                  size={`md`}
                  style={{
                    zIndex: 2,
                  }}
                >
                  Contattaci
                </Button>
                <Body
                  variant="xl"
                  fontWeight={700}
                  sprinkles={{
                    color: `white`,
                    __zIndex: 1,
                  }}
                >
                  Veloci, responsivi e super preformanti
                </Body>
                <CardImage isAbsolute>
                  <StaticImage
                    placeholder="none"
                    src="../../images/card-2-hero.png"
                    alt="card purple background"
                    style={{
                      height: `100%`,
                    }}
                  />
                </CardImage>
              </CardContent>
            </Card>
            <Card
              disableHover
              style={{
                flex: 1,
              }}
            >
              <CardContent
                direction={`column`}
                spacing={{ mobile: 24, lg: `unset` }}
                justify="space-between"
                sprinkles={{
                  height: `full`,
                }}
              >
                <Body
                  variant="xl"
                  fontWeight={700}
                  sprinkles={{
                    color: `white`,
                    __zIndex: 1,
                  }}
                >
                  Un team di sviluppatori al tuo servizio.
                </Body>
                <Body
                  variant="lg"
                  fontWeight={500}
                  sprinkles={{
                    color: `white`,
                    __zIndex: 1,
                  }}
                >
                  Nessun tool. Persone preparate.
                </Body>
                <CardImage isAbsolute>
                  <StaticImage
                    placeholder="none"
                    src="../../images/card-3-hero.png"
                    alt="card purple background"
                    style={{
                      height: `100%`,
                    }}
                  />
                </CardImage>
              </CardContent>
            </Card>
          </HStack>
        </Box>
      </Box>
    </CardHeroContainer>
  )
}
