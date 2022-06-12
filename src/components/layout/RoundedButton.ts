import styled from "@emotion/styled";
import { Button, ButtonProps, css } from "@mui/material";

interface RoundedBTN extends ButtonProps {
  isFullWidth?: true;
}

export const RoundedButton = styled(Button)<RoundedBTN>(
  css({
    borderRadius: "100px",
  }),
  ({ isFullWidth }) => ({
    width: isFullWidth ? "100%" : "fit-content",
  })
);
