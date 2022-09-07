import React from "react";
import styled from "@emotion/styled";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { IconButton, IconButtonProps } from "@mui/material";

interface CloseButtonProps {
  onClose: () => void;
  color?: string;
}

interface BackButtonProps {
  onBack: () => void;
  color?: string;
}

const StyledButton = styled(IconButton)<{ align: "left" | "right" }>(
  ({ align }) => ({
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    position: "absolute",

    left: align === "left" ? ["12px", "16px"] : "inherit",
    right: align === "right" ? ["12px", "16px"] : "inherit",
  }),
);

export const ModalCloseButton = ({
  onClose,
  color,
  ...rest
}: CloseButtonProps & IconButtonProps) => {
  return (
    <StyledButton align='right' onClick={onClose} size='medium' {...rest}>
      <CloseIcon sx={{ color: color ? color : "var(--gray-500)", margin: 0 }} />
    </StyledButton>
  );
};

export const ModalBackButton = ({
  onBack,
  color,
  ...rest
}: BackButtonProps & IconButtonProps) => {
  return (
    <StyledButton align='left' onClick={onBack} size='medium' {...rest}>
      <ArrowBackIcon
        sx={{ color: color ? color : "var(--gray-500)", margin: 0 }}
      />
    </StyledButton>
  );
};
