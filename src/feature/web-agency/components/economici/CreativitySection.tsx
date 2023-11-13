import { VStack, Body, Text, HStack, Box, Chip } from "old-ui"
import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { useTextFadeInAnimation } from "../../../../hook/useTextFadeInAnimation"
import {
  CardImage,
  Card,
  CardContent,
} from "../../../../components/v2/cards/base"
import {
  chipCustomBorderRadius,
  creativityCardBlock,
  creativityCustomCard,
  hiddenCardBox,
} from "../../style/economici/creativity.css"

export const CreativitySection = () => {
  const { ref, fadeInStyle } = useTextFadeInAnimation({
    once: true,
    amount: 0.5,
  })
  return (
    <VStack
      spacing={{
        mobile: 48,
        md: 96,
      }}
      align="flex-start"
    >
      <VStack
        ref={ref}
        style={fadeInStyle}
        spacing={{
          mobile: 16,
          md: 32,
        }}
        align="flex-start"
        sprinkles={{
          __maxWidth: `575px`,
        }}
      >
        <Text
          as="h2"
          variant={{
            mobile: `xxl`,
            md: `2xl`,
          }}
          fontWeight={600}
          sprinkles={{
            color: `grey300`,
          }}
        >
          La creatività non ha prezzo.
        </Text>
        <Body
          variant="lg"
          fontWeight={400}
          sprinkles={{
            color: `grey400`,
          }}
          as="p"
        >
          Il budget non è il limite alla nostra creatività. Condividiamo la
          nostra esperienza per creare soluzioni innovative e di valore.
        </Body>
        <Body
          variant="lg"
          fontWeight={400}
          sprinkles={{
            color: `grey400`,
          }}
          as="p"
        >
          Permettendo alle aziende di iniziare la loro crescita e il
          miglioramento, indipendentemente dalla dimensione del budget iniziale.
        </Body>
        <Body
          variant="lg"
          fontWeight={400}
          sprinkles={{
            color: `grey400`,
          }}
          as="p"
        >
          Il nostro lavoro è fornire uno strumento efficace, che permetta alle
          aziende di iniziare a crescere, scovare nuove opportunità e scalare il
          proprio business online.
        </Body>
      </VStack>
      <HStack spacing={16} align="center" justify="flex-start">
        <Box className={creativityCardBlock}>
          <Card disableHover isAnimated className={creativityCustomCard}>
            <CardContent
              direction={`column`}
              spacing={{ mobile: 24, lg: `unset` }}
              justify="space-between"
              sprinkles={{
                height: `full`,
              }}
            >
              <Chip
                size={{
                  mobile: `small`,
                  md: `medium`,
                }}
                variant="orange"
                className={chipCustomBorderRadius}
                style={{
                  zIndex: 2,
                }}
              >
                Cresciamo insieme
              </Chip>
              <Body
                variant="lg"
                fontWeight={600}
                sprinkles={{
                  color: `white`,
                  __zIndex: 1,
                  maxWidth: `calc(100% - 48px)`,
                }}
              >
                Non è un sito ma un percorso. Iniziamo con prodotto semplice e
                funzionante
              </Body>
              <CardImage isAbsolute>
                <StaticImage
                  placeholder="none"
                  src="../../images/econ-card1.jpeg"
                  alt="A 3d geometric graph"
                  style={{
                    height: `100%`,
                  }}
                />
              </CardImage>
            </CardContent>
          </Card>
          <HStack align="stretch" spacing={16}>
            <Card
              disableHover
              isAnimated
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
                <Chip
                  size={{
                    mobile: `small`,
                    md: `medium`,
                  }}
                  variant="purple"
                  className={chipCustomBorderRadius}
                  style={{
                    zIndex: 2,
                  }}
                >
                  Originale
                </Chip>
                <Body
                  variant="lg"
                  fontWeight={600}
                  sprinkles={{
                    color: `white`,
                    __zIndex: 1,
                  }}
                >
                  Ottieni un prodotto su misura, senza tamplate
                </Body>
                <CardImage isAbsolute>
                  <StaticImage
                    placeholder="none"
                    src="../../images/econ-card2.jpeg"
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
              isAnimated
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
                <Chip
                  size={{
                    mobile: `small`,
                    md: `medium`,
                  }}
                  variant="red"
                  className={chipCustomBorderRadius}
                  style={{
                    zIndex: 2,
                  }}
                >
                  Modificabile
                </Chip>
                <Body
                  variant="lg"
                  fontWeight={600}
                  sprinkles={{
                    color: `white`,
                    __zIndex: 1,
                  }}
                >
                  Modifica in modo rapido i contenuti
                </Body>
                <CardImage isAbsolute>
                  <StaticImage
                    placeholder="none"
                    src="../../images/econ-card3.jpeg"
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
        <Box className={`${creativityCardBlock} ${hiddenCardBox}`}>
          <HStack align="stretch" spacing={16}>
            <Card
              disableHover
              isAnimated
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
                <Chip
                  size={{
                    mobile: `small`,
                    md: `medium`,
                  }}
                  variant="red"
                  className={chipCustomBorderRadius}
                  style={{
                    zIndex: 2,
                  }}
                >
                  Opportunità
                </Chip>
                <Body
                  variant="lg"
                  fontWeight={600}
                  sprinkles={{
                    color: `white`,
                    __zIndex: 1,
                  }}
                >
                  Acquisisci nuovi clienti online{` `}
                </Body>
                <CardImage isAbsolute>
                  <StaticImage
                    placeholder="none"
                    src="../../images/econ-card5.jpeg"
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
              isAnimated
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
                <Chip
                  size={{
                    mobile: `small`,
                    md: `medium`,
                  }}
                  variant="purple"
                  className={chipCustomBorderRadius}
                  style={{
                    zIndex: 2,
                  }}
                >
                  Posizionamento
                </Chip>
                <Body
                  variant="lg"
                  fontWeight={600}
                  sprinkles={{
                    color: `white`,
                    __zIndex: 1,
                  }}
                >
                  Posizionati per le parole chiave per il tuo business{` `}
                </Body>
                <CardImage isAbsolute>
                  <StaticImage
                    placeholder="none"
                    src="../../images/econ-card6.jpeg"
                    alt="card purple background"
                    style={{
                      height: `100%`,
                    }}
                  />
                </CardImage>
              </CardContent>
            </Card>
          </HStack>
          <Card disableHover isAnimated className={creativityCustomCard}>
            <CardContent
              direction={`column`}
              spacing={{ mobile: 24, lg: `unset` }}
              justify="space-between"
              sprinkles={{
                height: `full`,
              }}
            >
              <Chip
                size={{
                  mobile: `small`,
                  md: `medium`,
                }}
                variant="red"
                className={chipCustomBorderRadius}
                style={{
                  zIndex: 2,
                }}
              >
                Scalabile
              </Chip>
              <Body
                variant="lg"
                fontWeight={600}
                sprinkles={{
                  color: `white`,
                  __zIndex: 1,
                  maxWidth: `calc(100% - 48px)`,
                }}
              >
                Come ogni prodotto anche un sito va migliorato e mantenuto nel
                tempo in modo che possa crescere.{` `}
              </Body>
              <CardImage isAbsolute>
                <StaticImage
                  placeholder="none"
                  src="../../images/econ-card4.jpeg"
                  alt="A 3d geometric graph"
                  style={{
                    height: `100%`,
                  }}
                />
              </CardImage>
            </CardContent>
          </Card>
        </Box>
      </HStack>
    </VStack>
  )
}
