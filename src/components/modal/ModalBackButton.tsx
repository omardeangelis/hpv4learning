import React from "react";
import styled from "@emotion/styled";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

interface Props {
  onBack: () => void;
  color?: string;
}

export const ModalBackButton = ({ onBack, color, ...rest }: Props) => {
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
    <CloseButton onClick={onBack} {...rest}>
      <ArrowBackIcon />
    </CloseButton>
  );
};
