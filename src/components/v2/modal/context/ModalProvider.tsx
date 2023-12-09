import { createContext, useContext } from "react"

export type ModalContextProps = {
  onClose?: () => any
  stepIndex?: number
}

export const ModalContext = createContext<ModalContextProps>({})

export const ModalProvider = ModalContext.Provider

export const useModalContext = () => useContext(ModalContext)
