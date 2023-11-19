import { Body, Box, IconButton } from "old-ui"
import React from "react"
import clsx from "clsx"
import { BsArrowLeft, BsX } from "react-icons/bs"
import { BoxExtendedProps } from "../../../../types/system"
import {
  modalCloseButtonStyle,
  modalBackButtonStyle,
  modalHeaderStyle,
} from "../style/modal-header.css"
import { useModalContext } from "../context/ModalProvider"

type Props = React.FC<BoxExtendedProps<HTMLDivElement>>

export const ModalHeader: Props = ({ children, className, ...rest }) => (
  <Box className={clsx(modalHeaderStyle, className)} {...rest}>
    {children}
  </Box>
)

export const ModalCloseButton = () => {
  const { onClose } = useModalContext()
  return (
    <Box className={modalCloseButtonStyle}>
      <IconButton
        background="grey20"
        size="sm"
        aria-label="Close"
        onClick={onClose}
      >
        <BsX />
      </IconButton>
    </Box>
  )
}

export const ModalBackButton: React.FC<{ onClick: () => void }> = ({
  onClick,
}) => (
  <Box className={modalBackButtonStyle}>
    <IconButton
      background="grey20"
      size="sm"
      aria-label="Back"
      onClick={onClick}
    >
      <BsArrowLeft />
    </IconButton>
  </Box>
)

export const ModalHeaderTitle: React.FC<BoxExtendedProps<HTMLDivElement>> = ({
  children,
  ...rest
}) => (
  <Box {...rest}>
    <Body
      as="p"
      sprinkles={{
        textAlign: `center`,
      }}
      variant="md"
      fontWeight={600}
    >
      {children}
    </Body>
  </Box>
)
