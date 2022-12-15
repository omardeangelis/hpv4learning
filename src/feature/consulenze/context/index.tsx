import React from "react"

type ContextProps = {
  openModal: () => void
}

const ConsulenzeContext = React.createContext<ContextProps | null>(null)

export const ConsulenzeProvider = ConsulenzeContext.Provider

export const useConsulenzeContext = () => React.useContext(ConsulenzeContext)
