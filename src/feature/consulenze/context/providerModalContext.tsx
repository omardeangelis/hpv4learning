import React from "react"

type ContextProps = {
  provider: "gmail" | "manual"
}

const providerModalContext = React.createContext<ContextProps | null>(null)

export const ProviderModalProvider = providerModalContext.Provider

export const useProviderModalContext = () =>
  React.useContext(providerModalContext)
