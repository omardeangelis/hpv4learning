import { Body, Box, HStack } from "old-ui"
import React from "react"
import clsx from "clsx"
import { StaticImage } from "gatsby-plugin-image"
import { motion } from "framer-motion"
import { navigate } from "gatsby"
import {
  heroCardClosed,
  heroCardOpen,
  heroCardDeafult,
} from "../../style/hero.css"
import { HeroCardEnum, useHomeHeroContext } from "../../context/HomeHeroContext"
import { useGATracking } from "../../../../services/tracking/context/GATrackerProvider"
import { homePageEvents } from "../../../../services/tracking/constant/homepage"

type HeroCardProps = {
  cardType: HeroCardEnum
  children?: React.ReactNode
  text?: string
  defaultState?: "open" | "closed"
}

const variants = {
  open: {
    opacity: 1,
    width: `100%`,
    transition: { duration: 0.4 },
  },
  closed: {
    opacity: 0.8,
    width: `33.333333%`,
    transition: { duration: 0.4 },
  },
}

const textVariants = {
  open: { rotate: 0, fontWeight: 600, transition: { duration: 0.4 } },
  closed: { rotate: -90, fontWeight: 400, transition: { duration: 0.4 } },
}

const HeroCard: React.FC<HeroCardProps> = ({
  cardType,
  children,
  text,
  defaultState = `closed`,
}) => {
  const { extendedCard, setExtendedCard } = useHomeHeroContext()
  const { gaTracker } = useGATracking()
  const isOpen = cardType === extendedCard

  const classes = React.useMemo(
    () => clsx(heroCardDeafult, isOpen ? heroCardOpen : heroCardClosed),
    [isOpen]
  )

  const handleNavigate = React.useCallback(() => {
    switch (extendedCard) {
      case `academy`:
        gaTracker?.sendEvent({
          eventName: homePageEvents.home_hero_card_click,
          payload: {
            content: `academy`,
          },
        })
        navigate(`/academy`)
        break
      case `agency`:
        gaTracker?.sendEvent({
          eventName: homePageEvents.home_hero_card_click,
          payload: {
            content: `web-agency`,
          },
        })
        navigate(`/web-agency`)
        break
      case `edu`:
        gaTracker?.sendEvent({
          eventName: homePageEvents.home_hero_card_click,
          payload: {
            content: `formazione`,
          },
        })
        navigate(`/formazione`)
        break
      default:
        break
    }
  }, [extendedCard, gaTracker])
  return (
    <motion.article
      variants={variants}
      initial={defaultState}
      animate={isOpen ? `open` : `closed`}
    >
      <Box
        borderRadius={16}
        position="relative"
        overflow="hidden"
        __minHeight={532}
        p={{ sm: 24, lg: 72 }}
        className={classes}
        onMouseEnter={() => setExtendedCard(cardType)}
        onClick={handleNavigate}
      >
        <motion.div
          variants={textVariants}
          initial={defaultState}
          animate={isOpen ? `open` : `closed`}
          style={{
            zIndex: 3,
          }}
        >
          <Body
            variant="xl"
            sprinkles={{
              color: `white`,
              __fontWeight: `inherit`,
            }}
            style={{
              whiteSpace: `nowrap`,
            }}
          >
            {text}
          </Body>
        </motion.div>

        <Box
          position="absolute"
          width="full"
          height="full"
          background="grey700"
          __zIndex={2}
          style={{
            top: 0,
            left: 0,
            opacity: 0.2,
          }}
        />
        <Box
          position="absolute"
          width="full"
          height="full"
          __zIndex={1}
          style={{
            top: 0,
            left: 0,
          }}
        >
          {children}
        </Box>
      </Box>
    </motion.article>
  )
}

export const HeroCards = () => (
  <Box width="full" overflow="hidden">
    <HStack
      justify="space-between"
      align="center"
      spacing={16}
      sprinkles={{
        width: `full`,
      }}
    >
      <HeroCard cardType="academy" text="Academy" defaultState="open">
        <StaticImage
          src="../../images/academy-hero-vero.jpg"
          alt="Hero Card Background"
          placeholder="blurred"
          loading="eager"
          style={{
            height: `100%`,
            width: `100%`,
          }}
        />
      </HeroCard>
      <HeroCard cardType="agency" text="Web Agency">
        <StaticImage
          src="../../images/web-agancy-hero.jpeg"
          alt="Hero Card Background"
          placeholder="blurred"
          loading="eager"
          style={{
            height: `100%`,
            width: `100%`,
          }}
        />
      </HeroCard>
      <HeroCard cardType="edu" text="Formazione">
        <StaticImage
          src="../../images/formazione.jpeg"
          alt="Hero Card Background"
          placeholder="blurred"
          loading="eager"
          style={{
            height: `100%`,
            width: `100%`,
          }}
        />
      </HeroCard>
    </HStack>
  </Box>
)
