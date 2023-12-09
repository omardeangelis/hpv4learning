import React from "react"
import { Box } from "old-ui"
import { BoxExtendedProps } from "../../../types/system"
import { useAccordionContext } from "./context/AccordionProvider"
import { AccordionItemProvider } from "./context/AccordionItemProvider"

type AccordionItemProps = BoxExtendedProps<HTMLDivElement> & {
  children: React.ReactNode
  i?: number
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  i,
  children,
  ...rest
}) => {
  const { expanded, setExpanded } = useAccordionContext()
  const isOpen = i === expanded
  return (
    <Box {...rest} onClick={() => setExpanded(isOpen ? false : i!)}>
      <AccordionItemProvider value={{ isOpen }}>
        {children}
      </AccordionItemProvider>
    </Box>
  )
}
