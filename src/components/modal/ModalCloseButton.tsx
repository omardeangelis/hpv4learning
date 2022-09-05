import React from "react";
import styled from "@emotion/styled";
import CloseIcon from "@mui/icons-material/Close";

interface Props {
  onClose: () => void;
  color?: string;
}

export const ModalCloseButton = ({ onClose, color, ...rest }: Props) => {
  const CloseButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    & svg {
      color: ${color ? color : "var(--gray-500)"};
      margin: 0;
    }
  `;

  return (
    <CloseButton onClick={onClose} {...rest}>
      <CloseIcon />
    </CloseButton>
  );
};
