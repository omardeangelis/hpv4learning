import { StaticImage } from "gatsby-plugin-image"
import { Box, HStack, StackProps, Text, VStack } from "old-ui"
import { navigate } from "gatsby"
import React from "react"
import { useGATracking } from "../../../../services/tracking/context/GATrackerProvider"
import { homePageEvents } from "../../../../services/tracking/constant/homepage"

type MobileHeroCardProps = StackProps & {
  children: React.ReactNode
  text: string
}

const MobileHeroCard: React.FC<MobileHeroCardProps> = ({
  children,
  text,
  ...rest
}) => (
  <VStack
    spacing={8}
    sprinkles={{
      width: `full`,
      __zIndex: 8,
    }}
    {...rest}
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

export const MobileHeroCards = () => {
  const { gaTracker } = useGATracking()
  const handleNavigate = React.useCallback(
    ({ path, payload }: { path: string; payload: string }) => {
      gaTracker?.sendEvent({
        eventName: homePageEvents.home_hero_card_click,
        payload: {
          content: payload,
        },
      })
      navigate(path)
    },
    [gaTracker]
  )
  return (
    <HStack
      justify="space-between"
      align="center"
      spacing={8}
      sprinkles={{
        width: `full`,
      }}
    >
      <MobileHeroCard
        text="Academy"
        onClick={() =>
          handleNavigate({ path: `/academy/`, payload: `academy` })
        }
      >
        <StaticImage
          src="../../images/mobile-academy.png"
          alt="Sviluppo Web"
          style={{
            width: `100%`,
          }}
        />
      </MobileHeroCard>
      <MobileHeroCard
        text="Sviluppo Web"
        onClick={() =>
          handleNavigate({ path: `/web-agency/`, payload: `web-agency` })
        }
      >
        <StaticImage
          src="../../images/mobile-web-agancy.png"
          alt="Sviluppo Web"
          style={{
            height: `100%`,
            width: `100%`,
          }}
        />
      </MobileHeroCard>
      <MobileHeroCard
        text="Formazione"
        onClick={() =>
          handleNavigate({ path: `/formazione/`, payload: `formazione` })
        }
      >
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
}
