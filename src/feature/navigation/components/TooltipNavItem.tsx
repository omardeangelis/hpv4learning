import { Body, Box } from "old-ui"
import React from "react"
import clsx from "clsx"
import { BoxExtendedProps } from "../../../types/system"
import { tooltipNavItem } from "../style/tooltip.css"

type TooltipNavItemProps = React.FC<BoxExtendedProps<HTMLDivElement>>

export const TooltipNavItem: TooltipNavItemProps = ({
  children,
  className,
  ...rest
}) => (
  <Box className={clsx(tooltipNavItem, className)} {...rest}>
    <Body
      variant="md"
      sprinkles={{
        __color: `inherit`,
      }}
    >
      {children}
    </Body>
  </Box>
)
