import {
  Body,
  Box,
  Button,
  ResponsiveContainer,
  Stack,
  VStack,
  Text,
} from "old-ui"
import React from "react"
import clsx from "clsx"
import { motion } from "framer-motion"
import {
  academyBigCard,
  academyRoundedAvatar,
  academySectionGrid,
  box1,
  box2,
  box3,
} from "../../style/services.css"
import { useGetAllCourseStatsQuery } from "../../../../services/udemy"
import { CategoryCourseSection } from "./AcademyCategoryCourse"
import SeoLink from "../../../../components/shared/SeoLink"
import { useGATracking } from "../../../../services/tracking/context/GATrackerProvider"
import { homePageEvents } from "../../../../services/tracking/constant/homepage"
import { hideFromMd, hideUpToMd } from "../../../../styles/general.css"

const containerVariants = {
  initial: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const dotVariants = {
  initial: {
    y: `0%`,
  },
  animate: {
    y: `5%`,
  },
}

const dotTransition = {
  duration: 0.5,
  yoyo: Infinity,
  ease: `easeInOut`,
}

export const AcademyService = () => {
  const { isLoading, data } = useGetAllCourseStatsQuery()
  const { gaTracker } = useGATracking()
  const delayAnimation = React.useMemo(() => {
    if (isLoading) {
      return `animate`
    }
    setTimeout(() => `initial`, 1000)
  }, [isLoading])
  return (
    <Box
      background="purple10"
      __minHeight="100vh"
      __width="100vw"
      py={{
        mobile: 48,
        md: 96,
      }}
      className={academyBigCard}
      display="flex"
      alignItems="center"
      style={{
        flex: `0 0 auto`,
      }}
    >
      <ResponsiveContainer variant="xl">
        <VStack
          spacing={32}
          justify="flex-start"
          align="center"
          sprinkles={{
            width: `full`,
          }}
        >
          <Stack
            direction={{
              mobile: `column`,
              lg: `row`,
            }}
            spacing={{
              mobile: 32,
              lg: 0,
            }}
            align="center"
            justify="space-between"
            sprinkles={{
              width: `full`,
            }}
          >
            <VStack
              spacing={24}
              align="flex-start"
              sprinkles={{
                __width: `-webkit-fill-available`,
              }}
            >
              <Text
                variant={{
                  mobile: `2xl`,
                  md: `6xl`,
                }}
                as="h2"
                fontWeight={600}
              >
                Impara
                <br className={hideUpToMd} />
                <span className={hideFromMd}> </span>
                nuove skills
              </Text>
              <SeoLink
                className={hideUpToMd}
                isExternal={false}
                link="/academy/"
                onClick={() =>
                  gaTracker?.sendEvent({
                    eventName: homePageEvents.home_explore_academy,
                  })
                }
              >
                <Button colorScheme="purple">Vai all'academy</Button>
              </SeoLink>
            </VStack>
            <motion.div
              variants={containerVariants}
              initial="initial"
              animate={delayAnimation}
              className={academySectionGrid}
            >
              <motion.div
                variants={dotVariants}
                transition={dotTransition}
                className={clsx(academyRoundedAvatar, box1)}
              >
                <Body
                  variant="lg"
                  sprinkles={{ textAlign: `center` }}
                  fontWeight={600}
                >
                  {data?.totalSubscribers}
                  <br />
                  Studenti
                </Body>
              </motion.div>
              <motion.div
                variants={dotVariants}
                transition={dotTransition}
                className={clsx(academyRoundedAvatar, box2)}
              >
                <Body
                  variant="lg"
                  sprinkles={{ textAlign: `center` }}
                  fontWeight={600}
                >
                  {data?.coursesHours}
                  <br />
                  ore
                </Body>
              </motion.div>
              <motion.div
                className={clsx(academyRoundedAvatar, box3)}
                variants={dotVariants}
                transition={dotTransition}
              >
                <Body
                  variant="lg"
                  sprinkles={{ textAlign: `center` }}
                  fontWeight={600}
                >
                  {data?.averageRating}
                  <br />
                  voto medio
                </Body>
              </motion.div>
            </motion.div>
          </Stack>
          <CategoryCourseSection />
        </VStack>
      </ResponsiveContainer>
    </Box>
  )
}

// export const AcademyService = AcademyBox
