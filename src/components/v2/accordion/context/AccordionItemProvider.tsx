import React from "react"

type AccordionItemContextType = {
  isOpen: boolean
}

const initialState = {
  isOpen: false,
}

const AccordionItemContext =
  React.createContext<AccordionItemContextType>(initialState)

export type AccordionProviderProps = {
  children: React.ReactNode
}

export const AccordionItemProvider = AccordionItemContext.Provider

export const useAccordionItemContext = () => {
  const context = React.useContext(AccordionItemContext)
  if (context === undefined) {
    throw new Error(
      `useAccordionItemContext must be used within a AccordionItemProvider`
    )
  }
  return context
}
