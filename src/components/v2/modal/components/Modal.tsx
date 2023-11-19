import React from "react"
import { ModalWrapper } from "../layout/ModalWrapper"
import { ModalOverlay } from "../layout/ModalOverlay"
import { BoxExtendedProps } from "../../../../types/system"
import { ModalContextProps, ModalProvider } from "../context/ModalProvider"

type Props = React.FC<BoxExtendedProps<HTMLDivElement> & ModalContextProps>

export const Modal: Props = ({ children, onClose, stepIndex }) => {
  const ctx = React.useMemo(
    () => ({ onClose, stepIndex }),
    [onClose, stepIndex]
  )
  return (
    <ModalWrapper>
      <ModalOverlay onClick={onClose} />
      <ModalProvider value={ctx}>{children}</ModalProvider>
    </ModalWrapper>
  )
}
