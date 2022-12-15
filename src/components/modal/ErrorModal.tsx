import Box from "@mui/system/Box"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { navigate } from "gatsby"
import { useResponsive } from "../../hook/useResponsive"
import { ModalCloseButton } from "./ModalButtons"
import { ModalElipse } from "./ModalElipse"
import { ModalHeader, ModalTitle } from "./ModalHeader"

type Props = {
  children: React.ReactNode
}

const ErrorModal = ({ children }: Props) => {
  const handleNavigate = React.useCallback(() => {
    navigate(-1)
  }, [])
  const { isMobile } = useResponsive()
  return (
    <>
      <ModalHeader>
        {isMobile ? null : <ModalTitle>C'è stato un Errore</ModalTitle>}
        {<ModalCloseButton onClose={handleNavigate} />}
      </ModalHeader>
      <ModalElipse>
        <Box maxWidth="184px" mb="38px">
          <StaticImage
            src="./images/close.png"
            alt="C'è stato un errore"
            placeholder="tracedSVG"
          />
        </Box>
      </ModalElipse>
      {children}
    </>
  )
}

export default ErrorModal
