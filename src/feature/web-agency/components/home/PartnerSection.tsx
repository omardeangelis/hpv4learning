import { Body, Heading, VStack } from "old-ui"
import React from "react"
import { useTextFadeInAnimation } from "../../../../hook/useTextFadeInAnimation"

export const PartnerSection = () => {
  const { ref, fadeInStyle } = useTextFadeInAnimation({
    once: true,
    amount: 0.5,
  })
  return (
    <VStack
      align="center"
      justify="center"
      sprinkles={{
        __maxWidth: `756px`,
        mx: `auto`,
      }}
      spacing={{
        mobile: 16,
        md: 24,
      }}
      ref={ref}
      style={fadeInStyle}
    >
      <Heading
        as="h2"
        variant="3xl"
        fontWeight={600}
        sprinkles={{
          textAlign: `center`,
        }}
      >
        Diventa nostro partner
      </Heading>
      <Body
        sprinkles={{
          textAlign: `center`,
          color: `grey300`,
        }}
        variant="xl"
      >
        Siamo un gruppo di persone ambiziose che puntano a costruire e attrarre
        professionisti di talento che vogliono non solo lavorare ma anche
        costruire una carriera.
      </Body>
      <Body
        sprinkles={{
          textAlign: `center`,
          color: `grey300`,
        }}
        variant="xl"
      >
        Collaborare con altri professionisti è il miglior modo per raggiungere
        clienti sempre più importanti, progetti complessi e creare prodotti di
        qualità
      </Body>
    </VStack>
  )
}
