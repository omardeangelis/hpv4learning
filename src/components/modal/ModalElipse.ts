import styled from "@emotion/styled";
import { Box } from "@mui/system";

export const ModalElipse = styled(Box)({
  padding: "60px 0px",
  clipPath: "ellipse(100% 75% at 50% 15%)",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "var(--purple-alpha-100)",
});
