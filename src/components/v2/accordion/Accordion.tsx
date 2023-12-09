import React from "react"
import { StackProps, VStack } from "old-ui"
import {
  AccordionProvider,
  AccordionProviderProps,
} from "./context/AccordionProvider"

type AccordionProps = AccordionProviderProps & StackProps

export const Accordion: React.FC<AccordionProps> = ({
  defaultExpanded,
  children,
  ...rest
}) => {
  const [expanded, setExpanded] = React.useState<false | number>(
    defaultExpanded ?? false
  )
  const value = React.useMemo(() => ({ expanded, setExpanded }), [expanded])

  const clonedWithPosition = React.useMemo(
    () =>
      React.Children.map(children, (child, index) =>
        React.cloneElement(child as React.ReactElement, {
          i: index,
        })
      ),
    [children]
  )
  return (
    <AccordionProvider value={value}>
      <VStack {...rest}>{clonedWithPosition}</VStack>
    </AccordionProvider>
  )
}
