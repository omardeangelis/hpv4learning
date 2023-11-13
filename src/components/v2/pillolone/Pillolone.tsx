import React from "react"
import { Body, Box } from "old-ui"
import { clsx } from "clsx"
import { BoxExtendedProps } from "../../../types/system"
import { ContainerColorScheme, container } from "./pillolone.css"

type Props = BoxExtendedProps<HTMLDivElement> & {
  colorScheme: ContainerColorScheme
}

export const Pillolone: React.FC<Props> = ({
  children,
  className,
  colorScheme,
  ...rest
}) => (
  <Box
    {...rest}
    className={clsx(
      container.base,
      container.colorScheme[colorScheme],
      className
    )}
  >
    <Body
      sprinkles={{ textAlign: `center`, __color: `inherit` }}
      as="p"
      variant="xl"
      fontWeight={600}
    >
      {children}
    </Body>
  </Box>
)
