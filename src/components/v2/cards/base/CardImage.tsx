import React from "react"
import clsx from "clsx"
import { cardImageBox, absoluteImageBox } from "./card-image.css"

type CardImageProps = {
  className?: string
  children: React.ReactNode
  isAbsolute?: true
}

export const CardImage: React.FC<CardImageProps> = ({
  className,
  children,
  isAbsolute,
}) => {
  const classes = React.useMemo(
    () =>
      clsx(cardImageBox, isAbsolute ? absoluteImageBox : undefined, className),
    [className, isAbsolute]
  )
  return <div className={classes}>{children}</div>
}
