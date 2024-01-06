import React from "react"
import { Box } from "old-ui"
import clsx from "clsx"
import { navigate } from "gatsby"
import {
  customHeroButton,
  leftButtonSide,
  rightButtonHiddenLayer,
  rightButtonSide,
  isAcademyButton,
  isWebAgencyButton,
  isFormazioneButton,
} from "../../style/hero.css"
import { useHomeHeroContext } from "../../context/HomeHeroContext"
import { useGATracking } from "../../../../services/tracking/context/GATrackerProvider"
import { homePageEvents } from "../../../../services/tracking/constant/homepage"

export const HeroButton = () => {
  const { extendedCard } = useHomeHeroContext()
  const { gaTracker } = useGATracking()
  const classes = React.useMemo(() => {
    switch (extendedCard) {
      case `academy`:
        return isAcademyButton
      case `agency`:
        return isWebAgencyButton
      case `edu`:
        return isFormazioneButton
      default:
        return isAcademyButton
    }
  }, [extendedCard])

  const handleNavigate = React.useCallback(() => {
    gaTracker?.sendEvent({
      eventName: homePageEvents.home_hero_contact,
    })
    navigate(`/web-agency/?form=open`)
  }, [gaTracker])
  return (
    <Box
      className={customHeroButton}
      boxShadow="loose"
      onClick={handleNavigate}
    >
      <Box className={leftButtonSide}>Contattaci</Box>
      <Box className={clsx(rightButtonSide, classes)}>
        <Box className={rightButtonHiddenLayer} />
        <Box __zIndex={2}>Vai</Box>
      </Box>
    </Box>
  )
}
