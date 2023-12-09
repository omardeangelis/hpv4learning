import React from "react"
import { Box } from "old-ui"
import { BoxExtendedProps } from "../../../types/system"

type AccordionHeaderProps = BoxExtendedProps<HTMLDivElement>

export const AccordionItemHeader: React.FC<AccordionHeaderProps> = ({
  children,
  ...rest
}) => (
  <Box width="full" {...rest}>
    {children}
  </Box>
)
