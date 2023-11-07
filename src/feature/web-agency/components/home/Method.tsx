import { Box, Button, HStack, Text, VStack } from "old-ui"
import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { useAnimate, useInView } from "framer-motion"
import {
  methodCard,
  methodCardBox,
  methodTextsBox,
} from "../../style/home/method.css"
import {
  Card,
  CardContent,
  CardImage,
} from "../../../../components/v2/cards/base"

export const Method = () => {
  const [scope, animate] = useAnimate()
  const isInView = useInView(scope, { once: true, amount: 0.66 })

  const handleHoverEnter = React.useCallback(() => {
    const elements = scope.current.querySelectorAll(`span`)
    if (elements.length > 0) {
      ;[...elements].reverse().forEach((element, index) => {
        animate(
          element,
          { rotate: 6 * (index + 1) },
          { duration: 0.225, delay: index * 0.1 }
        )
      })
    }
  }, [animate, scope])

  const handleHoverLeave = React.useCallback(() => {
    const elements = scope.current.querySelectorAll(`span`)
    if (elements.length > 0) {
      ;[...elements].forEach((element, index) => {
        animate(
          element,
          { rotate: -6 * (index + 1) },
          { duration: 0.225, delay: index * 0.1 }
        )
      })
    }
  }, [animate, scope])

  React.useEffect(() => {
    if (isInView) {
      const elements = scope.current.querySelectorAll(`span`)
      if (elements.length > 0) {
        ;[...elements].forEach((element, index) => {
          animate(
            element,
            { rotate: -6 * (index + 1) },
            { duration: 0.225, delay: index * 0.1 }
          )
        })
      }
    }
  }, [animate, isInView, scope])
  return (
    <Box position="relative">
      <VStack
        justify={`center`}
        sprinkles={{
          width: `full`,
        }}
      >
        <Box className={methodTextsBox} width="full">
          <HStack
            justify={{
              mobile: `center`,
              md: `space-between`,
            }}
            spacing={{
              mobile: 2,
              md: `unset`,
            }}
            align="center"
            sprinkles={{
              width: `full`,
            }}
          >
            <Text
              sprinkles={{
                color: `grey50`,
              }}
              style={{
                top: `50%`,
              }}
              as="h2"
              fontWeight={600}
              variant={{
                mobile: `2xl`,
                md: `4xl`,
                lg: `6xl`,
                xl: `7xl`,
              }}
            >
              Il nostro
            </Text>
            <Text
              style={{
                top: `50%`,
              }}
              as="h2"
              fontWeight={600}
              variant={{
                mobile: `2xl`,
                md: `4xl`,
                lg: `6xl`,
                xl: `7xl`,
              }}
            >
              metodo
            </Text>
          </HStack>
        </Box>
        <Box
          mt={{
            mobile: 48,
            md: 0,
          }}
          ref={scope}
          className={methodCardBox}
        >
          <Card
            disableHover
            className={methodCard}
            onMouseEnter={handleHoverEnter}
            onMouseLeave={handleHoverLeave}
          >
            <CardContent
              justify="center"
              align="center"
              sprinkles={{
                height: `full`,
              }}
              style={{
                position: `relative`,
                zIndex: 1,
              }}
            >
              <Button variant="purple">Scopri di piu</Button>
            </CardContent>
            <CardImage isAbsolute>
              <StaticImage
                src="../../images/method.jpeg"
                alt="Method"
                placeholder="dominantColor"
                quality={100}
                style={{
                  height: `100%`,
                  width: `100%`,
                }}
              />
            </CardImage>
          </Card>
          <Box
            as="span"
            position="absolute"
            style={{
              zIndex: -1,
            }}
            background="purple50"
            className={methodCard}
            borderRadius={24}
          />
          <Box
            as="span"
            position="absolute"
            style={{
              zIndex: -2,
            }}
            background="purple20"
            className={methodCard}
            borderRadius={24}
          />
          <Box
            as="span"
            position="absolute"
            style={{
              zIndex: -3,
            }}
            background="purple10"
            className={methodCard}
            borderRadius={24}
          />
        </Box>
      </VStack>
    </Box>
  )
}
