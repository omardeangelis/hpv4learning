import { Body, Box, Stack, Text, VStack } from "old-ui"
import React from "react"
import { Player } from "@lottiefiles/react-lottie-player"
import { useInView } from "framer-motion"
import {
  ServiceListTextsArray,
  serviceListTextsArray,
} from "../../constant/economici"
import { useTextFadeInAnimation } from "../../../../hook/useTextFadeInAnimation"
import { serviceSpacer } from "../../style/economici/service.css"
import lottieAnim from "../../images/lottie-econ2.json"

export const ServiceList = () => {
  const { ref, fadeInStyle } = useTextFadeInAnimation({
    once: true,
    amount: 0.5,
  })
  return (
    <Box>
      <VStack
        ref={ref}
        spacing={{
          mobile: 64,
          md: 128,
        }}
        align="flex-start"
        sprinkles={{
          width: `full`,
          __zIndex: 2,
        }}
        style={fadeInStyle}
      >
        <VStack
          spacing={{
            mobile: 16,
            md: 32,
          }}
          align="flex-start"
          sprinkles={{
            width: `full`,
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
            style={{
              zIndex: 2,
            }}
          >
            Ottieni una marcia in più
          </Text>
          <Body
            variant="xl"
            fontWeight={400}
            sprinkles={{
              color: `grey400`,
            }}
            as="p"
          >
            Costi contenuti ma grandi servizi{` `}
          </Body>
        </VStack>
        <Stack
          direction={{
            mobile: `column`,
            md: `row`,
          }}
          sprinkles={{
            width: `full`,
          }}
          spacing={{
            mobile: 32,
            md: 64,
          }}
          justify={`space-between`}
          align={{
            mobile: `flex-start`,
            md: `center`,
          }}
        >
          {serviceListTextsArray.map((service) => (
            <Service service={service} />
          ))}
        </Stack>
      </VStack>
      <FlexiblitySection />
    </Box>
  )
}

const FlexiblitySection = () => {
  const { ref, fadeInStyle } = useTextFadeInAnimation({
    once: true,
    amount: 0.5,
  })
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const opacityStyle = React.useMemo(
    () => ({
      opacity: isInView ? 1 : 0,
      transition: `all 0.5s linear 0.3s`,
      WebkitTransition: `all 0.5s linear 0.3s`,
    }),
    [isInView]
  )
  return (
    <Box className={serviceSpacer} position="relative">
      <Stack
        direction={{
          mobile: `column-reverse`,
          md: `row`,
        }}
        spacing={{
          mobile: 32,
          md: 64,
        }}
        justify={`space-between`}
        align={{
          mobile: `flex-start`,
          md: `center`,
        }}
      >
        <Box
          style={{
            ...opacityStyle,
          }}
        >
          <Player autoplay loop controls={false} src={lottieAnim} speed={0.8} />
        </Box>
        <VStack
          ref={ref}
          style={fadeInStyle}
          spacing={{
            mobile: 16,
            md: 32,
          }}
          align="flex-start"
          sprinkles={{
            __maxWidth: `530px`,
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
            Flessibilità a portata di mano
          </Text>
          <Body
            variant="xl"
            as="p"
            fontWeight={400}
            sprinkles={{
              color: `grey400`,
            }}
          >
            Per noi un sito di qualità non si valuta solo con design e
            performance ma anche dalla sua praticità.
          </Body>
          <Body
            as="p"
            variant="xl"
            fontWeight={400}
            sprinkles={{
              color: `grey400`,
            }}
          >
            Le nostre soluzioni sono create per darti il completo controllo sul
            tuo sito.
          </Body>
          <Body
            as="p"
            variant="xl"
            fontWeight={400}
            sprinkles={{
              color: `grey400`,
            }}
          >
            Potrai modificare immagini, testi, aggiungere prodotti, ricevere
            mail senza il nostro intervento.
          </Body>
        </VStack>
      </Stack>
    </Box>
  )
}

const Service = ({ service }: { service: ServiceListTextsArray[number] }) => (
  <VStack
    key={service.title}
    spacing={{
      mobile: 16,
      md: 32,
    }}
    align="flex-start"
  >
    <Body
      variant="lg"
      fontWeight={600}
      sprinkles={{
        color: `grey300`,
      }}
      as="h3"
    >
      {service.title}
    </Body>
    <Stack
      direction={{
        mobile: `row`,
        md: `column`,
      }}
      spacing={{
        mobile: 4,
        md: 12,
      }}
      style={{
        flexWrap: `wrap`,
      }}
    >
      {service.items.map((item) => (
        <Body
          variant="md"
          key={item}
          as="p"
          sprinkles={{
            color: `grey400`,
          }}
        >
          {item}
        </Body>
      ))}
    </Stack>
  </VStack>
)
