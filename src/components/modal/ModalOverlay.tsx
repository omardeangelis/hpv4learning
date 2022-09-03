import React from "react";
import styled from "@emotion/styled";

interface Props {
  color?: string;
  closeModal?: () => void;
  children: JSX.Element;
}

export const ModalOverlay = ({
  color,
  closeModal,
  children,
  ...rest
}: Props) => {
  const Overlay = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    background-color: ${color ? color : "rgba(208, 213, 221, 0.9)"};
  `;

  return (
    <Overlay onClick={closeModal && closeModal} {...rest}>
      {children}
    </Overlay>
  );
};
