import React from "react"
import { Box } from "old-ui"
import clsx from "clsx"
import { BoxExtendedProps } from "../../../../types/system"
import {
  cardBoxShadow,
  cardContainerHover,
  genericCardContainer,
} from "./card-base.css"
import { useCardAnimation } from "../hooks/useCardAnimation"

type CardProps = BoxExtendedProps<HTMLDivElement> & {
  disableHover?: true
  hasShadow?: true
  isAnimated?: true
}

export const Card: React.FC<CardProps> = ({
  className,
  children,
  disableHover,
  hasShadow,
  isAnimated,
  style,
  ...rest
}) => {
  const { ref, cardsAnimatedStyle } = useCardAnimation(isAnimated)
  const classes = React.useMemo(
    () =>
      clsx(
        genericCardContainer,
        disableHover ? undefined : cardContainerHover,
        hasShadow ? cardBoxShadow : undefined,
        className
      ),
    [disableHover, hasShadow, className]
  )
  return (
    <Box
      ref={ref}
      className={classes}
      style={{ ...style, ...cardsAnimatedStyle }}
      {...rest}
    >
      {children}
    </Box>
  )
}
