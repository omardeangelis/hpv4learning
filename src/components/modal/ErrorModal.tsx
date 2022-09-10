import { Box } from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { useResponsive } from "../../hook/useResponsive";
import { useModalContext } from "./context";
import { ModalCloseButton } from "./ModalButtons";
import { ModalElipse } from "./ModalElipse";
import { ModalHeader, ModalTitle } from "./ModalHeader";

type Props = {
  children: React.ReactNode;
};

const ErrorModal = ({ children }: Props) => {
  const { onClose } = useModalContext() || {};
  const { isMobile } = useResponsive();
  return (
    <>
      <ModalHeader>
        {isMobile ? null : <ModalTitle>C'è stato un Errore</ModalTitle>}
        {onClose ? <ModalCloseButton onClose={onClose} /> : null}
      </ModalHeader>
      <ModalElipse>
        <Box maxWidth='184px' mb='38px'>
          <StaticImage
            src='./images/close.png'
            alt="C'è stato un errore"
            placeholder='tracedSVG'
          />
        </Box>
      </ModalElipse>
      {children}
    </>
  );
};

export default ErrorModal;
