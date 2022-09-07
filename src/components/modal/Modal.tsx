import React from "react";
import styled from "@emotion/styled";
import { Box } from "@mui/system";
import { Global } from "@emotion/react";
import { ModalProvider } from "./context";

const ModalWrapper = styled(Box)({
  position: "fixed",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  top: "0",
  left: "0",
  height: "100vh",
  width: "100vw",
  zIndex: "modal",
});

type Props = {
  onClose: () => void;
  children: React.ReactNode;
};

const ModalOverlay = styled(Box)`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  background-color: "rgba(208, 213, 221, 0.9)";
`;

export const Modal = ({ onClose, children }: Props) => {
  return (
    <ModalWrapper>
      <ModalOverlay onClick={onClose} />
      <Global
        styles={{
          "body": {
            overflow: "hidden !important",
          },
        }}
      />
      <ModalProvider
        value={{
          onClose,
        }}
      >
        {children}
      </ModalProvider>
    </ModalWrapper>
  );
};
