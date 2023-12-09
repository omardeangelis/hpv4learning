import React from "react"
import { Box } from "old-ui"
import { modalFooter } from "../style/modal-footer.css"
import { BoxExtendedProps } from "../../../../types/system"

type Props = React.FC<BoxExtendedProps<HTMLDivElement>>

export const ModalFooter: Props = ({ children, ...rest }) => (
  <Box className={modalFooter} {...rest}>
    {children}
  </Box>
)
