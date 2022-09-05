import React from "react";
import styled from "@emotion/styled";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button, ButtonProps } from "@mui/material";

interface CloseButtonProps {
  onClose: () => void;
  color?: string;
}

interface BackButtonProps {
  onBack: () => void;
  color?: string;
}

const StyledButton = styled(Button)`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const ModalCloseButton = ({
  onClose,
  color,
  ...rest
}: CloseButtonProps & ButtonProps) => {
  return (
    <StyledButton onClick={onClose} {...rest}>
      <CloseIcon sx={{ color: color ? color : "var(--gray-500)", margin: 0 }} />
    </StyledButton>
  );
};

export const ModalBackButton = ({
  onBack,
  color,
  ...rest
}: BackButtonProps & ButtonProps) => {
  return (
    <StyledButton onClick={onBack} {...rest}>
      <ArrowBackIcon
        sx={{ color: color ? color : "var(--gray-500)", margin: 0 }}
      />
    </StyledButton>
  );
};
