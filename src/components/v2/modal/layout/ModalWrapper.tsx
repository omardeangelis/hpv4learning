import { Box } from "old-ui"
import React from "react"
import { modalWrapperStyle } from "../style/modal-wrapper.css"

export const ModalWrapper = ({ children }: { children: React.ReactNode }) => (
  <Box as="aside" className={modalWrapperStyle}>
    {children}
  </Box>
)
