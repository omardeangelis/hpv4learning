import React from "react";
import styled from "@emotion/styled";
import { Box } from "@mui/system";
import { Global, css } from "@emotion/react";
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
  zIndex: 200,
});

type Props = {
  onClose: () => void;
  onContinue: () => void;
  stepIndex: number;
  children: React.ReactNode;
};

const ModalOverlay = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  height: "100vh",
  width: "100vw",
  backgroundColor: "rgba(208, 213, 221, 0.9)",
  opacity: "0.95",
});

export const Modal = ({ onClose, onContinue, stepIndex, children }: Props) => {
  return (
    <ModalWrapper>
      <ModalOverlay onClick={onClose} />
      <Global
        styles={css`
          body {
            overflow-y: hidden !important;
            height: 100vh;
          }
        `}
      />
      <ModalProvider
        value={{
          onClose,
          onContinue,
          stepIndex,
        }}
      >
        {children}
      </ModalProvider>
    </ModalWrapper>
  );
};
