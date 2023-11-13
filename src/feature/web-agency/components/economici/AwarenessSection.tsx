import { Box, Heading, VStack } from "old-ui"
import React from "react"
import { navigate } from "gatsby"
import { useTextFadeInAnimation } from "../../../../hook/useTextFadeInAnimation"
import { Pillolone } from "../../../../components/v2/pillolone/Pillolone"

export const AwarenessSection = () => {
  const { ref, fadeInStyle } = useTextFadeInAnimation({
    once: true,
    amount: 0.5,
  })
  return (
    <VStack
      align="center"
      justify="center"
      spacing={{
        mobile: 24,
        md: 48,
      }}
    >
      <Box __maxWidth={`575px`} width="full" ref={ref} style={fadeInStyle}>
        <Heading
          sprinkles={{
            textAlign: `center`,
            color: `grey300`,
          }}
          variant="2xl"
          as="p"
          fontWeight={600}
          style={{
            fontStyle: `italic`,
          }}
        >
          “Sono davvero impressionato dalla qualità del lavoro. E’ stato tutto
          costruito intorno alla nostra attività”
        </Heading>
      </Box>
      <Pillolone
        role="button"
        colorScheme="orange"
        onClick={() => navigate(`prenota`)}
      >
        Richiedi un preventivo
      </Pillolone>
    </VStack>
  )
}
