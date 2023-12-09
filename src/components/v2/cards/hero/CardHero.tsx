import clsx from "clsx"
import { Box } from "old-ui"
import React from "react"
import { BoxExtendedProps } from "../../../../types/system"
import { cardContainer } from "./style.css"

export const CardHeroContainer: React.FC<BoxExtendedProps<HTMLDivElement>> = ({
  className,
  children,
  ...rest
}) => (
  <Box className={clsx(className, cardContainer)} {...rest}>
    {children}
  </Box>
)
