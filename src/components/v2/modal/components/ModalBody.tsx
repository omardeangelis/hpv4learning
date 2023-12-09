import { Box } from "old-ui"
import React from "react"
import clsx from "clsx"
import { BoxExtendedProps } from "../../../../types/system"
import { modalBody } from "../style/modal-body.css"

type Props = React.FC<BoxExtendedProps<HTMLDivElement>>

export const ModalBody: Props = ({ children, className, ...rest }) => (
  <Box {...rest} className={clsx(modalBody, className)}>
    {children}
  </Box>
)
