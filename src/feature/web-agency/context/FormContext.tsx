import React from "react"

type FormContextType = {
  isOpened: boolean
  open: () => void
  close: () => void
}

const formInitialState: FormContextType = {
  isOpened: false,
  open: () => {},
  close: () => {},
}

const FormContext = React.createContext(formInitialState)

export const ContactFormProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [isOpened, setIsOpened] = React.useState(false)
  const open = React.useCallback(() => setIsOpened(true), [])
  const close = React.useCallback(() => setIsOpened(false), [])

  const ctx = React.useMemo(
    () => ({ isOpened, open, close }),
    [close, isOpened, open]
  )
  return <FormContext.Provider value={ctx}>{children}</FormContext.Provider>
}

export const useContactForm = () => React.useContext(FormContext)
