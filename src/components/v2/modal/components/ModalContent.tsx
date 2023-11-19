import React from "react"
import { Box } from "old-ui"
import clsx from "clsx"
import { BoxExtendedProps } from "../../../../types/system"
import { modalContentStyle } from "../style/modal-content.css"

type Props = React.FC<BoxExtendedProps<HTMLDivElement>>

export const ModalContent: Props = ({ children, className, ...rest }) => (
  <Box {...rest} className={clsx(modalContentStyle, className)}>
    {children}
  </Box>
)
