import React from "react"

type AccordionContextType = {
  expanded: number | false
  setExpanded: React.Dispatch<React.SetStateAction<number | false>>
}

const initialState = {
  expanded: false as const,
  setExpanded: () => {},
}

const AccordionContext = React.createContext<AccordionContextType>(initialState)

export type AccordionProviderProps = {
  children: React.ReactNode
  defaultExpanded?: number | false
}

export const AccordionProvider = AccordionContext.Provider

export const useAccordionContext = () => {
  const context = React.useContext(AccordionContext)
  if (context === undefined) {
    throw new Error(
      `useAccordionContext must be used within a AccordionProvider`
    )
  }
  return context
}
