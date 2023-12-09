import { Box } from "old-ui"
import React from "react"
import { modalOverlayStyle } from "../style/modal-overlay.css"
import { BoxExtendedProps } from "../../../../types/system"

export const ModalOverlay: React.FC<BoxExtendedProps<HTMLDivElement>> = ({
  ...args
}) => <Box className={modalOverlayStyle} as="div" {...args} />
