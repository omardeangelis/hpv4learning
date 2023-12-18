import React from "react"
import { Box } from "old-ui"
import clsx from "clsx"
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

export const HeroButton = () => {
  const { extendedCard } = useHomeHeroContext()
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
  return (
    <Box className={customHeroButton} boxShadow="loose">
      <Box className={leftButtonSide}>Contattaci</Box>
      <Box className={clsx(rightButtonSide, classes)}>
        <Box className={rightButtonHiddenLayer} />
        <Box __zIndex={2}>Vai</Box>
      </Box>
    </Box>
  )
}
